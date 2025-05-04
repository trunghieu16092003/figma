import callApi from "../services/callApi.js";

let totalAmount = 0;

class Cart extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute("id");
    const name = this.getAttribute("name") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const color = this.getAttribute("color") || "";
    const size = this.getAttribute("size") || "";
    const img = this.getAttribute("img") || "";
    const quantity = JSON.parse(this.getAttribute("quantity"));
    const oldPrice = this.getAttribute("oldPrice") || "0đ";
    let total = quantity * price;
    this.innerHTML = `
      <div class="space-y-6 border-b border-gray-400 border-solid">
        <div class="flex md:grid md:grid-cols-6 items-center gap-4 border-b py-4">

          <!-- Ảnh -->
          <div class="flex-shrink-0 flex justify-center">
            <img src="${img}" alt="Sản phẩm" class="w-20 h-20 object-cover rounded" />
          </div>

          <!-- Khối thông tin -->
          <div class="flex flex-col md:grid md:grid-cols-5 md:col-span-5 gap-4 w-full">
            <!-- Tên sản phẩm -->
            <div class="flex flex-col md:text-center justify-center">
              <h3 class="font-medium text-gray-800">${name}</h3>
              <p class="text-sm text-gray-500">Màu: ${color} | Size: ${size}</p>
            </div>

            <!-- Số lượng -->
            <div class="flex items-center md:justify-center">
              <input type="number" value="${quantity}" min="1" class="w-16 border rounded text-center py-1" />
            </div>

            <!-- Giá -->
            <div class="flex items-center md:justify-center">
              <span class=" md:hidden text-gray-500 mr-2">Giá thành :</span>
              <span class="text-gray-700">${price} đ</span>
            </div>

            <!-- Thành tiền -->
            <div class="flex items-center font-bold text-gray-700 md:justify-center">
              <span class=" md:hidden text-gray-500 mr-2">Thành tiền :</span>
              <span class="cart-table-total text-gray-700">${total} đ</span>
            </div>
          <div class="hidden md:flex delete-btn  items-center md:col-span-1 justify-center md:order-1">
            <button class="bg-[#AD6E23] text-white rounded p-2 transition">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          </div>

          <!-- Nút xóa -->
          <div class="delete-btn flex md:hidden  items-center md:col-span-1 justify-center md:order-1">
            <button class="bg-[#AD6E23] text-white rounded p-2 transition">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>  
    `;
    this.updateCartTotal();

    this.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => this.handleDeleteCart(id, this));
    });
  }
  updateCartTotal() {
    // Sau khi render xong, tìm tất cả các phần tử có class .cart-table-total
    const totalPriceElements = this.querySelectorAll(".cart-table-total");

    totalPriceElements.forEach((element) => {
      const priceText = element.textContent || element.innerText;
      const price = parseInt(priceText.replace(" đ", "").trim());
      if (!isNaN(price)) {
        totalAmount += price;
      }
    });

    // Cập nhật tổng tiền vào phần tử hiển thị tổng tiền trong giỏ hàng
    const totalAmountElement = document.querySelector(".cart-total-amount");
    if (totalAmountElement) {
      totalAmountElement.textContent = totalAmount + " đ";
    }
  }

  async handleDeleteCart(productId, element) {
    try {
      const token = localStorage.getItem("token");

      const res = await callApi.delete("cart", productId, token);

      if (!res.ok) {
        throw new Error("Xoá thất bại");
      }

      // Xoá phần tử trên giao diện nếu API thành công
      element.remove();
      console.log(`Đã xoá sản phẩm ID: ${productId}`);
    } catch (err) {
      console.error("Lỗi khi xoá sản phẩm:", err.message);
    }
  }
}

customElements.define("app-cart", Cart);
