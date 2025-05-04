const express = require("express");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const router = express.Router();

const dataPath = path.join(__dirname, "../data");
const fileName = "cart.json";
const secretKey = SECRET_KEY;

const readData = () =>
  JSON.parse(fs.readFileSync(path.join(dataPath, fileName)));

const writeData = (data) => {
  console.log(data);
  fs.writeFileSync(
    path.join(dataPath, fileName),
    JSON.stringify({ data }, null, 2)
  );
};

// Middleware để xác thực và lấy userId từ token
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ message: "Bạn cần phải đăng nhập" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
}

// Lấy giỏ hàng của user
router.get("/", authenticate, (req, res) => {
  const carts = readData().data;
  const userCart = carts.filter((c) => c.userId === req.userId);
  res.json(userCart || []);
});

// Cập nhật (thêm/sửa) sản phẩm trong giỏ hàng
router.put("/", authenticate, (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || quantity == null) {
    return res.status(400).json({ message: "Missing productId or quantity" });
  }

  const carts = readData();
  let userCart = carts.find((c) => c.userId === req.userId);

  if (!userCart) {
    userCart = { userId: req.userId, items: [] };
    carts.push(userCart);
  }

  const existingItem = userCart.items.find(
    (item) => item.productId === productId
  );
  if (existingItem) {
    existingItem.quantity = quantity;
  } else {
    userCart.items.push({ productId, quantity });
  }

  writeData(carts);
  res.json({ message: "Cart updated", cart: userCart.items });
});

// Xoá một sản phẩm khỏi giỏ hàng
router.delete("/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const carts = readData().data;
  const userCart = carts.filter((c) => c.userId === req.userId);

  if (!userCart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  const cartNoDeletes = userCart.filter((item) => item.id != id);

  writeData(cartNoDeletes);
  return res.status(200).json({
    status: "success", // Trạng thái thành công
    message: "Đã xóa thành công", // Tin nhắn thành công
  });
});

module.exports = router;
