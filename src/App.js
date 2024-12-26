import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import FilterMenu from './components/FilterMenu';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);
  const [filterText, setFilterText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductList products={filteredProducts} setProducts={setProducts} />
    </div>
  );
};

export default App;

