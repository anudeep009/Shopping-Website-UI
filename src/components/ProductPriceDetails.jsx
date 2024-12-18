import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function ProductPriceDetails() {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];
  const colors = ["#EDEDED", "#C0C0C0", "#000000"];

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">
        Shoes Reebok Zig Kinetica 3
      </h2>
      <div className="flex items-center gap-1 text-yellow-400 mt-2">
        {[...Array(4)].map((_, index) => (
          <FaStar key={index} />
        ))}
        <span className="text-gray-600 text-sm ml-1">(42 reviews)</span>
      </div>
      <p className="text-3xl font-semibold text-gray-800 mt-3">$199.00</p>

      <div className="mt-4">
        <span className="text-gray-700 font-medium">Color:</span>
        <div className="flex gap-2 mt-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-10 h-10 rounded-full border"
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <span className="text-gray-700 font-medium">Size:</span>
        <div className="flex gap-2 flex-wrap mt-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border rounded-md px-4 py-2 ${
                selectedSize === size
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          <FaCartPlus />
          Add to cart
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-3 text-center">
        Free delivery on orders over $30.0
      </p>
    </div>
  );
}

export default ProductPriceDetails;
