function PopularBrands() {
  const brands = [
    { name: "New Balance 990", price: "$210.00", image: "/assets/new-balance.jpg" },
    { name: "ASICS Gel-EO", price: "$194.50", image: "/assets/asics.jpg" },
    { name: "Reebok Classic", price: "$143.95", image: "/assets/reebok-classic.jpg" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Popular Brands</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {brands.map((brand, idx) => (
          <div key={idx} className="text-center">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-24 h-24 mx-auto mb-2"
            />
            <p className="font-semibold">{brand.name}</p>
            <p className="text-gray-700">{brand.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularBrands;
