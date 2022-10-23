const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/products');

app.use(express.json())

mongoose.connect('mongodb+srv://admin:1234@cluster0.34tzdtw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connection.on('error', (err) => {
  console.error('MongoDB error', err);
});
// mock data
const products = [{}];

//get all
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
//get one
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

app.post('/products', async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  res.status(201).end();
});

app.put('/products/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, { $set: payload });
  res.json(product);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);
  res.status(204).end();
});

app.listen(9000, () => {
  console.log('Application is running on port 9000');
});
