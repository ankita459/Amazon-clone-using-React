import React from 'react'
import './App.css';

const Product = ({ products }) => {
  return (
    <div>
      <h2 className="centered-heading">Today’s Deals</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="centered-heading">Up to 60% off | Every room deserves to be unique</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="centered-heading">Up to 45% off | Furnitures from stores nearby</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="centered-heading">Up to 50% off on beauty products, this festive season</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="centered-heading">Up to 45% off | Wireless electronics make life easy</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="card-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
