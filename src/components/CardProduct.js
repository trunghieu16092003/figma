class CardProduct extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const img = this.getAttribute("img") || "";
    const oldPrice = this.getAttribute("oldPrice") || "0đ";

    this.innerHTML = `
        <div class="bg-white rounded-lg shadow hover:shadow-md transition p-4">
          <div class="relative overflow-hidden rounded-md group h-[350px]">
  <img src="${img}" alt="${title}" 
       class="w-full h-full object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110" />
  <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div class="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button class="bg-[#AD6E23] py-2 px-4 rounded">Xem thêm</button>
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
  }
}

// Đăng ký thẻ component
customElements.define("card-product", CardProduct);
