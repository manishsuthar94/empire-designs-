import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import products from "../Data/Data";

function Shop() {
  const addToBag = (product) => {
    const currentBag = JSON.parse(localStorage.getItem("bagItems")) || [];
    const updatedBag = [...currentBag, product];
    localStorage.setItem("bagItems", JSON.stringify(updatedBag));

    // Update cart count in the DOM
    const cartCountElement = document.querySelector("#cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = updatedBag.length;
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Empire-Design | Shop Now</title>
      </Helmet>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group block">
                <Link
                  to={{
                    pathname: `/details/${product.id}`,
                    state: { product },
                  }}
                  className="block"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="text-lg font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </Link>
                <div className="mt-4">
                  <button
                    onClick={() => addToBag(product)}
                    className="w-full py-3 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
