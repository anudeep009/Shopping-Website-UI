import React, { useState } from "react";

function ProductImageGallery() {
  const images = [
    "https://m.media-amazon.com/images/I/71uzeI3-b1L._SY695_.jpg",
    "https://m.media-amazon.com/images/I/51B8MOi9vxL._SY675_.jpg",
    "https://m.media-amazon.com/images/I/51ebqroACRL._SY675_.jpg",
    "https://m.media-amazon.com/images/I/518mXO019ZL._SY695_.jpg",
    "https://m.media-amazon.com/images/I/51B8MOi9vxL._SY675_.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="p-4 bg-gray-50 rounded-lg max-w-md mx-auto md:max-w-full">
      <div className="border rounded-lg overflow-hidden max-h-[400px] flex items-center justify-center">
        <img
          src={mainImage}
          alt="Main Product"
          className="w-full h-[400px] object-contain"
        />
      </div>

      <div className="flex justify-center gap-2 mt-4 flex-wrap">
  {images.slice(0, 4).map((img, idx) => (
    <button
      key={idx}
      onClick={() => setMainImage(img)}
      className={`border rounded-md ${
        mainImage === img ? "border-gray-900" : "border-transparent"
      }`}
    >
      <img src={img} alt={`Thumbnail ${idx}`} className="w-16 h-16 object-cover rounded-md hover:opacity-80" />
    </button>
  ))}
</div>

    </div>
  );
}

export default ProductImageGallery;
