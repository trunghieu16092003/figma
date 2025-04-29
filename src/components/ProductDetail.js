class ProductDetail extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="product-detail">
        <p class="mb-5 text-xs">Trang chủ / Áo thun nữ </p>
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
              <div class="flex">
                <span>SKU: 37477979</span>
                <div class="flex ml-4 gap-3">
                  <div>
                    <i class="fa-solid fa-star text-[#AD6E23]"></i>
                    <i class="fa-solid fa-star text-[#AD6E23]"></i>
                    <i class="fa-solid fa-star text-[#AD6E23]"></i>
                    <i class="fa-solid fa-star text-[#AD6E23]"></i>
                    <i class="fa-solid fa-star text-[#AD6E23]"></i>
                  </div>
                  <span>(0 danh gia)</span>
                </div>
              </div>
                
              <div class="product-price flex gap-4">
                <span class="price-new text-xl text-red-500">1.000.000đ</span>
                <span class="price-old text-lg text-gray-500 line-through">1.200.000đ</span>
              </div>
              <div class="product-options flex flex-col gap-4">
                <div class="color-option">
                  <label for="color" class="font-semibold text-gray-700">Màu sắc: Xanh</label>
                  <div class="color-select flex gap-2 md: mt-3">
                    <span class="color-swatch w-8 h-8 rounded-full cursor-pointer" style="background-color: red;"></span>
                    <span class="color-swatch w-8 h-8 rounded-full cursor-pointer" style="background-color: blue;"></span>
                    <span class="color-swatch w-8 h-8 rounded-full cursor-pointer" style="background-color: green;"></span>
                  </div>
                </div>
                
                <div class="flex gap-2 mt-2">
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border-4 rounded cursor-pointer transition-all hover:border-black active:border-black">S</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-black active:border-black">M</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-black active:border-black">L</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-black active:border-black">XL</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-black active:border-black">XXL</span>
                </div>  
              </div>

              <form>
                <div class="flex items-center gap-4">
                  <span>So luong</span>
                  <div style="border: 1px solid #AD6E23;" class="inline-flex rounded-tl-lg rounded-br-lg items-center border border-gray-400">
                    <button type="button" class="w-10 h-10 flex items-center justify-center border-r border-[#AD6E23] rounded-br-lg hover:bg-gray-100 hover:rounded-tl-lg" onclick="decrease()">-</button>
                    <input id="quantity" class="w-10 h-10 text-center rounded flex items-center" value="1" min="1"/>
                    <button type="button" class="w-10 h-10 flex items-center justify-center rounded-tl-lg border-l border-[#AD6E23] hover:bg-gray-100 hover:rounded-br-lg" onclick="increase()">+</button>
                  </div>
                </div>
                  
                <div class="product-buttons flex gap-4 mt-8">
                  <button class="add-to-cart  border border-[#AD6E23]  py-4 px-6 rounded-lg hover:text-white hover:bg-[#AD6E23] transition-all">Thêm vào giỏ hàng</button>
                  <button class="buy-now  bg-[#AD6E23] text-white py-2 px-6 rounded-lg">Mua ngay</button>
                </div>
              </form>
            </div>

           <div class="w-full max-w-xl">
  <!-- Tabs -->
  <div class="tab-detail flex border-b mt-6 ">
    <button id="tab-intro" class="py-3 px-5 bg-[#AD6E23] rounded-t-lg text-white font-semibold text-[16px] border-b-2 border-transparent hover:text-white hover:bg-[#AD6E23] focus:outline-none active-tab">
      Giới thiệu
    </button>
    <button id="tab-care" class="py-3 px-5 text-gray-600 border-b-2 border-transparent hover:text-black focus:outline-none">
      Bảo quản
    </button>
  </div>

  <div id="content-intro">
    <div id="intro-wrapper" class="relative overflow-hidden">
      <div id="intro-text" class="line-clamp-3 leading-10 transition-all duration-300 text-gray-700">
        Đây là phần giới thiệu sản phẩm. Nội dung này sẽ rất dài nên mình cần cắt bớt để khi người dùng nhấn "Xem thêm" thì mới hiện ra hết toàn bộ nội dung chi tiết liên quan đến sản phẩm, mô tả, thông tin chi tiết về sản phẩm...
        Mong cac ban thong cam nha hehehee
        asfdjksajflkasjfksjfkjasfjksl
        afjksajdfklsjalkfdasssssssssss
      </div>
      <!-- Hiệu ứng mờ -->
      <div id="fade-overlay" class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
    <div id="toggle-more" class="mt-2 inline-block cursor-pointer text-blue-500 hover:underline text-sm">Xem thêm</div>
  </div>

  <div id="content-care" class="hidden">
    <p class="text-gray-700 leading-10">
      Hướng dẫn bảo quản sản phẩm: tránh ánh sáng trực tiếp, bảo quản nơi khô ráo thoáng mát, tránh ẩm mốc...
    </p>
  </div>
</div>

          </div>
        </div>
      </section>
    `;

    // Xu ly scale anh khi mouse hover
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

    const tabs = { intro: "content-intro", care: "content-care" };
    const fadeOverlay = document.getElementById("fade-overlay");

    Object.keys(tabs).forEach((key) => {
      document.getElementById(`tab-${key}`).onclick = () => {
        Object.keys(tabs).forEach((k) => {
          document
            .getElementById(tabs[k])
            .classList.toggle("hidden", k !== key);
          document
            .getElementById(`tab-${k}`)
            .classList.toggle("active-tab", k === key);
        });
      };
    });

    const introText = document.getElementById("intro-text");
    const toggleBtn = document.getElementById("toggle-more");
    let expanded = false;

    toggleBtn.onclick = () => {
      expanded = !expanded;
      introText.classList.toggle("line-clamp-3", !expanded);
      fadeOverlay.classList.toggle("hidden", expanded);
      toggleBtn.textContent = expanded ? "Thu gọn" : "Xem thêm";
    };
  }
}

customElements.define("product-detail", ProductDetail);
