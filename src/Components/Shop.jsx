import React from "react";
import { Helmet } from "react-helmet";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Wipro Furniture Gusto High Back Chair",
      href: "#",
      price: "$48",
      imageSrc:
        "https://m.media-amazon.com/images/I/61OpDrUEC4L._AC_UL320_.jpg",
      imageAlt: "Wipro Furniture Gusto High Back Chair",
    },
    {
      id: 2,
      name: "Solid Sheesham Wood 6 Seater Sofa Set",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UL320_.jpg",
      imageAlt: "Solid Sheesham Wood 6 Seater Sofa Set",
    },
    {
      id: 3,
      name: "Wood Bedroom Furniture ",
      href: "#",
      price: "$89",
      imageSrc:
        "https://m.media-amazon.com/images/I/61sYtf2HNdL._AC_UL320_.jpg",
      imageAlt: "Wood Bedroom Furniture",
    },
    {
      id: 4,
      name: "Compact Plastic Cabinet for Storage",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/81yswKKDH3L._AC_UL320_.jpg",
      imageAlt: "Compact Plastic Cabinet for Storage",
    },
    {
      id: 5,
      name: "Wood Dining Table 4 Seater ",
      href: "#",
      price: "$48",
      imageSrc:
        "https://m.media-amazon.com/images/I/71DvmF5+xRL._AC_UL320_.jpg",
      imageAlt: "Wood Dining Table 4 Seater ",
    },
    {
      id: 6,
      name: "Double Bed Cot Bed Furniture for Bedroom",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/71Pl+x8UnvL._AC_UL320_.jpg",
      imageAlt: "Double Bed Cot Bed Furniture for Bedroom.",
    },
    {
      id: 7,
      name: "Set of 2 Outdoor Seating Chairs",
      href: "#",
      price: "$89",
      imageSrc:
        "https://m.media-amazon.com/images/I/81CgXzoF5wL._AC_UL320_.jpg",
      imageAlt: "Set of 2 Outdoor Seating Chairs",
    },
    {
      id: 8,
      name: "Sheesham Wood 5 Seater Sofa",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/71A6gFjHhtL._AC_UL320_.jpg",
      imageAlt: "Sheesham Wood 5 Seater Sofa",
    },
  ];

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
                <div className="mt-4">
                  <button
                    onClick={() => addToBag(product)}
                    className="w-full py-3 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Add to Bag
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
