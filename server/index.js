const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/products', productRoute);
app.use('/users', userRoute); // login cũng nằm trong userRoutes

app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
