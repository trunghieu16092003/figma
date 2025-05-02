import callApi from "../services/callApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = await callApi.getById("products", id);
    const container = document.querySelector("#product-detail");
    console.log(product);

    const productEl = document.createElement("product-detail");
    console.log(product.color);
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
