class ProductModal extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "Sản phẩm";
    const price = this.getAttribute("price") || "0đ";
    const img = this.getAttribute("img") || "";
    const id = this.getAttribute("id") || "0";
    const colors = JSON.parse(this.getAttribute("colors"))
    this.innerHTML = `
        <div id="product-modal" class="fixed inset-0 z-50">
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
                  src="${img}"
                  alt="Sản phẩm"
                  class="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h3 id="modal-product-name" class="text-xl font-bold mb-4">
                  ${name}
                </h3>
                <div class="color-select flex gap-2 md: mt-3">
              </div>
            </div>

            
          </div>
          <!-- Thông tin sản phẩm -->
            <div class="w-full">
              <div class="mb-6">
                <h4 class="font-semibold mb-2">Kích cỡ</h4>
                <div class="flex gap-2 mt-2">
                  <span class="inline-flex size-item items-center justify-center w-12 h-12 border border-solid border-[#e1e1e1] rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">S</span>
                  <span class="inline-flex size-item items-center justify-center w-12 h-12 border border-solid border-[#e1e1e1] rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">M</span>
                  <span class="inline-flex size-item items-center justify-center w-12 h-12 border border-solid border-[#e1e1e1] rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">L</span>
                  <span class="inline-flex size-item items-center justify-center w-12 h-12 border border-solid border-[#e1e1e1] rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">XL</span>
                  <span class="inline-flex size-item items-center justify-center w-12 h-12 border border-solid border-[#e1e1e1] rounded cursor-pointer transition-all hover:border-[#AD6E23] active:border-[#AD6E23]">XXL</span>
                </div>
                <p class="text-sm text-gray-500 mt-2 underline cursor-pointer">
                  Hướng dẫn chọn size
                </p>
              </div>

              <div class="flex gap-6">
                <button
                  class="bg-white border border-[#AD6E23] text-[#AD6E23] font-semibold rounded-lg py-3 px-3 w-1/2 flex justify-center buy-now"
                >
                  Mua ngay
                </button>
                <button
                  class="text-white bg-[#AD6E23] font-semibold rounded-lg py-3 px-3 w-1/2 flex justify-center add-to-cart"
                >
                  Thêm giỏ hàng
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
      `;

      const colorSeclect = document.querySelector(".color-select");
      colorSeclect.innerHTML = colors
        .map(
          (color) =>
            `<div >
          <span title="${color.name}" class="color-item inline-block w-8 h-8 rounded-full cursor-pointer" style="background-color: ${color.code};"></span>
          </div>
          `
        )
        .join("");
      this.handleColorClick(this);

      this.handleSizeClick(this)

      this.querySelector('.add-to-cart').addEventListener('click', (e) => {
        e.preventDefault();
        this.addToCart(false); // false = chỉ thêm vào giỏ, không chuyển hướng
        window.dispatchEvent(new CustomEvent("cart:updated"))
      });
  
      // Thêm sự kiện cho nút Mua ngay
      this.querySelector('.buy-now').addEventListener('click', (e) => {
        e.preventDefault();
        this.addToCart(true);
        window.dispatchEvent(new CustomEvent("cart:updated"))
      });
  }

  handleColorClick(wrapperElement) {
    const swatches = wrapperElement.querySelectorAll(".color-item");

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
      ".size-item"
    );

    sizeElements.forEach((el) => {
      el.addEventListener("click", () => {
        sizeElements.forEach((e) => {
          e.classList.add('border-[#e1e1e1]');
          e.classList.remove('border-[#AD6E23]');
        });
        el.classList.add('border-[#AD6E23]');
        el.classList.remove('border-[#e1e1e1]');
      });
    });
  }

  addToCart(redirectToCart) {
    // Lấy thông tin sản phẩm
    const productId = this.getAttribute("id");
    const productName = this.getAttribute("name");
    const productPrice = this.getAttribute("price");
    const productImg = this.getAttribute("img");
    const quantity = 1
    
    // Lấy màu sắc đã chọn
    const selectedColor = this.querySelector('.color-item.border-white')?.title || 'Không xác định';
    console.log(selectedColor)
    
    
    const selectedSize = Array.from(this.querySelectorAll('.size-item')).find(el =>
      el.classList.contains('border-[#AD6E23]')
    )?.textContent.trim() || 'Không xác định';
      console.log(selectedSize)

    // Tạo đối tượng sản phẩm
    const product = {
      id: Date.now(),
      productId: productId,
      name: productName,
      price: productPrice,
      img: productImg,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
      total: parseInt(productPrice.replace(/\D/g, '')) * quantity
    };

    // Lấy giỏ hàng từ localStorage hoặc tạo mới
    let carts = JSON.parse(localStorage.getItem('carts')) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = carts.findIndex(item => 
      item.productId === productId && 
      item.color === product.color && 
      item.size === product.size
    );

    if (existingProductIndex !== -1) {
      // Nếu đã có thì cộng thêm số lượng
      carts[existingProductIndex].quantity += quantity;
      carts[existingProductIndex].total = parseInt(carts[existingProductIndex].price.replace(/\D/g, '')) * carts[existingProductIndex].quantity;
    } else {
      // Nếu chưa có thì thêm mới
      carts.push(product);
    }

    // Lưu lại vào localStorage
    localStorage.setItem('carts', JSON.stringify(carts));


    // Nếu là nút Mua ngay thì chuyển hướng
    if (redirectToCart) {
      window.location.href = 'cart.html';
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Đã thêm vào giỏ hàng!',
        text: `${product.name} đã được thêm vào giỏ hàng.`,
        showConfirmButton: false,
        timer: 1500
      });
      // Đóng modal
      const productModal = document.querySelector("#product-modal");

        productModal.classList.add("hidden");
     
    }
  }
}

customElements.define("product-modal", ProductModal);
