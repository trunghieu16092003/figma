class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="bg-white shadow-sm px-4 py-3">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
  
            <!-- Logo -->
            <div class="text-xl font-bold text-orange-700">FASHION</div>
  
            <!-- Hamburger icon -->
            <button id="menu-toggle" class="md:hidden text-2xl text-gray-700">
              &#9776;
            </button>
  
            <!-- Universal nav (mobile & desktop) -->
            <nav id="main-nav"
              class="hidden absolute top-full left-0 w-full bg-white px-4 py-2 flex-col space-y-2 text-sm text-gray-700 font-medium shadow-md
                     md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:shadow-none md:w-auto md:items-center">
  
              <a href="#" class="hover:text-orange-600">Trang chủ</a>
              <a href="#" class="hover:text-orange-600">Sản phẩm</a>
              <a href="#" class="hover:text-orange-600">Tin tức</a>
              <a href="#" class="hover:text-orange-600">Liên hệ</a>
              <a href="#" class="hover:text-orange-600">Tuyển dụng</a>
            </nav>
  
            <!-- Search & Cart -->
            <div class="flex items-center space-x-3">
              <input type="text" placeholder="Tìm kiếm sản phẩm"
                class="hidden md:block border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring focus:border-orange-500" />
              <button class="text-gray-600 hover:text-orange-600">🛒</button>
            </div>
          </div>
        </header>
      `;
  
      const toggle = this.querySelector('#menu-toggle');
      const nav = this.querySelector('#main-nav');
  
      toggle.addEventListener('click', () => {
        nav.classList.toggle('hidden');
      });
    }
  }
  
  customElements.define('app-header', Header);
  