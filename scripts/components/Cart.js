class Cart extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute("id");
    const productId = this.getAttribute("productId");
    const name = this.getAttribute("name") || "Sản phẩm";
    const price = parseInt(this.getAttribute("price").replace(/\./g, ""));
    const color = this.getAttribute("color") || "";
    const size = this.getAttribute("size") || "";
    const img = this.getAttribute("img") || "";
    const quantity = parseInt(this.getAttribute("quantity"));
    const total = price * quantity;

    this.innerHTML = `
      <div class="space-y-6 border-b border-gray-400 border-solid">
        <div class="flex md:grid md:grid-cols-6 items-center gap-4 border-b py-4">
          <div class="flex-shrink-0 flex justify-center">
            <img src="${img}" alt="Sản phẩm" class="w-20 h-20 object-cover rounded" />
          </div>
          <div class="flex flex-col md:grid md:grid-cols-5 md:col-span-5 gap-4 w-full">
            <div class="flex flex-col md:text-center justify-center">
              <h3 class="font-medium text-gray-800">${name}</h3>
              <p class="text-sm text-gray-500">Màu: ${color} | Size: ${size}</p>
            </div>
            <div class="flex items-center md:justify-center">
              <input type="number" value="${quantity}" min="1" class="w-16 border rounded text-center py-1 quantity-input" />
            </div>
            <div class="flex items-center md:justify-center">
              <span class="md:hidden text-gray-500 mr-2">Giá thành:</span>
              <span class="text-gray-700 price">${price.toLocaleString(
                "vi-VN"
              )} đ</span>
            </div>
            <div class="flex items-center font-bold text-gray-700 md:justify-center">
              <span class="md:hidden text-gray-500 mr-2">Thành tiền:</span>
              <span class="cart-table-total text-gray-700">${total.toLocaleString(
                "vi-VN"
              )} đ</span>
            </div>
            <div class="hidden md:flex delete-btn items-center md:col-span-1 justify-center md:order-1">
              <button class="bg-[#AD6E23] text-white rounded p-2 transition">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div class="delete-btn flex md:hidden items-center md:col-span-1 justify-center md:order-1">
            <button class="bg-[#AD6E23] text-white rounded p-2 transition">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    // Gắn sự kiện xóa
    this.querySelectorAll(".delete-btn").forEach((btn) =>
      btn.addEventListener("click", () =>
        this.handleDeleteCart(productId, this)
      )
    );

    // Gắn sự kiện thay đổi số lượng
    this.querySelector(".quantity-input").addEventListener("input", (e) =>
      this.handleQuantityChange(e, id, price)
    );

    // Cập nhật tổng tiền ban đầu
    this.updateCartTotal();

    window.addEventListener("cart:updated", () =>
      this.handleDeleteCart(productId, this)
    );
  }

  handleQuantityChange(e, id, price) {
    const newQuantity = parseInt(e.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) return;

    // Cập nhật thành tiền
    const totalElement = this.querySelector(".cart-table-total");
    totalElement.textContent = `${(newQuantity * price).toLocaleString(
      "vi-VN"
    )} đ`;

    // Cập nhật localStorage
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const updatedCarts = carts.map((item) => {
      if (item.id === parseInt(id)) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    localStorage.setItem("carts", JSON.stringify(updatedCarts));

    // Cập nhật lại tổng tiền toàn bộ
    this.updateCartTotal(true);
  }

  updateCartTotal(recalculate = false) {
    if (recalculate) {
      // Tính lại toàn bộ từ localStorage
      const carts = JSON.parse(localStorage.getItem("carts")) || [];
      const total = carts.reduce((sum, item) => {
        return (
          sum +
          parseInt(item.price.replace(/\D/g, "")) * parseInt(item.quantity)
        );
      }, 0);
      const totalAmountElement = document.querySelector(".cart-total-amount");
      if (totalAmountElement) {
        totalAmountElement.textContent = `${total.toLocaleString("vi-VN")} đ`;
      }
    } else {
      // Cộng tổng từ các phần tử trên DOM
      const totalElements = document.querySelectorAll(".cart-table-total");
      let total = 0;
      totalElements.forEach((el) => {
        const val = parseInt(el.textContent.replace(/\D/g, ""));
        if (!isNaN(val)) total += val;
      });
      const totalAmountElement = document.querySelector(".cart-total-amount");
      if (totalAmountElement) {
        totalAmountElement.textContent = `${total.toLocaleString("vi-VN")} đ`;
      }
    }
  }

  handleDeleteCart(productId, element) {
    try {
      element.remove();

      const carts = JSON.parse(localStorage.getItem("carts")) || [];

      const size = this.getAttribute("size");
      const color = this.getAttribute("color");

      const updatedCarts = carts.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.size === size &&
            item.color === color
          )
      );

      localStorage.setItem("carts", JSON.stringify(updatedCarts));

      // Nếu hết sản phẩm
      if (updatedCarts.length === 0) {
        const cartContainer = document.querySelector(".cart-container");
        if (cartContainer) {
          cartContainer.innerHTML = `
            <div class="text-center py-8">
              <p class="text-gray-500 mb-4">Giỏ hàng của bạn đang trống</p>
              <a href="./category.html" class="bg-[#AD6E23] text-white px-4 py-2 rounded">
                Tiếp tục mua sắm
              </a>
            </div>
          `;
        }
      }

      this.updateCartTotal(true);

      window.dispatchEvent(new CustomEvent("cart:updated"));
    } catch (err) {
      console.error("Lỗi khi xoá sản phẩm:", err.message);
    }
  }
}

customElements.define("app-cart", Cart);
