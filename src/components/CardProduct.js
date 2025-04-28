class CardProduct extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const img = this.getAttribute("img") || "";
    const hoverImg = this.getAttribute("hoverImg") || img;
    const oldPrice = this.getAttribute("oldPrice") || "0đ";
    const id = this.getAttribute("id") || "0";
    const slug = this.slugify(title);
    const detailUrl = `detail.html?slug=${slug}&id=${id}`;

    this.innerHTML = `
      <div class="bg-white rounded-lg shadow hover:shadow-md transition">
        <div class="relative overflow-hidden rounded-t-md rounded-b-none h-40 md:h-[400px] group cursor-pointer product-click">
          <img 
            src="${img}" 
            alt="${title}" 
            class="product-img w-full h-full object-cover transition-transform ease-in-out group-hover:scale-110"
            data-default="${img}"
            data-hover="${hoverImg}" 
          />
          <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <div class="absolute inset-0 flex justify-center items-center z-20">
            <div class="icon-img-hover absolute inset-0 justify-center items-center z-20 flex gap-3 opacity-0 translate-x-[200%] group-hover:opacity-100">
              <i class="fa-solid fa-heart text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer"></i>
              <i class="fa-solid fa-cart-shopping text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer"></i>
              <i class="fa-solid fa-eye text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer view-detail"></i>
            </div>
          </div>
        </div>

        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2 cursor-pointer product-title">${title}</h3>
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

    const imgEl = this.querySelector(".product-img");
    const defaultSrc = imgEl.dataset.default;
    const hoverSrc = imgEl.dataset.hover;
    const container = this.querySelector(".group");

    // Hover ảnh
    container.addEventListener("mouseenter", () => imgEl.src = hoverSrc);
    container.addEventListener("mouseleave", () => imgEl.src = defaultSrc);

    // Các phần tử cần click
    // Ngăn sự kiện click từ icon không bị lan lên container
    const icons = this.querySelectorAll(".icon-img-hover i");
    icons.forEach(icon => {
      icon.addEventListener("click", e => {
        e.stopPropagation(); // Không cho lan lên
        // Ở đây bạn có thể thêm hành động tùy từng icon
        const className = icon.className;

        if (className.includes("fa-eye")) {
          window.location.href = detailUrl;
        }
      });
    });

    const clickToDetailEls = [
      container,
      this.querySelector(".product-title"),
    ];

    clickToDetailEls.forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = detailUrl;
      });
    });
  }

  slugify(str) {
    return str.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim().replace(/\s+/g, "-");
  }
}

customElements.define("card-product", CardProduct);
