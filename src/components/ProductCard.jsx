import React from "react";
import "../styles/ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="product-image"
        />
        {product.discountPercentage > 0 && (
          <div className="discount-badge">-{product.discountPercentage}%</div>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-category">
          <span className="category-tag">{product.category}</span>
        </div>

        <div className="product-footer">
          <div className="product-price-section">
            <span className="product-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="product-original-price">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>

          <div className="product-rating">
            <span className="rating-stars">★</span>
            <span className="rating-value">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};
