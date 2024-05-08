const express = require('express');
const app = express();
const PORT = 3000;

// Dummy data for demonstration
const topProducts = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 30.99 },
];

app.get('/top-products', (req, res) => {
  res.json(topProducts);
});

app.listen(PORT, () => {
  console.log(`Top Product Microservice is running on port ${PORT}`);
});
