const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../src/services');
const fileName = 'product.json';

const readData = () => JSON.parse(fs.readFileSync(path.join(dataPath, fileName)));
const writeData = (data) => fs.writeFileSync(path.join(dataPath, fileName), JSON.stringify(data, null, 2));

router.get('/', (req, res) => {
  res.json(readData());
});

router.post('/', (req, res) => {
  const products = readData();
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  writeData(products);
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const products = readData().map(p => p.id == req.params.id ? { ...req.body, id: +req.params.id } : p);
  writeData(products);
  res.json({ message: 'Updated' });
});

router.patch('/:id', (req, res) => {
  const products = readData().map(p => p.id == req.params.id ? { ...p, ...req.body } : p);
  writeData(products);
  res.json({ message: 'Patched' });
});

router.delete('/:id', (req, res) => {
  const products = readData().filter(p => p.id != req.params.id);
  writeData(products);
  res.json({ message: 'Deleted' });
});

module.exports = router;
