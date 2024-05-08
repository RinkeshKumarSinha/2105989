import React, { useState, useEffect } from 'react';

const ProductList = () => { // Ensure the function name is ProductList
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/top-products')
      .then(response => response.json())
      .then(data => setTopProducts(data))
      .catch(error => console.error('Error fetching top products:', error));
  }, []);

  return (
    <div>
      <h2>Top Products</h2>
      <ul>
        {topProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
