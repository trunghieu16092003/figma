class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-sm px-10 py-6 relative">
        <div class=" flex items-center justify-between relative md:gap-8">

          <button id="menu-toggle" class="md:hidden text-2xl text-gray-700 z-30">
            &#9776;
          </button>

          <div class="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-orange-700 md:static md:transform-none">
            FASHION
          </div>

          <nav id="main-nav"
            class="hidden fixed top-0 left-0 w-3/4 h-full bg-white px-4 flex-col space-y-4 text-sm text-gray-700 font-medium shadow-md z-30
                   md:static md:flex md:flex-row md:space-y-0 md:bg-transparent md:shadow-none md:w-auto md:h-auto md:items-center">
            <a href="./" class="hover:text-orange-600 block md:inline-block px-4 py-2 hover:bg-yellow-300">Trang chủ</a>

            <div class="relative group md:cursor-pointer">
              <a href="#" id="product-toggle" class="group-hover:text-orange-600 px-4 py-2 group-hover:bg-yellow-300 block md:inline-block md:ml-0">Sản phẩm</a>
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
              <div class="relative group inline-block">
  <span class="cursor-pointer flex items-center gap-2">
    <i class="fa-solid fa-user"></i> Tài khoản
  </span>

  <!-- Dropdown content -->
  <div
    class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
  >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >Đăng nhập</a>
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >Đăng ký</a>
  </div>
</div>
            <button id="cart-toggle" class="text-gray-600 hover:text-orange-600">🛒</button>
          </div>
        </div>

        <div id="overlay" class="hidden fixed inset-0 bg-black/50 z-20 md:hidden"></div>

        <!-- Cart Modal -->
        <div id="cart-modal"
          class="hidden fixed top-0 right-0 h-full bg-white z-50 shadow-lg
                 w-full max-w-sm p-6 transition-transform duration-300 transform translate-x-full
                 md:translate-x-0 md:top-16 md:right-4 md:rounded-lg md:shadow-2xl md:w-96 md:h-auto md:absolute">
          <button id="close-cart" class="absolute top-2 right-2 text-xl font-bold text-gray-600">×</button>

          <h3 class="text-lg font-bold text-gray-800 mb-4">Giỏ hàng</h3>
          <div id="cart-items" class="space-y-4 max-h-80 overflow-y-auto">
            <div class="flex items-center justify-between">
              <img src="product1.jpg" alt="Product 1" class="w-16 h-16 object-cover">
              <div class="flex flex-col justify-between">
                <span class="text-sm font-medium text-gray-800">Sản phẩm 1</span>
                <span class="text-sm text-gray-600">Giá: 100.000 VND</span>
                <span class="text-sm text-gray-600">Số lượng: 1</span>
              </div>
              <span class="text-sm text-gray-800">100.000 VND</span>
            </div>
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

    overlay.addEventListener('click', () => {
      closeMenu();
      closeMobileCart();
    });

    productToggle.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        productSubmenu.classList.toggle('hidden');
      }
    });

    cartToggle.addEventListener('click', () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        cartModal.classList.remove('hidden');
        setTimeout(() => {
          cartModal.classList.remove('translate-x-full');
        }, 10);
        overlay.classList.remove('hidden');
      } else {
        cartModal.classList.toggle('hidden');
      }
    });

    const closeMobileCart = () => {
      cartModal.classList.add('translate-x-full');
      setTimeout(() => {
        cartModal.classList.add('hidden');
      }, 300);
      overlay.classList.add('hidden');
    };

    closeCart?.addEventListener('click', () => {
      closeMobileCart();
    });
  }
}

customElements.define('app-header', Header);
