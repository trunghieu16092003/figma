class ProductDetail extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const desc = this.getAttribute("desc") || "";
    const care = this.getAttribute("care") || "";
    const colors = JSON.parse(this.getAttribute("colors")) || "";
    const img = this.getAttribute("img") || "";
    const imgChanges = JSON.parse(this.getAttribute("imgChange")) || "";
    const oldPrice = this.getAttribute("oldPrice") || "0đ";
    const id = this.getAttribute("id") || "0";

    this.innerHTML = `
      <section>
        <p class="mb-5 text-xs">Trang chủ / ${name} </p>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div class="product-info-left flex flex-col md:flex-row gap-4 items-center md:items-start">
            <div class="product-images relative overflow-hidden w-full max-w-xl h-[700px] mb-6 md:mb-0">
              <div
                id="product-img"
                class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-300 ease-in-out"
                style="background-image: url('${img}');"
              ></div>
             </div>

            <div class="img-change flex md:flex-col gap-8 justify-center mt-4 md:mt-0">
            </div>
          </div>
          <div class="product-info-right mt-4 md:mt-0">
            <div class="product-info flex flex-col gap-4">
              <h1 class="product-title text-2xl font-bold">${name}</h1>
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
                <span class="price-new text-xl text-red-500 font-semibold ">${price}</span>
                <span class="price-old text-lg text-gray-500 line-through">${oldPrice}</span>
              </div>
              <div class="product-options flex flex-col gap-4">
                <div class="color-option">
                  <label for="color" class="font-semibold text-gray-700">Màu sắc: Xanh</label>
                  <div class="color-select flex gap-2 md: mt-3">
                  </div>
                </div>
                
                <div class="flex gap-2 mt-2">
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">S</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">M</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">L</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">XL</span>
                  <span style="border: 1px solid #e1e1e1;" class="inline-flex items-center justify-center w-12 h-12 border rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">XXL</span>
                </div>  
              </div>

              <form>
                <div class="flex items-center gap-4">
                  <span>Số lượng: </span>
                  <div style="border: 1px solid #AD6E23;" class="inline-flex rounded-tl-lg rounded-br-lg items-center border border-gray-400">
                    <button type="button" class="decrease w-10 h-10 flex items-center justify-center border-r border-[#AD6E23] rounded-br-lg hover:bg-gray-100 hover:rounded-tl-lg" onclick="decrease()">-</button>
                    <input id="quantity" class="w-10 h-10 text-center rounded flex items-center" value="1" min="1"/>
                    <button type="button"  class="increase w-10 h-10 flex items-center justify-center rounded-tl-lg border-l border-[#AD6E23] hover:bg-gray-100 hover:rounded-br-lg" onclick="increase()">+</button>
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
    <button id="tab-care" class="py-3 px-5 text-gray-600 rounded-t-lg border-b-2 border-transparent focus:outline-none">
      Bảo quản
    </button>
  </div>

  <div id="content-intro">
    <div id="intro-wrapper" class="relative overflow-hidden">
      <div id="intro-text" class="line-clamp-3 leading-10 transition-all duration-300 text-gray-700">
        ${desc}
      </div>
      <!-- Hiệu ứng mờ -->
      <div id="fade-overlay" class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
    <div id="toggle-more" class="mt-2 inline-block cursor-pointer text-[#AD6E23] hover:underline text-sm">Xem thêm</div>
  </div>

  <div id="content-care" class="hidden">
    <p class="text-gray-700 leading-10">
      ${care}
    </p>
  </div>
</div>

          </div>
        </div>
      </section>
    `;

    //xu ly mang color
    const colorSeclect = document.querySelector(".color-select");
    colorSeclect.innerHTML = colors
      .map(
        (color) =>
          `<div >
        <span class="color-swatch inline-block w-8 h-8 rounded-full cursor-pointer" style="background-color: ${color.code};"></span>
        </div>
        `
      )
      .join("");

    // xu ly hien thi cac anh
    const imgChangeDocument = document.querySelector(".img-change");
    console.log(imgChanges);
    imgChangeDocument.innerHTML = imgChanges
      .map(
        (img) =>
          `<img src="${img}" alt="Product Image" class="w-32 h-32 object-cover cursor-pointer"/>`
      )
      .join("");

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

    //click tab
    Object.keys(tabs).forEach((key) => {
      document.getElementById(`tab-${key}`).onclick = () => {
        Object.keys(tabs).forEach((k) => {
          // Hiển thị nội dung tab
          document
            .getElementById(tabs[k])
            .classList.toggle("hidden", k !== key);

          // Xử lý giao diện tab
          const tabElement = document.getElementById(`tab-${k}`);
          tabElement.classList.toggle("text-white", k === key);
          tabElement.classList.toggle("bg-[#AD6E23]", k === key);
          tabElement.classList.toggle("text-[#AD6E23]", k !== key);
          tabElement.classList.toggle("bg-white", k !== key);
        });
      };
    });

    //Xu ly su kien click vao anh
    this.handleImageChange(this);

    //xu lu su kien click bang mau
    this.handleColorClick(this);

    //tang giam so luong
    const inputQuantity = this.querySelector("#quantity");

    const increase = () => {
      let currentValue = parseInt(inputQuantity.value) || 1;
      inputQuantity.value = currentValue + 1;
    };

    const decrease = () => {
      let currentValue = parseInt(inputQuantity.value) || 1;
      if (currentValue > 1) {
        inputQuantity.value = currentValue - 1;
      }
    };

    this.querySelector(".decrease").onclick = decrease;
    this.querySelector(".increase").onclick = increase;

    //ham xu ly click size
    this.handleSizeClick(this);
  }

  handleImageChange(productElement) {
    const productImgEl = productElement.querySelector("#product-img");
    const imgChangeItems = productElement.querySelectorAll(".img-change img");

    imgChangeItems.forEach((imgEl) => {
      imgEl.addEventListener("click", () => {
        const src = imgEl.getAttribute("src");
        productImgEl.style.backgroundImage = `url('${src}')`;
      });
    });
  }

  handleColorClick(wrapperElement) {
    const swatches = wrapperElement.querySelectorAll(".color-swatch");

    swatches.forEach((swatch) => {
      swatch.addEventListener("click", () => {
        swatches.forEach((s) => {
          s.classList.remove(
            "border-white",
            "outline-black",
            "outline",
            "border",
            "border-solid",
            "oulineoutline-offset-[4px]"
          );
          s.classList.add("border-transparent", "outline-transparent");
        });

        swatch.classList.remove("border-transparent", "outline-transparent");
        swatch.classList.add(
          "border-white",
          "outline-black",
          "outline",
          "border",
          "border-solid",
          "oulineoutline-offset-[4px]"
        );
      });
    });
  }

  handleSizeClick(wrapperElement) {
    const sizeElements = wrapperElement.querySelectorAll(
      ".product-options span"
    );

    sizeElements.forEach((el) => {
      el.addEventListener("click", () => {
        sizeElements.forEach((e) => {
          e.style.borderColor = "#e1e1e1";
        });
        el.style.borderColor = "#AD6E23";
      });
    });
  }
}

customElements.define("product-detail", ProductDetail);
