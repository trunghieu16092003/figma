import callApi from "../services/callApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const carts = JSON.parse(localStorage.getItem("carts"));
    const container = document.querySelector(".cart-table");

    carts.forEach((cart) => {
      const cartEl = document.createElement("app-cart");
      cartEl.setAttribute("id", cart.id);
      cartEl.setAttribute("name", cart.name);
      cartEl.setAttribute("price", cart.price);
      cartEl.setAttribute("oldPrice", cart.oldPrice);
      cartEl.setAttribute("img", cart.img);
      cartEl.setAttribute("size", cart.size);
      cartEl.setAttribute("color", cart.color);
      cartEl.setAttribute("quantity", cart.quantity);

      container.appendChild(cartEl.cloneNode(true));
    });
  } catch (err) {
    console.error("Lỗi khi gọi API:", err);
  }
});
