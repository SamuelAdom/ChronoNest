import React from "react";
import { products } from "../assets/asset";
import ProductCard from "../Components/ProductCard";

const WatchPage = () => {
  const watchProducts = products.filter((item) => item.category === "WATCH");

  return (
    <div className="p-6">
      <h1 className="text-4xl font-serif mb-6">Watches</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
        {watchProducts.map((items) => (
          <ProductCard  items={items} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
