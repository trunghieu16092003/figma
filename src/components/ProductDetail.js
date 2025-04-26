class ProductDetail extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="product-detail">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="product-info-left flex flex-col md:flex-row gap-4 items-center md:items-start">
  <div class="product-images relative overflow-hidden w-full max-w-xl h-[700px] mb-6 md:mb-0">
    <div
      id="product-img"
      class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-300 ease-in-out"
      style="background-image: url('../../images/productIndex/product1.jpg');"
    ></div>
  </div>

  <div class="hover-imgs flex md:flex-col gap-2 justify-center mt-4 md:mt-0">
    <img src="your-image-url.jpg" alt="Product Image" class="w-20 h-20 object-cover cursor-pointer"/>
    <img src="your-image-url.jpg" alt="Product Image" class="w-20 h-20 object-cover cursor-pointer"/>
  </div>
</div>


          <div class="product-info-right">
          <div class="product-info flex flex-col gap-4">
              <h1 class="product-title text-2xl font-bold">Tên Sản Phẩm</h1>
              <div class="product-price flex gap-4">
                <span class="price-new text-xl text-red-500">1.000.000đ</span>
                <span class="price-old text-lg text-gray-500 line-through">1.200.000đ</span>
              </div>
              <div class="product-options flex flex-col gap-4">
                <div class="size-option">
                  <label for="size" class="font-semibold text-gray-700">Size</label>
                  <select id="size" class="w-full p-2 border border-gray-300 rounded">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                  </select>
                </div>

                <div class="color-option">
                  <label for="color" class="font-semibold text-gray-700">Màu sắc</label>
                  <div class="color-select flex gap-2">
                    <span class="color-swatch w-8 h-8 rounded-full cursor-pointer" style="background-color: red;"></span>
                    <span class="color-swatch w-8 h-8 rounded-full cursor-pointer" style="background-color: blue;"></span>
                    <span class="color-swatch w-8 h-8 rounded-full cursor-pointer" style="background-color: green;"></span>
                  </div>
                </div>
              </div>

              <div class="product-buttons flex gap-4">
                <button class="add-to-cart bg-orange-500 text-white py-2 px-6 rounded-lg">Thêm vào giỏ hàng</button>
                <button class="buy-now bg-green-500 text-white py-2 px-6 rounded-lg">Mua ngay</button>
              </div>
            </div>
            <div class="product-description mb-6">
              <h2 class="text-xl font-semibold mb-3">Giới thiệu sản phẩm</h2>
              <p>
                Đây là sản phẩm tuyệt vời giúc bạn có một phong cách hiện đại và trẻ trung. Chất liệu vải cao cấp và thiết kế tinh tế.
              </p>
            </div>

            <div class="size-chart">
              <h2 class="text-xl font-semibold mb-3">Bảng kích thước</h2>
              <table class="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th class="border p-2">Size</th>
                    <th class="border p-2">Chiều cao</th>
                    <th class="border p-2">Cân nặng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">S</td>
                    <td class="border p-2">150-160 cm</td>
                    <td class="border p-2">40-50 kg</td>
                  </tr>
                  <tr>
                    <td class="border p-2">M</td>
                    <td class="border p-2">160-170 cm</td>
                    <td class="border p-2">50-60 kg</td>
                  </tr>
                  <tr>
                    <td class="border p-2">L</td>
                    <td class="border p-2">170-180 cm</td>
                    <td class="border p-2">60-75 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    `;

    const productImg = this.querySelector("#product-img");

    productImg.addEventListener("mousemove", (e) => {
      const bounds = productImg.getBoundingClientRect();
      const x = ((e.clientX - bounds.left) / bounds.width) * 100;
      const y = ((e.clientY - bounds.top) / bounds.height) * 100;
      productImg.style.transformOrigin = `${x}% ${y}%`;
    });
    
    productImg.addEventListener("mouseenter", () => {
      productImg.style.transform = "scale(2)";
    });
    
    productImg.addEventListener("mouseleave", () => {
      productImg.style.transform = "scale(1)";
      productImg.style.transformOrigin = "center";
    });
  }
}

customElements.define('product-detail', ProductDetail);
