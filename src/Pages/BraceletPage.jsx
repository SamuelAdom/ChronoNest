import React from "react";
import { products } from "../assets/asset";
import ProductCard from "../Components/ProductCard";

const BraceletPage = () => {
  const braceletProducts = products.filter((item) => item.category === "BRACELET");

  return (
    <div className="p-6">
      <h1 className="text-4xl font-serif mb-6">Bracelets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {braceletProducts.map((items) => (
          <ProductCard key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default BraceletPage;
