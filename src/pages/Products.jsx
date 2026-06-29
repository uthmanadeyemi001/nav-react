import React from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import "../styles/ProductCard.css";

export const Products = () => {
  const { productsArray } = useProducts(); 
  
  return (
    <div className="products-grid">
      {productsArray.map((productData) => ( 
        <ProductCard key={productData.id} product={productData} />
      ))}
    </div>
  );
};