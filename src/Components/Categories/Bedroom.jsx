import React from "react";
import { Helmet } from "react-helmet";

function Bedroom() {
  const products = [
    {
      id: 1,
      name: "Wood Bunk Bed in Brown Colour",
      href: "#",
      price: "$48",
      imageSrc:
        "https://www.ulcdn.net/images/products/701405/product/FVBDNS33BR67311_LP.jpg?1668602279",
      imageAlt: "Canary Engineered Wood Bunk Bed in Brown Colour",
    },
    {
      id: 2,
      name: "Michel Solid Wood Dining Chair set of 2",
      href: "#",
      price: "$35",
      imageSrc:
        "https://www.ulcdn.net/images/products/475206/product/Michel_Dining_Chair_Provincial_Teak_Color_Semi_Gloss_Finish_LP.jpg?1646307280",
      imageAlt:
        "Michel Solid Wood Dining Chair set of 2 in Provincial Teak Finish",
    },
    {
      id: 3,
      name: "Multi TC Cotton Blend King Size Bedsheet ",
      href: "#",
      price: "$89",
      imageSrc:
        "https://www.ulcdn.net/images/products/897567/product/KLEBS-2270-Multi_1.png?1717679623",
      imageAlt: "Multi TC Cotton Blend King Size Bedsheet",
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
        <title>Empire-Design | BedRoom Furniture</title>
      </Helmet>
      <div className="text-center mt-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bedroom Furniture
        </h1>
      </div>
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

export default Bedroom;
