class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-[#AD6E23] text-white">
        <div class="container mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
            <!-- Column 1: Logo & About -->
            <div class="md:col-span-2">
              <div class="mb-6 flex justify-center md:justify-start">
                <a href="./index.html" class="text-2xl font-bold">
                  <img src="../../images/logo/logo_footer.png" alt="FASHION Logo" class="h-12">
                </a>
              </div>
              <p class="text-white/90 text-sm leading-relaxed mb-4">
                FASHION là thương hiệu thời trang được tạo ra với mong muốn mang đến những thiết kế hiện đại, tinh tế...
              </p>
              <div class="flex space-x-4 mt-4">
                <a href="#" class="text-white/80 hover:text-white transition">
                  <i class="fab fa-facebook-f text-lg"></i>
                </a>
                <a href="#" class="text-white/80 hover:text-white transition">
                  <i class="fab fa-instagram text-lg"></i>
                </a>
                <a href="#" class="text-white/80 hover:text-white transition">
                  <i class="fab fa-tiktok text-lg"></i>
                </a>
              </div>
            </div>

            <!-- Column 2: Customer Support -->
            <div>
              <h3 class="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Hỗ trợ khách hàng</h3>
              <ul class="space-y-2 text-white/90 text-sm">
                <li><a href="#" class="hover:text-white transition">Hướng dẫn mua hàng</a></li>
                <li><a href="#" class="hover:text-white transition">Phương thức thanh toán</a></li>
                <li><a href="#" class="hover:text-white transition">Chính sách đổi trả</a></li>
                <li><a href="#" class="hover:text-white transition">Chăm sóc khách hàng</a></li>
              </ul>
            </div>

            <!-- Column 3: Company -->
            <div>
              <h3 class="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Công ty</h3>
              <ul class="space-y-2 text-white/90 text-sm">
                <li><a href="#" class="hover:text-white transition">Về chúng tôi</a></li>
                <li><a href="#" class="hover:text-white transition">Liên hệ</a></li>
                <li><a href="#" class="hover:text-white transition">Tuyển dụng</a></li>
                <li><a href="#" class="hover:text-white transition">Hệ thống cửa hàng</a></li>
              </ul>
            </div>

            <!-- Column 4: Products -->
            <div>
              <h3 class="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Sản phẩm</h3>
              <ul class="space-y-2 text-white/90 text-sm">
                <li><a href="#" class="hover:text-white transition">Thời trang công sở</a></li>
                <li><a href="#" class="hover:text-white transition">Bộ sưu tập hè 2025</a></li>
                <li><a href="#" class="hover:text-white transition">Áo</a></li>
                <li><a href="#" class="hover:text-white transition">Váy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="bg-[#8a561c] py-4">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center text-xs text-white/80">
              <p>© 2025 FASHION. All rights reserved.</p>
              <div class="mt-2 md:mt-0">
                <a href="#" class="hover:text-white transition">Điều khoản sử dụng</a>
                <span class="mx-2">|</span>
                <a href="#" class="hover:text-white transition">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", Footer);