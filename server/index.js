const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const cartRoute = require("./routes/cartRoute");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRoute);
app.use("/users", userRoute);
app.use("/cart", cartRoute);

app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
