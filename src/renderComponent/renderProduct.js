import callApi from "../services/callApi.js";

const itemsPerPage = 8; // 8 sản phẩm/trang
let currentPage = 1;

async function renderProducts(page = 1) {
  const products = await callApi.get("products");
  const container = document.querySelector('[data-product]');
  container.innerHTML = '';
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  
  paginatedProducts.forEach(product => {
    const productEl = document.createElement('card-product');
    productEl.setAttribute('id', product.id);
    productEl.setAttribute('name', product.name);
    productEl.setAttribute('price', product.price);
    productEl.setAttribute('oldPrice', product.oldPrice);
    productEl.setAttribute('img', product.img[0]);
    productEl.setAttribute('hoverImg', product.img[1] || product.img[0]);
    
    container.appendChild(productEl);
  });
  
  updatePaginationControls();
}

async function updatePaginationControls() {
  const products = await callApi.get("products");
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  // Cập nhật trạng thái nút Previous/Next
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  
  // Cập nhật nút số trang
  const pageButtons = document.querySelectorAll('.page-number');
  pageButtons.forEach((button, index) => {
    // Ẩn nút trang nếu vượt quá tổng số trang
    if (index < totalPages) {
      button.style.display = 'inline-block';
      button.textContent = index + 1;
      button.classList.toggle('bg-[#AD6E23]', index + 1 === currentPage);
      button.classList.toggle('text-white', index + 1 === currentPage);
    } else {
      button.style.display = 'none';
    }
  });
  
  // Xử lý dấu "..." cuối cùng
  const dots = document.querySelectorAll('#pagination span');
  if (totalPages <= 3) {
    dots[0].style.display = 'none';
  } else {
    dots[0].style.display = 'inline-block';
  }
}

// Sự kiện click nút Previous
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Sự kiện click nút Next
document.getElementById('next').addEventListener('click', async () => {
  const products = await callApi.get("products");
  const totalPages = Math.ceil(products.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Sự kiện click nút số trang
document.querySelectorAll('.page-number').forEach(button => {
  button.addEventListener('click', (e) => {
    const pageNum = parseInt(e.target.textContent);
    if (pageNum !== currentPage) {
      currentPage = pageNum;
      renderProducts(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Khởi tạo trang đầu tiên
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(currentPage);
});
