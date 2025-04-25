class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-sm px-4 py-6 relative">
        <div class="max-w-7xl mx-auto flex items-center justify-between relative md:gap-8">

          <button id="menu-toggle" class="md:hidden text-2xl text-gray-700 z-30">
            &#9776;
          </button>

          <div class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-orange-700 md:static md:transform-none">
            FASHION
          </div>

          <nav id="main-nav"
            class="hidden fixed top-0 left-0 w-3/4 h-full bg-white px-4 flex-col space-y-4 text-sm text-gray-700 font-medium shadow-md z-30
                   md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:shadow-none md:w-auto md:h-auto md:items-center">
            <a href="#" class="hover:text-orange-600 block md:inline-block px-4 py-2 hover:bg-yellow-300">Trang chủ</a>

            <div class="relative group md:cursor-pointer">
              <a href="#" id="product-toggle" class="group-hover:text-orange-600 px-4 py-2 group-hover:bg-yellow-300 block md:inline-block">Sản phẩm</a>
              <ul id="product-submenu"
                class="hidden flex-col space-y-2 pl-4 mt-2 md:absolute md:top-full md:left-0 md:mt-0 md:bg-white md:shadow-lg md:p-4 md:rounded-md md:space-y-1 md:min-w-[200px] md:hidden group-hover:block z-40">
                <li><a href="#" class="block hover:text-orange-600 px-4 py-2">Thời trang nữ</a></li>
                <li><a href="#" class="block hover:text-orange-600 px-4 py-2">Thời trang nam</a></li>
                <li><a href="#" class="block hover:text-orange-600 px-4 py-2">Phụ kiện</a></li>
                <li><a href="#" class="block hover:text-orange-600 px-4 py-2">Bộ sưu tập mới nhất</a></li>
              </ul>
            </div>

            <a href="#" class="hover:text-orange-600 block md:inline-block px-4 py-2 hover:bg-yellow-300">Tin tức</a>
            <a href="#" class="hover:text-orange-600 block md:inline-block px-4 py-2 hover:bg-yellow-300">Liên hệ</a>
            <a href="#" class="hover:text-orange-600 block md:inline-block px-4 py-2 hover:bg-yellow-300">Tuyển dụng</a>
          </nav>

          <div class="flex items-center space-x-3 absolute right-4 md:static z-30">
            <input type="text" placeholder="Tìm kiếm sản phẩm"
              class="hidden md:block border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring focus:border-orange-500" />
            <button id="cart-toggle" class="text-gray-600 hover:text-orange-600">🛒</button>
          </div>
        </div>

        <div id="overlay" class="hidden fixed inset-0 bg-black/50 z-20 md:hidden"></div>

        <!-- Cart Modal -->
        <div id="cart-modal" class="hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center">
          <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Giỏ hàng</h3>
            <div id="cart-items" class="space-y-4">
              <!-- Product 1 -->
              <div class="flex items-center justify-between">
                <img src="product1.jpg" alt="Product 1" class="w-16 h-16 object-cover">
                <div class="flex flex-col justify-between">
                  <span class="text-sm font-medium text-gray-800">Sản phẩm 1</span>
                  <span class="text-sm text-gray-600">Giá: 100.000 VND</span>
                  <span class="text-sm text-gray-600">Số lượng: 1</span>
                </div>
                <span class="text-sm text-gray-800">100.000 VND</span>
              </div>
              <!-- Product 2 -->
              <div class="flex items-center justify-between">
                <img src="product2.jpg" alt="Product 2" class="w-16 h-16 object-cover">
                <div class="flex flex-col justify-between">
                  <span class="text-sm font-medium text-gray-800">Sản phẩm 2</span>
                  <span class="text-sm text-gray-600">Giá: 200.000 VND</span>
                  <span class="text-sm text-gray-600">Số lượng: 1</span>
                </div>
                <span class="text-sm text-gray-800">200.000 VND</span>
              </div>
            </div>
            <div class="flex justify-between mt-4">
              <span class="font-medium text-lg">Tổng: 300.000 VND</span>
              <button class="bg-orange-500 text-white px-4 py-2 rounded-md">Thanh toán</button>
            </div>
            <button id="close-cart" class="absolute top-4 right-4 text-xl font-bold text-gray-600">×</button>
          </div>
        </div>
      </header>
    `;

    const toggle = this.querySelector('#menu-toggle');
    const nav = this.querySelector('#main-nav');
    const overlay = this.querySelector('#overlay');
    const productToggle = this.querySelector('#product-toggle');
    const productSubmenu = this.querySelector('#product-submenu');
    const cartToggle = this.querySelector('#cart-toggle');
    const cartModal = this.querySelector('#cart-modal');
    const closeCart = this.querySelector('#close-cart');

    const closeMenu = () => {
      nav.classList.add('hidden');
      overlay.classList.add('hidden');
    };

    toggle.addEventListener('click', () => {
      nav.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
    });

    overlay.addEventListener('click', closeMenu);

    productToggle.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        productSubmenu.classList.toggle('hidden');
      }
    });

    // Show cart modal when clicking the cart button
    cartToggle.addEventListener('click', () => {
      cartModal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    });

    // Close the cart modal when clicking the close button
    closeCart.addEventListener('click', () => {
      cartModal.classList.add('hidden');
      overlay.classList.add('hidden');
    });

    // Close the cart modal when clicking on overlay
    overlay.addEventListener('click', () => {
      cartModal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  }
}

customElements.define('app-header', Header);
