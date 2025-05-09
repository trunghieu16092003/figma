class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-0 w-full bg-white shadow-sm px-2 md:px-10 py-4 z-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative md:gap-8">
          <div class="flex items-center md:hidden">
            <button id="menu-toggle" class="text-2xl text-gray-700 z-30">
              &#9776;
            </button>
          </div>

          <div class="absolute left-1/2 transform -translate-x-1/2 text-xl w-16 h-16 font-bold text-orange-700 md:static md:transform-none">
            <a href="../../index.html"><img src="../../images/logo/logo.png" /></a>
          </div>

          <nav id="main-nav" class="hidden fixed top-0 left-0 w-3/4 h-full bg-white px-4 flex-col space-y-4 text-sm text-gray-700 font-medium shadow-md z-30 md:static md:flex md:flex-row md:space-y-0 md:bg-transparent md:shadow-none md:w-auto md:h-auto md:items-center">
            <!-- Nút đóng menu mobile -->
            <div class="flex justify-between items-center border-b pb-4 pt-2 md:hidden">
              <span class="font-bold">Menu</span>
              <button id="close-menu" class="text-2xl text-gray-600">&times;</button>
            </div>

            <a href="../../index.html" class="hover:text-white block md:inline-block px-4 py-2 hover:bg-[#AD6E23]">Trang chủ</a>

            <div class="relative group md:cursor-pointer">
              <a href="#" id="product-toggle" class="group-hover:text-white px-4 py-2 group-hover:bg-[#AD6E23] block md:inline-block md:ml-0">Sản phẩm</a>
              <ul id="product-submenu" class="hidden flex-col space-y-2 mt-2 md:absolute md:top-full md:left-0 md:mt-0 pt-2 md:bg-white md:shadow-lg md:rounded-md md:space-y-1 md:min-w-[200px] md:hidden group-hover:block z-40">
                <li><a href="./pages/category.html" class="block hover:text-white hover:bg-[#AD6E23] px-4 py-2">Thời trang nữ</a></li>
                <li><a href="./pages/category.html" class="block hover:text-white hover:bg-[#AD6E23] px-4 py-2">Thời trang nam</a></li>
                <li><a href="./pages/category.html" class="block hover:text-white hover:bg-[#AD6E23] px-4 py-2">Phụ kiện</a></li>
                <li><a href="./pages/category.html" class="block hover:text-white hover:bg-[#AD6E23] px-4 py-2">Bộ sưu tập mới nhất</a></li>
              </ul>
            </div>

            <a href="#" class="hover:text-white block md:inline-block px-4 py-2 hover:bg-[#AD6E23]">Tin tức</a>
            <a href="#" class="hover:text-white block md:inline-block px-4 py-2 hover:bg-[#AD6E23]">Liên hệ</a>
            <a href="#" class="hover:text-white block md:inline-block px-4 py-2 hover:bg-[#AD6E23]">Tuyển dụng</a>
          </nav>

          <div class="flex items-center space-x-3 absolute right-4 md:static z-30">
            <button id="search-toggle" class="md:hidden text-[#AD6E23]">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            
            <form class="relative hidden md:block">
              <input type="text" placeholder="Tìm kiếm sản phẩm"
                class="border w-[270px] h-10 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-[#efc28c] focus:border-[#AD6E23]" />
              <button type="submit" class="absolute top-0 right-0 py-3 text-[#AD6E23] px-2">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
           
            <div class="relative group inline-block">
              <span class="cursor-pointer text-[#AD6E23] flex items-center gap-2">
                <i class="fa-solid fa-user"></i> <span class="hidden md:inline">Tài khoản</span>
              </span>
              <div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="./login.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng nhập</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng ký</a>
              </div>
            </div>
            
            <button id="cart-toggle" class="text-[#AD6E23]">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>

        <div id="overlay" class="hidden fixed inset-0 bg-black/50 z-20 md:hidden"></div>

        <div id="search-modal" class="hidden fixed top-0 left-0 w-full bg-white z-50 p-4 shadow-md">
          <div class="flex items-center">
            <form class="flex-1 relative">
              <input type="text" placeholder="Tìm kiếm sản phẩm..."
                class="w-full border h-12 rounded-lg px-4 pr-10 text-sm focus:outline-none focus:ring focus:ring-[#efc28c] focus:border-[#AD6E23]">
              <button type="submit" class="absolute right-0 top-0 h-full px-3 text-[#AD6E23]">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <button id="close-search" class="ml-2 text-gray-600 text-2xl px-2">×</button>
          </div>
        </div>

        <div id="cart-modal" class="hidden fixed top-0 right-0 h-full bg-white z-50 shadow-lg w-full max-w-sm p-6 transition-transform duration-300 transform translate-x-full md:translate-x-0 md:top-16 md:right-4 md:rounded-lg md:shadow-2xl md:w-96 md:h-auto md:absolute">
          <button id="close-cart" class="absolute top-2 right-2 text-xl font-bold text-gray-600">×</button>
          <h3 class="text-lg font-bold text-gray-800 mb-4">Giỏ hàng</h3>
          <div id="cart-items" class="space-y-4 max-h-80 overflow-y-auto"></div>
          <div class="flex justify-between items-center mt-4">
            <span class="font-medium text-lg">Tổng: 300.000 VND</span>
            <a href="./cart.html" class="bg-[#AD6E23] text-white px-4 py-2 rounded-md">Thanh toán</a>
          </div>
        </div>
      </header>
    `;

    // Các biến selector
    const toggle = this.querySelector("#menu-toggle");
    const nav = this.querySelector("#main-nav");
    const overlay = this.querySelector("#overlay");
    const closeMenuBtn = this.querySelector("#close-menu");
    const productToggle = this.querySelector("#product-toggle");
    const productSubmenu = this.querySelector("#product-submenu");
    const cartToggle = this.querySelector("#cart-toggle");
    const cartModal = this.querySelector("#cart-modal");
    const closeCart = this.querySelector("#close-cart");
    const searchToggle = this.querySelector("#search-toggle");
    const searchModal = this.querySelector("#search-modal");
    const closeSearch = this.querySelector("#close-search");

    // Form search
    const desktopSearchForm = this.querySelector(
      "form.relative.hidden.md\\:block"
    );
    const desktopSearchInput = desktopSearchForm?.querySelector("input");
    const mobileSearchForm = searchModal.querySelector("form");
    const mobileSearchInput = mobileSearchForm.querySelector("input");

    // Hàm đóng/mở menu
    const toggleMenu = () => {
      nav.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    };

    // Xử lý sự kiện cho form search desktop
    if (desktopSearchForm) {
      desktopSearchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleSearch(desktopSearchInput.value);
      });
    }

    // Xử lý sự kiện cho form search mobile
    mobileSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSearch(mobileSearchInput.value);
      this.closeSearchModal();
    });

    // Sự kiện cho nút menu toggle
    toggle.addEventListener("click", toggleMenu);

    // Sự kiện cho nút đóng menu
    closeMenuBtn.addEventListener("click", toggleMenu);

    // Sự kiện cho nút search mobile
    searchToggle.addEventListener("click", () => {
      this.openSearchModal();
    });

    closeSearch.addEventListener("click", () => {
      this.closeSearchModal();
    });

    // Overlay click
    overlay.addEventListener("click", () => {
      nav.classList.add("hidden");
      this.closeMobileCart();
      this.closeSearchModal();
      overlay.classList.add("hidden");
    });

    // Xử lý submenu sản phẩm
    productToggle.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        productSubmenu.classList.toggle("hidden");
      }
    });

    // Xử lý giỏ hàng
    cartToggle.addEventListener("click", () => {
      const token = localStorage.getItem("token");
      if (!token) {
        this.showLoginAlert();
        return;
      }

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        cartModal.classList.remove("hidden");
        setTimeout(() => {
          cartModal.classList.remove("translate-x-full");
        }, 10);
        overlay.classList.remove("hidden");
      } else {
        cartModal.classList.toggle("hidden");
      }

      this.loadCartItems();
    });

    // Đóng giỏ hàng mobile
    this.closeMobileCart = () => {
      cartModal.classList.add("translate-x-full");
      setTimeout(() => {
        cartModal.classList.add("hidden");
      }, 300);
      overlay.classList.add("hidden");
    };

    closeCart?.addEventListener("click", () => {
      this.closeMobileCart();
    });

    // Cập nhật UI header
    this.updateHeaderUI();
    window.addEventListener("cart:updated", () => this.loadCartItems());
  }

  // Các phương thức khác giữ nguyên như trước...
  openSearchModal() {
    const searchModal = this.querySelector("#search-modal");
    const overlay = this.querySelector("#overlay");

    searchModal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    setTimeout(() => {
      const input = searchModal.querySelector("input");
      input.focus();
    }, 10);
  }

  closeSearchModal() {
    const searchModal = this.querySelector("#search-modal");
    const overlay = this.querySelector("#overlay");

    searchModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  updateHeaderUI() {
    const email = localStorage.getItem("email");
    const userIcon = this.querySelector(".fa-user");
    const accountText = this.querySelector(".fa-user + span");
    const dropdownMenu = userIcon.closest(".group").querySelector("div");

    if (email) {
      if (accountText) {
        const displayEmail =
          email.length > 7 ? email.slice(0, 7) + "..." : email;
        accountText.textContent = displayEmail;
      }

      if (dropdownMenu) {
        dropdownMenu.innerHTML = `
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Thông tin tài khoản</a>
          <a href="#" id="logout-btn" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</a>
        `;

        dropdownMenu
          .querySelector("#logout-btn")
          .addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("email");
            location.reload();
          });
      }
    }
  }

  showLoginAlert() {
    const alertDiv = document.createElement("div");
    alertDiv.className =
      "fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in";
    alertDiv.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-exclamation-circle mr-2"></i>
        <span>Vui lòng đăng nhập để xem giỏ hàng</span>
      </div>
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.classList.add("animate-fade-out");
      setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
  }

  loadCartItems() {
    const cartItemsContainer = this.querySelector("#cart-modal #cart-items");
    const cartTotalElement = this.querySelector(
      "#cart-modal .font-medium.text-lg"
    );

    const cart = JSON.parse(localStorage.getItem("carts")) || [];

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-4 text-gray-500">
          <i class="fas fa-shopping-cart text-2xl mb-2"></i>
          <p>Giỏ hàng trống</p>
        </div>
      `;
      cartTotalElement.textContent = "Tổng: 0đ";
      return;
    }

    cartItemsContainer.innerHTML = cart
      .map(
        (item, index) => `
      <div class="flex items-center justify-between py-2 border-b relative">
        <img src="${item.img}" alt="${
          item.name
        }" class="w-16 h-16 object-cover rounded">
        <div class="ml-2 flex-1">
          <p class="text-sm font-medium">${item.name}</p>
          <div class="flex items-center gap-2">
            <p class="text-xs text-gray-500">Màu: ${item.color}</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-xs text-gray-500">Size: ${item.size}</p>
          </div>
          <p class="text-sm">${item.price} x ${item.quantity}</p>
        </div>
        <span class="text-sm font-medium">${(
          parseInt(item.price.replace(/\D/g, "")) * item.quantity
        ).toLocaleString()}đ</span>
        <button 
          class="absolute top-2 right-2 text-gray-400 hover:text-red-500 delete-item" 
          data-index="${index}"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `
      )
      .join("");
    this.addDeleteEvents();

    const total = cart.reduce(
      (sum, item) =>
        sum + parseInt(item.price.replace(/\D/g, "")) * item.quantity,
      0
    );
    cartTotalElement.textContent = `Tổng: ${total.toLocaleString()}đ`;
  }

  addDeleteEvents() {
    const buttons = this.querySelectorAll(".delete-item");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = parseInt(button.getAttribute("data-index"));
        this.handleDeleteItem(index);
        window.dispatchEvent(new CustomEvent("cart:updated"));
      });
    });
  }

  handleDeleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("carts")) || [];
    cart.splice(index, 1);
    localStorage.setItem("carts", JSON.stringify(cart));
    this.loadCartItems();
  }

  handleSearch(value) {
    if (value.trim() === "") {
      alert("Vui lòng nhập từ khóa tìm kiếm");
      return;
    } else {
      window.location.href = `./category.html?q=${value}`;
    }
  }
}

customElements.define("app-header", Header);
