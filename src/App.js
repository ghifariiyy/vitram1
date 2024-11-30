import React, { useState } from 'react';
import './index.css';

function App() {
  const images = ['sepatu1.png', 'sepatu2.png', 'sepatu3.png', 'sepatu4.png'];
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setMainImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setMainImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <button className="back-button">Back</button>
      <div className="layout">
        <div className="image-section">
          <div className="product-images">
            <img
              src={`${process.env.PUBLIC_URL}/${images[mainImageIndex]}`}
              alt="Main Product"
              className="main-image"
            />
            <div className="image-navigation">
              <img
                src={`${process.env.PUBLIC_URL}/button2.png`}
                alt="Previous"
                className="nav-button"
                onClick={handlePreviousClick}
              />
              <img
                src={`${process.env.PUBLIC_URL}/button.png`}
                alt="Next"
                className="nav-button"
                onClick={handleNextClick}
              />
            </div>
          </div>
          <div className="image-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/${image}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImageIndex(index)}
                className={`thumbnail ${index === mainImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <div className="details-header">
            <span className="category">Category: Other</span>
            <button className="delivery-option">Check Available Delivery Option</button>
          </div>
          <h1>⭐ 4.9 (200 rating)</h1>
          <p>
            [Online Exclusive] CALISTA Flatshoes Sepatu Wanita Black/Dark Grey
            <br />
            The Little Things She Needs is a fashion brand that specializes in comfortable stylish flat ballerina shoes for women.
          </p>
          <ul>
            <li>
              <strong>Model:</strong> Flatshoes
            </li>
            <li>
              <strong>Toe:</strong> Round Toecap
            </li>
            <li>
              <strong>Upper:</strong> Synthetic PU Leather
            </li>
            <li>
              <strong>Outsole:</strong> PU
            </li>
          </ul>
          <p>Step into the perfect pair with The Little Things She Needs #TLTSN</p>
          <div className="links">
            <div className="link-item">
              <span>Website Link:</span>
              <a href="https://tokosepatu.id" target="_blank" rel="noopener noreferrer">
                tokosepatu.id
              </a>
            </div>
            <div className="link-item">
              <span>Sosial Media E-Commerce Link:</span>
              <a href="https://tokosepatu.id" target="_blank" rel="noopener noreferrer">
                tokosepatu.id
              </a>
            </div>
            <div className="link-item">
              <span>Telephone Number:</span>
              <span>0812345678910</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-box">
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" className="profile-img" />
          <p>Toko Sepatu</p>
        </div>
      </div>
    </div>
  );
}

export default App;
