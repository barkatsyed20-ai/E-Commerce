import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];

  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <Heading highlight="Our" heading="Fresh Products" />

        <p className="text-center text-zinc-500 mt-4 max-w-2xl mx-auto">
          Explore our carefully selected collection of farm-fresh fruits,
          vegetables, dairy products, and seafood delivered straight to your
          doorstep.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                px-6 py-3 rounded-full text-sm md:text-base font-medium
                transition-all duration-300 cursor-pointer
                ${
                  activeTab === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg scale-105"
                    : "bg-zinc-100 text-zinc-700 hover:bg-orange-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="text-center mt-8">
          <span className="text-zinc-500">
            Showing{" "}
            <span className="font-semibold text-orange-500">
              {filteredItems.length}
            </span>{" "}
            products
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {filteredItems.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="transform transition duration-300 hover:-translate-y-2"
            >
              <Cards
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/allproducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
