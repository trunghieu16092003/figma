import callApi from "../services/callApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const products = await callApi.get("products");
    const containers = document.querySelectorAll("[data-product]");

    containers.forEach((container) => {
      products.forEach((product) => {
        const productEl = document.createElement("card-product");
        productEl.setAttribute("id", product.id);
        productEl.setAttribute("name", product.name);
        productEl.setAttribute("price", product.price);
        productEl.setAttribute("oldPrice", product.oldPrice);
        productEl.setAttribute("img", product.img[0]);
        productEl.setAttribute("hoverImg", product.img[1]);

        container.appendChild(productEl.cloneNode(true));
      });
    });
  } catch (err) {
    console.error("Lỗi khi gọi API:", err);
  }
});
