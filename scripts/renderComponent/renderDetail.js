import products from "../data/products.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const product = products.find((product) => product.id === id);
    const container = document.querySelector("#product-detail");

    const productEl = document.createElement("product-detail");
    productEl.setAttribute("id", product.id);
    productEl.setAttribute("name", product.name);
    productEl.setAttribute("price", product.price);
    productEl.setAttribute("oldPrice", product.oldPrice);
    productEl.setAttribute("img", product.img[0]);
    productEl.setAttribute("imgChange", JSON.stringify(product.img));
    productEl.setAttribute("colors", JSON.stringify(product.color));
    productEl.setAttribute("desc", product.desc);
    productEl.setAttribute("care", product.care);

    container.appendChild(productEl.cloneNode(true));
  } catch (err) {
    console.error("Lỗi khi gọi API:", err);
  }
});
