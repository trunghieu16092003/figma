import callApi from "../services/callApi.js";

const itemsPerPage = 8; // 8 sản phẩm/trang
let currentPage = 1;
let searchValue = "";
let displayProducts = []


// Khởi tạo trang đầu tiên
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
   searchValue = urlParams.get('q');
  
  if (searchValue) {
    // Hiển thị từ khóa tìm kiếm trên trang
    const categoryTitle = document.querySelector('.category-title');
    if (categoryTitle) {
      categoryTitle.textContent = `Kết quả tìm kiếm cho: "${searchValue}"`;
    }
    renderProducts(currentPage, searchValue);
  } else {
    renderProducts(currentPage);
  }
});

async function renderProducts(page = 1, searchValue = "") {
  const products = await callApi.get("products");
  const container = document.querySelector('[data-product]');
  const pagination = document.querySelector('#pagination');
  container.innerHTML = '';
  if(searchValue){
    displayProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    })
  }  else {
    displayProducts = products;
  }

  // Kiểm tra nếu không có sản phẩm nào phù hợp khi tìm kiếm
  if(searchValue && displayProducts.length === 0) {
    container.classList.remove('grid');
    container.innerHTML = `
      <div class="col-span-full text-center py-10">
        <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
        <h3 class="text-xl font-medium text-gray-600">Không tìm thấy sản phẩm nào phù hợp</h3>
        <p class="text-gray-500 mt-2">Không có sản phẩm nào phù hợp với từ khóa "${searchValue}"</p>
        <a href="category.html" class="mt-4 inline-block px-4 py-2 bg-[#AD6E23] text-white rounded-md">
          Xem tất cả sản phẩm
        </a>
      </div>
    `;
    pagination.innerHTML = '';
  }


  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = displayProducts.slice(startIndex, endIndex);
  
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
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
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
    renderProducts(currentPage, searchValue);
    document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
  }
});

// Sự kiện click nút Next
document.getElementById('next').addEventListener('click',  () => {
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts(currentPage, searchValue);
    document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
  }
});

// Sự kiện click nút số trang
document.querySelectorAll('.page-number').forEach(button => {
  button.addEventListener('click', (e) => {
    const pageNum = parseInt(e.target.textContent);
    if (pageNum !== currentPage) {
      currentPage = pageNum;
      renderProducts(currentPage, searchValue);
      document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
