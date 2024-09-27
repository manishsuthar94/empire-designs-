import React from "react";
import { Helmet } from "react-helmet";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc:
        "https://m.media-amazon.com/images/I/71cPrlBcO-L._AC_UL320_.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/71u3F2NZ9gL._AC_UL320_.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://m.media-amazon.com/images/I/610GhgEG6pL._AC_UL320_.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/61LOY61YKCL._AC_UL320_.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc:
        "https://m.media-amazon.com/images/I/71uxQPlAKhL._AC_UL320_.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 6,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/519BKVV1yRL._AC_UL320_.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 7,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://m.media-amazon.com/images/I/71-dNLM2PSL._AC_UL320_.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 8,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://m.media-amazon.com/images/I/81XPnJCcFzL._AC_UL320_.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
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
