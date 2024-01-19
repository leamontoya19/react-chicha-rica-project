import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCard from './components/AnimatedCard';

function App() {
  const [count, setCount] = useState(0);
  const [filters, setFilters] = useState({ /*desde esta linea hasta abajo, establcemos un filtro por categoria de producto */
    category: 'all',
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      );
    });
  };

  const products = [
    { id: 1, name: 'Product 1' },// Define your products array here
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];


  return (
    <>
      <Header />
      <AnimatedCard />
      <Footer />
      <Products products={filterProducts(products)} />
    </>
  );
}

function Products({ products }) { /* esto es una componente funcional que toma una prop declarada como "products"y mestra  una lista de productos mediante la función mapa.*/
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default App;