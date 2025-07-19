import React from "react";
import { products } from "../assets/asset";
import ProductCard from "../Components/ProductCard";

const SunglassesPage = () => {
  const sunglassProducts = products.filter((item) => item.category === "SUNGLASSES");

  return (
    <div className="p-6">
      <h1 className="text-4xl font-serif mb-6">Sunglasses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sunglassProducts.map((items) => (
          <ProductCard key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default SunglassesPage;
