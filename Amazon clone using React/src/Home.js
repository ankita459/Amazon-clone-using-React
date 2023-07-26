import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';
import { Container, Grid, Typography, Card, Image, Button, makeStyles } from '@mui/material';
import Product from './Product';
import HeroImage from './HeroImage';
import Testimonials from './Testimonials';
import NewsletterSignUp from './NewsletterSignUp';
import BlogSection from './BlogSection';
import CustomerSupport from './CustomerSupport';
import Footer from './Footer';
// import Selection from './Selection';


const Homepage = () => {
  // Dummy product data for demonstration purposes
  const products = [
    { id: 1, name: 'Product 1', price: 10.99, imageUrl: 'https://m.media-amazon.com/images/I/818x9XgEePL._SX522_.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, imageUrl: 'https://m.media-amazon.com/images/I/61wbmrQqlrL._SX679_PIbundle-30,TopRight,0,0_AA679SH20_.jpg' },
    { id: 3, name: 'Product 3', price: 14.49, imageUrl: 'https://m.media-amazon.com/images/I/61MKiHNCpyL._SX679_.jpg' },
    { id: 4, name: 'Product 4', price: 14.49, imageUrl: 'https://m.media-amazon.com/images/I/61h4IFyLZDL._SX522_.jpg' },
    // Add more products as needed
  ];
  

  return (
    <div>
      <HeroImage imageUrl="https://img.freepik.com/free-vector/hello-summer-shop-now-special-offer-forty-percent-off-lettering_1262-12098.jpg?w=1380&t=st=1689829373~exp=1689829973~hmac=3874ce0718d2841eced19443efcf7ce9d3d91ae42599e628aa9689dea0d5a9d3" alt="Hero Image" />
      <Product products={products} />
      <div>
        {/* Your call to action button */}
        <button variant="contained" color="primary" size="large" className="shop-now-button">
          Shop Now
        </button>
      </div>
      {/* < Selection /> */}
      <Testimonials />
      <NewsletterSignUp />
      <BlogSection />
      <CustomerSupport />
      <Footer />
      
      {/* Add other sections like blog, search bar, testimonials, etc. */}
    </div>
  );
};

export default Homepage;
