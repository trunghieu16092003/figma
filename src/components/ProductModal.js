class ProductModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="product-modal" class="fixed inset-0 z-50 hidden">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="absolute w-full h-[400px] bg-white shadow-lg transition-all duration-300 ease-in-out transform bottom-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl md:w-full md:rounded-lg"
      >
        <div class="p-4 md:p-10 h-full flex flex-col">
          <button
            id="close-product-modal"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <i class="fa-solid fa-times text-2xl"></i>
          </button>

          <div class="flex flex-col justify-between h-full">
            <!-- Hình ảnh sản phẩm -->
            <div class="flex gap-6">
              <div class="w-1/5">
                <img
                  id="modal-product-image"
                  src=""
                  alt="Sản phẩm"
                  class="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 id="modal-product-brand" class="text-lg font-bold mb-2">
                  FILA
                </h2>
                <h3 id="modal-product-name" class="text-xl font-bold mb-4">
                  Áo hoodie unisex phối màu Vanity
                </h3>
              </div>
            </div>

            <!-- Thông tin sản phẩm -->
            <div class="w-full">
              <div class="mb-6 hidden">
                <span
                  id="modal-product-price"
                  class="text-2xl font-bold text-[#AD6E23]"
                  >650,000đ</span
                >
              </div>

              <div class="mb-6">
                <h4 class="font-semibold mb-2">Kích cỡ</h4>
                <div class="flex flex-wrap gap-2">
                  <button
                    class="size-option px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    S
                  </button>
                  <button
                    class="size-option px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    M
                  </button>
                  <button
                    class="size-option px-4 py-2 border rounded hover:bg-gray-100 bg-[#AD6E23] text-white"
                  >
                    L
                  </button>
                  <button
                    class="size-option px-4 py-2 border rounded hover:bg-gray-100"
                  >
                    XL
                  </button>
                </div>
                <p class="text-sm text-gray-500 mt-2 underline cursor-pointer">
                  Hướng dẫn chọn size
                </p>
              </div>

              <div class="flex gap-6">
                <button
                  class="bg-white border border-[#AD6E23] text-[#AD6E23] font-semibold rounded-lg py-3 px-3 w-1/2 flex justify-center"
                >
                  Mua ngay
                </button>
                <button
                  class="text-white bg-[#AD6E23] font-semibold rounded-lg py-3 px-3 w-1/2 flex justify-center"
                >
                  Thêm giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define("product-modal", ProductModal);
