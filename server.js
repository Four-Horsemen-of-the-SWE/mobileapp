const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/products');
const Freelance = require('./models/freelance');
const Employer = require('./models/employer');

app.use(express.json())

mongoose.connect('mongodb+srv://admin:1234@cluster0.34tzdtw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connection.on('error', (err) => {
  console.error('MongoDB error', err);
});
// mock data
const products = [{}];
const Freelance = [{}];
const Employer = [{}];

//get all
app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
app.get('/freelance', async (req, res) => {
  const freelance = await Freelance.find({});
  res.json(freelance);
});
app.get('/employer', async (req, res) => {
  const employer = await Employer.find({});
  res.json(employer);
});

//get one
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});
app.get('/freelance/:id', async (req, res) => {
  const { id } = req.params;
  const freelance = await Freelance.findById(id);
  res.json(freelance);
});
app.get('/employer/:id', async (req, res) => {
  const { id } = req.params;
  const employer = await Employer.findById(id);
  res.json(employer);
});

//Post
app.post('/products', async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  res.status(201).end();
});
app.post('/freelance', async (req, res) => {
  const payload = req.body;
  const freelance = new Freelance(payload);
  await freelance.save();
  res.status(201).end();
});
app.post('/employer', async (req, res) => {
  const payload = req.body;
  const employer = new Employer(payload);
  await employer.save();
  res.status(201).end();
});

//Put
app.put('/products/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, { $set: payload });
  res.json(product);
});
app.put('/freelance/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const freelance = await Freelance.findByIdAndUpdate(id, { $set: payload });
  res.json(freelance);
});
app.put('/employer/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const employer = await Employer.findByIdAndUpdate(id, { $set: payload });
  res.json(employer);
});

//Delete
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);
  res.status(204).end();
});
app.delete('/freelance/:id', async (req, res) => {
  const { id } = req.params;

  await Freelance.findByIdAndDelete(id);
  res.status(204).end();
});
app.delete('/employer/:id', async (req, res) => {
  const { id } = req.params;

  await Employer.findByIdAndDelete(id);
  res.status(204).end();
});

app.listen(9000, () => {
  console.log('Application is running on port 9000');
});
