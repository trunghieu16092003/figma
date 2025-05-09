class CartCheckout extends HTMLElement {
  connectedCallback() {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];

    const cartHTML = carts.map(item => `
      <div class="flex md:grid md:grid-cols-6 items-center gap-4 border-b pb-4">
        <div class="flex-shrink-0 flex justify-center md:justify-start">
          <img src="${item.img}" alt="${item.name}" class="w-20 h-20 object-cover rounded" />
        </div>

        <div class="flex flex-col md:grid md:grid-cols-5 md:col-span-5 gap-4 w-full">
          <div class="flex flex-col md:col-span-2 md:text-left justify-center">
            <h3 class="font-medium text-gray-800">${item.name}</h3>
            <p class="text-sm text-gray-500">Màu: ${item.color} | Size: ${item.size}</p>
          </div>

          <div class="flex items-center md:justify-center">
            ${item.quantity}
          </div>

          <div class="flex items-center md:justify-center">
            <span class="text-gray-700">${item.price}</span>
          </div>

          <div class="flex items-center font-bold text-gray-700 md:justify-center">
            <span class="text-gray-700">${(item.price.replace(/\D/g, "") * item.quantity).toLocaleString("vi-VN")}₫</span>
          </div>
        </div>
      </div>
    `).join("");

    const total = carts.reduce((acc, item) => acc + (item.price.replace(/\D/g, "") * item.quantity), 0);

    this.innerHTML = `
      <section class="py-10">
        <div class=" bg-white ">
          <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Giỏ hàng của bạn</h2>

          <div class="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-3 mb-4 text-sm md:text-base">
            <div class="col-span-1 flex items-center">Ảnh</div>
            <div class="col-span-2 flex items-center">Sản phẩm</div>
            <div class="col-span-1 flex items-center justify-center">Số lượng</div>
            <div class="col-span-1 flex items-center justify-center">Giá</div>
            <div class="col-span-1 flex items-center justify-center">Thành tiền</div>
          </div>

          <div class="space-y-6 border border-gray-400">
            ${cartHTML}
          </div>

          <div class="flex flex-col md:flex-row justify-between items-center mt-10 space-y-4 md:space-y-0">
            <div>
              <span class="text-xs">Tổng cộng:</span> 
              <span class="text-[#AD6E23] text-lg font-semibold">
                ${total.toLocaleString("vi-VN")}₫
              </span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("app-checkout", CartCheckout);
