import products from "../services/product.js";

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('[data-product]');
  
    containers.forEach(container => {
      products.forEach(product => {
        const productEl = document.createElement('card-product');
        productEl.setAttribute('id', product.id);
        productEl.setAttribute('title', product.title);
        productEl.setAttribute('price', product.price);
        productEl.setAttribute('oldPrice', product.oldPrice);
        productEl.setAttribute('img', product.img);
        productEl.setAttribute('hoverImg', product.hoverImg);
  
        container.appendChild(productEl.cloneNode(true));
      });
    });
  });
  