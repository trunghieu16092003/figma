const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router({});  // Tạo một router trống
const middlewares = jsonServer.defaults();

// Sử dụng các middlewares mặc định của json-server
server.use(middlewares);

// Đọc tất cả các file JSON trong thư mục src/services/data
const dataFolder = path.join(__dirname, 'src/services');
const files = fs.readdirSync(dataFolder);

// Tự động thêm các file JSON vào router và cấu hình các phương thức
files.forEach(file => {
  if (file.endsWith('.json')) {
    const fileName = path.basename(file, '.json');  // Lấy tên file không có phần mở rộng
    const filePath = path.join(dataFolder, file); // Đường dẫn đến file JSON
    const data = require(filePath);  // Đọc dữ liệu từ file JSON
    
    // Tạo endpoint cho file JSON
    router.db.set(fileName, data[fileName]); // Tạo endpoint cho từng file JSON
    
    // Cấu hình phương thức GET, POST, PATCH, PUT, DELETE cho file JSON
    server.get(`/${fileName}`, (req, res) => {
      res.json(data[fileName]);
    });

    // GET cho từng đối tượng riêng biệt
    server.get(`/${fileName}/:id`, (req, res) => {
        const item = data[fileName].data.find(item => item.id == req.params.id); // thêm .data ở đây
        if (item) {
          res.json({ data: item }); // bọc lại trong { data: item }
        } else {
          res.status(404).send({ error: 'Not found' });
        }
      });
      

    // POST để thêm mới dữ liệu
    server.post(`/${fileName}`, (req, res) => {
      const newItem = req.body;
      newItem.id = data[fileName].length + 1; // Tạo ID tự động
      data[fileName].push(newItem);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Lưu lại dữ liệu
      res.status(201).json(newItem);
    });

    // PATCH để cập nhật dữ liệu (chỉ cập nhật các trường có trong body)
    server.patch(`/${fileName}/:id`, (req, res) => {
      const item = data[fileName].find(item => item.id == req.params.id);
      if (item) {
        Object.assign(item, req.body);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Lưu lại dữ liệu
        res.json(item);
      } else {
        res.status(404).send({ error: 'Not found' });
      }
    });

    // PUT để thay thế toàn bộ dữ liệu của đối tượng
    server.put(`/${fileName}/:id`, (req, res) => {
      const item = data[fileName].find(item => item.id == req.params.id);
      if (item) {
        Object.assign(item, req.body); // Thay thế toàn bộ dữ liệu
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Lưu lại dữ liệu
        res.json(item);
      } else {
        res.status(404).send({ error: 'Not found' });
      }
    });

    // DELETE để xóa dữ liệu
    server.delete(`/${fileName}/:id`, (req, res) => {
      const index = data[fileName].findIndex(item => item.id == req.params.id);
      if (index !== -1) {
        data[fileName].splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Lưu lại dữ liệu
        res.status(200).send({ message: 'Deleted successfully' });
      } else {
        res.status(404).send({ error: 'Not found' });
      }
    });
  }
});

// Sử dụng router để kết nối với các phương thức
server.use(router);

// Lắng nghe trên port 3001
server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});
