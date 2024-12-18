import Header from "./components/Header.jsx";
import BreadCrumbs from "./components/BreadCrumbs.jsx"
import ProductDetails from "./components/ProductDetails.jsx";
import ProductReviews from "./components/ProductReviews.jsx";
import ProductPriceDetails from "./components/ProductPriceDetails.jsx";
import ProductComments from "./components/ProductComments.jsx";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <BreadCrumbs />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          <div className="space-y-6">
            <ProductDetails />
            <div className="lg:hidden">
              <ProductPriceDetails />
            </div>
            <ProductComments />
          </div>
          <div className="hidden lg:flex flex-col space-y-6">
            <ProductPriceDetails />
            <ProductReviews />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
