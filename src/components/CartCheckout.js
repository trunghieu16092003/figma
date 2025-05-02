class CartCheckout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class=" py-10 px-4">
          <div class="max-w-6xl mx-auto bg-white p-6">
            <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Giỏ hàng của bạn</h2>
  
            <!-- Header -->
            <div class="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-3 mb-4 text-sm md:text-base">
              <div class="col-span-1 flex items-center">Ảnh</div>
              <div class="col-span-2 flex items-center">Sản phẩm</div>
              <div class="col-span-1 flex items-center justify-center">Số lượng</div>
              <div class="col-span-1 flex items-center justify-center">Giá</div>
              <div class="col-span-1 flex items-center justify-center">Thành tiền</div>
            </div>
  
            <!-- Danh sách sản phẩm -->
            <div class="space-y-6 border border-gray-400">
  <div class="flex md:grid md:grid-cols-6 items-center gap-4 border-b pb-4">

    <!-- Ảnh -->
    <div class="flex-shrink-0 flex justify-center md:justify-start">
      <img src="https://via.placeholder.com/80" alt="Sản phẩm" class="w-20 h-20 object-cover rounded" />
    </div>

    <!-- Khối thông tin -->
    <div class="flex flex-col md:grid md:grid-cols-5 md:col-span-5 gap-4 w-full">
      <!-- Tên sản phẩm -->
      <div class="flex flex-col md:col-span-2 md:text-left justify-center">
        <h3 class="font-medium text-gray-800">Áo thun nam basic</h3>
        <p class="text-sm text-gray-500">Màu: Trắng | Size: M</p>
      </div>

      <!-- Số lượng -->
      <div class="flex items-center md:justify-center">
        1
      </div>

      <!-- Giá -->
      <div class="flex items-center md:justify-center">
        <span class=" md:hidden text-gray-500 mr-2">Giá thành</span>
        <span class="text-gray-700">250.000₫</span>
      </div>

      <!-- Thành tiền -->
      <div class="flex items-center font-bold text-gray-700 md:justify-center">
        <span class=" md:hidden text-gray-500 mr-2">Thành tiền</span>
        <span class="text-gray-700">250.000₫</span>
      </div>
    </div>
  </div>
</div>

  
            <!-- Tổng cộng -->
             <div class="flex flex-col md:flex-row justify-between items-center mt-10 space-y-4 md:space-y-0">
              <div class="">
                <span class="text-xs">Tổng cộng:</span> <span class="text-[#AD6E23] text-lg font-semibold">250.000₫</span>
              </div>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define("app-checkout", CartCheckout);
