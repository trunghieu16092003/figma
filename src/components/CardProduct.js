class CardProduct extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const img = this.getAttribute("img") || "";
    const hoverImg = this.getAttribute("hoverImg") || img;
    const oldPrice = this.getAttribute("oldPrice") || "0đ";

    this.innerHTML = `
      <div class="bg-white rounded-lg shadow hover:shadow-md transition p-4">
        <div class="relative overflow-hidden rounded-md h-[350px] group">
          <img 
            src="${img}" 
            alt="${title}" 
            class="product-img w-full h-full object-cover rounded-md transition-transform ease-in-out group-hover:scale-110"
            data-default="${img}"
            data-hover="${hoverImg}" 
          />
        
          <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

          <div class="absolute inset-0 flex justify-center items-center z-20">
            <div class="icon-img-hover flex gap-3 opacity-0 translate-x-[100px] group-hover:opacity-100">
              <i class="fa-solid fa-heart text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer"></i>
              <i class="fa-solid  fa-cart-shopping text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer "></i>
              <i class="fa-solid fa-eye text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer "></i>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">${title}</h3>
          <div class="flex items-center text-yellow-400 mb-1">
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star-half text-[#AD6E23]"></i>
          </div>
          <div class="mb-2">
            <span class="text-gray-500 line-through font-normal inline-block mr-1">${oldPrice}</span>
            <span class="text-red-500 font-bold">${price}</span>
          </div>
          <button class="mt-auto bg-[#AD6E23] text-white py-1 px-3 rounded border border-[#AD6E23] 
            hover:bg-white hover:text-[#AD6E23] hover:border-[#AD6E23] transition duration-200">
            Mua ngay
          </button>
        </div>
      </div>
    `;

    // Chỉ xử lý đổi ảnh bằng JS
    const imgEl = this.querySelector(".product-img");
    const defaultSrc = imgEl.getAttribute("data-default");
    const hoverSrc = imgEl.getAttribute("data-hover");

    const container = this.querySelector(".group");
    container.addEventListener("mouseenter", () => {
      imgEl.src = hoverSrc;
    });
    container.addEventListener("mouseleave", () => {
      imgEl.src = defaultSrc;
    });
  }
}

customElements.define("card-product", CardProduct);
