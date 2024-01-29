import React from 'react'
import '../styles/Home.css'
import AnimatedCard from './AnimatedCard';
import Wishlist from './Wishlist';


function Home() {
  return (
    <div className="wishlist-container">
      <Wishlist />
    </div>
  );
}

export default Home