import callApi from "./callApi";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Ngăn form reload

    const email = form
      .querySelector('custom-input[name="email"]')
      .querySelector("input").value;
    const password = form
      .querySelector('custom-input[name="password"]')
      .querySelector("input").value;

    try {
      const res = await callApi.post("users/login", {
        email,
        password,
      });
      if (res.success === true) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", email);
        window.location.href = "./index.html";
      }
    } catch (err) {
      console.error("Lỗi đăng nhập:", err.message);
      alert("Sai email hoặc mật khẩu");
    }
  });
});
