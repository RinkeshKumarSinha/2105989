import React from 'react';
import ProductList from './ProductList/ProductList'; // Corrected relative path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My E-commerce Store</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
