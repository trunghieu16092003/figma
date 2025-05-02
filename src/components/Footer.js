class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="bg-[#AD6E23] text-white pt-10 ">
          <div class="flex-col md:flex text-sm md:justify-between px-10">
            <div class="mb-4 md:mb-0 md:w-2/5">
              <div class="mb-4">
                <div class="text-2xl font-bold text-white">FASHION</div>
              </div>
              <p class="text-white/90">
               [Brand Name] là thương hiệu thời trang được tạo ra với mong muốn mang đến những thiết kế hiện đại, tinh tế và phù hợp với nhịp sống năng động của thế hệ trẻ. Chúng tôi tin rằng mỗi bộ trang phục không chỉ đơn thuần là một món đồ mặc trên người, mà còn là phương tiện để thể hiện cá tính, tâm trạng và phong cách sống riêng biệt của mỗi người.
Với tinh thần không ngừng sáng tạo và cập nhật xu hướng, [Brand Name] luôn đặt chất lượng, trải nghiệm khách hàng và sự chỉn chu trong từng chi tiết lên hàng đầu. Từ những thiết kế cơ bản đến các items mang dấu ấn riêng, tất cả đều được làm ra để bạn luôn cảm thấy tự tin, thoải mái và đúng với chính mình.
              </p>
            </div>
  
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <h3 class="font-semibold text-white mb-3">Hỗ trợ khách hàng</h3>
                <ul class="space-y-2 text-white/90">
                  <li>Hướng dẫn mua hàng</li>
                  <li>Phương thức thanh toán</li>
                  <li>Chính sách đổi trả</li>
                  <li>Chăm sóc khách hàng</li>
                  <li>Chính sách vận chuyển</li>
                  <li>Chính sách thường gặp</li>
                </ul>
              </div>
    
              <!-- Công ty -->
              <div>
                <h3 class="font-semibold text-white mb-3">Công ty</h3>
                <ul class="space-y-2 text-white/90">
                  <li>Về chúng tôi</li>
                  <li>Liên hệ</li>
                  <li>Tuyển dụng</li>
                </ul>
              </div>
    
              <!-- Sản phẩm chính -->
              <div>
                <h3 class="font-semibold text-white mb-3">Các sản phẩm chính</h3>
                <ul class="space-y-2 text-white/90">
                  <li>Mẫu thời trang công sở</li>
                  <li>Thời trang hè 2025</li>
                  <li>Bộ sưu tập xuân</li>
                  <li>Áo</li>
                  <li>Váy</li>
                  <li>Mũ</li>
                </ul>
              </div>
    
              <!-- Liên kết -->
              <div>
                <h3 class="font-semibold text-white mb-3">Liên kết</h3>
                <div class="flex space-x-4 text-white/90">
                  <span>FB</span>
                  <span>IG</span>
                  <span>YT</span>
                </div>
              </div>
            
            </div>
          </div>
  
          <!-- Bottom -->
          <div class="mt-10 bg-blue-800 text-white py-4 text-center text-xs">
            <p>Công ty cổ phần abc xyz - Giấy phép kinh doanh số 1234567890</p>
            <p>Địa chỉ: 123, xã xyz, phường abc, tỉnh Quảng Ninh</p>
          </div>
        </footer>
      `;
  }
}

customElements.define("app-footer", Footer);
