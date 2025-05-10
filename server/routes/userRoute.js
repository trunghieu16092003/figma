const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const dataPath = path.join(__dirname, "../data");
const fileName = "user.json";

// Hàm đọc dữ liệu từ file
const readData = () => {
  try {
    const rawData = fs.readFileSync(path.join(dataPath, fileName));
    return JSON.parse(rawData);
  } catch (error) {
    // Nếu file không tồn tại, trả về object với data rỗng
    return { data: [] };
  }
};

// Hàm ghi dữ liệu vào file
const writeData = (data) => {
  // Đảm bảo thư mục data tồn tại
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath, { recursive: true });
  }
  fs.writeFileSync(
    path.join(dataPath, fileName),
    JSON.stringify(data, null, 2),
    "utf8"
  );
};

router.get("/", (req, res) => {
  res.json(readData());
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = readData().data;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" } // Token có hiệu lực trong 1 giờ
    );

    res.status(200).json({
      success: true,
      token,
      email: user.email, // Sửa lỗi chính tả từ 'emai' -> 'email'
    });
  } else {
    res.status(401).json({ success: false, message: "Đăng nhập thất bại" });
  }
});

router.post("/register", (req, res) => {
  const { fullname, email, password, phone } = req.body;
  const usersData = readData();
  const users = usersData.data;

  // Kiểm tra email đã tồn tại chưa
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "Email đã được đăng ký",
    });
  }

  // Tạo user mới với cấu trúc phù hợp
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    fullname: fullname || "", // Thêm trường fullname
    email,
    password,
    phone: phone || "", // Thêm trường phone
    createdAt: new Date().toISOString(), // Thêm ngày tạo
  };

  // Thêm user vào danh sách
  users.push(newUser);
  usersData.data = users;

  // Ghi dữ liệu vào file
  try {
    writeData(usersData);

    // Tạo token như login
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      success: true,
      token,
      email: newUser.email,
      message: "Đăng ký thành công",
    });
  } catch (error) {
    console.error("Lỗi khi ghi file:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống khi đăng ký",
    });
  }
});

module.exports = router;
