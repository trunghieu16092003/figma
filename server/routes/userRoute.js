const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const jwt = require('jsonwebtoken');

const dataPath = path.join(__dirname, '../data');
const fileName = 'user.json';
const SECRET_KEY = 'your_secret_key'; 

const readData = () => JSON.parse(fs.readFileSync(path.join(dataPath, fileName)));

router.get('/', (req, res) => {
  res.json(readData());
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readData().data;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '1h' } // Token có hiệu lực trong 1 giờ
    );

    res.status(200).json({
      success: true,
      token,
      email: user.emai
    });
  } else {
    res.status(401).json({ success: false, message: 'Đăng nhập thất bại' });
  }
});

module.exports = router;
