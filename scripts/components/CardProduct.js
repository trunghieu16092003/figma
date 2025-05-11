class CardProduct extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const img = this.getAttribute("img") || "";
    const hoverImg = this.getAttribute("hoverImg") || img;
    const oldPrice = this.getAttribute("oldPrice") || "0đ";
    const id = this.getAttribute("id") || "0";
    const slug = this.slugify(name);
    const detailUrl = `../../pages/detail.html?slug=${slug}&id=${id}`;

    this.innerHTML = `
      <div class="bg-white rounded-lg shadow hover:shadow-md transition">
        <div class="relative overflow-hidden rounded-t-md rounded-b-none h-52 md:h-[400px] group cursor-pointer product-click">
          <img 
            src="${img}" 
            alt="${name}" 
            class="product-img w-full h-full object-cover transition-transform ease-in-out group-hover:scale-110"
            data-default="${img}"
            data-hover="${hoverImg}" 
          />
          <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <div class="absolute inset-0 flex justify-center items-center z-20">
            <div class="icon-img-hover absolute inset-0 justify-center items-center z-20 flex gap-3 opacity-0 group-hover:opacity-100">
              <i class="fa-solid fa-heart text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer"></i>
              <i class="fa-solid fa-cart-shopping text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer"></i>
              <i class="fa-solid fa-eye text-[#AD6E23] bg-white p-3 rounded-full shadow cursor-pointer view-detail"></i>
            </div>
          </div>
        </div>

        <div class="p-4">
          <h3 class="text-lg font-semibold mb-4 cursor-pointer product-title 
                 line-clamp-1 overflow-hidden text-ellipsis">
        ${name}
      </h3>
          <div class="flex items-center">
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star text-[#AD6E23]"></i>
            <i class="fa-solid fa-star-half text-[#AD6E23]"></i>
          </div>
          <div class=" mt-4">
            <span class="text-gray-500 line-through font-normal text-xs md:text-[16px] inline-block mr-1">${oldPrice}</span>
            <span class="text-red-500 font-bold text-[14px] md:text-[18px]">${price}</span>
          </div>
        </div>
      </div>
    `;

    const imgEl = this.querySelector(".product-img");
    const defaultSrc = imgEl.dataset.default;
    const hoverSrc = imgEl.dataset.hover;
    const container = this.querySelector(".group");

    // Hover ảnh
    container.addEventListener("mouseenter", () => (imgEl.src = hoverSrc));
    container.addEventListener("mouseleave", () => (imgEl.src = defaultSrc));

    // Ngăn sự kiện click từ icon không bị lan lên container
    const icons = this.querySelectorAll(".icon-img-hover i");
    icons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        e.stopPropagation(); // Không cho lan lên
        // Ở đây bạn có thể thêm hành động tùy từng icon
        const className = icon.className;

        if (className.includes("fa-eye")) {
          window.location.href = detailUrl;
        }
      });
    });

    const clickToDetailEls = [container, this.querySelector(".product-title")];

    clickToDetailEls.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = detailUrl;
      });
    });

    const cartIcon = this.querySelector(".fa-cart-shopping");
    cartIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      this.showProductModal();
    });
  }

  slugify(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  showProductModal() {
    const container = document.querySelector("#product-modal-container");

    // Lấy thông tin sản phẩm từ card
    const id = this.getAttribute("id");
    const name = this.getAttribute("name") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const image = this.getAttribute("img") || "";
    const colors = JSON.parse(this.getAttribute("colors")) || "";

    container.innerHTML = "";
    const productModalEl = document.createElement("product-modal");

    productModalEl.setAttribute("id", id);
    productModalEl.setAttribute("name", name);
    productModalEl.setAttribute("price", price);
    productModalEl.setAttribute("img", image);
    productModalEl.setAttribute("colors", JSON.stringify(colors));

    container.appendChild(productModalEl.cloneNode(true));
    const modal = document.getElementById("product-modal");

    // Hiển thị modal
    modal.classList.remove("hidden");

    // Thêm hiệu ứng slide up trên mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const modalContent = modal.querySelector(".absolute.bottom-0");
        modalContent.classList.remove("translate-y-full");
      }, 10);
    }

    // Thêm sự kiện đóng modal
    const closeButton = document.getElementById("close-product-modal");
    closeButton.addEventListener("click", () => {
      this.hideProductModal();
    });

    // Đóng khi click ra ngoài modal
    container.addEventListener("click", (e) => {
      if (e.target === container) {
        this.hideProductModal();
      }
    });
  }

  hideProductModal() {
    const modal = document.getElementById("product-modal");
    const modalContent = modal.querySelector(".absolute.bottom-0");

    if (window.innerWidth < 768) {
      modalContent.classList.add("translate-y-full");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    } else {
      modal.classList.add("hidden");
    }
  }
}

customElements.define("card-product", CardProduct);
