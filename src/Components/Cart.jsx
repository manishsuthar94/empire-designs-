import React from "react";
import { Helmet } from "react-helmet";

function Cart() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const storedBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    setCartItems(storedBagItems);
  }, []);

  const removeFromCart = (itemIndex) => {
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== itemIndex
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("bagItems", JSON.stringify(updatedCartItems));
  };

  // Calculate total price
  const totalPrice = cartItems
    .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0)
    .toFixed(2);

  // Total items
  const totalItems = cartItems.length;

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Empire-Design | Cart Page</title>
      </Helmet>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Your Cart</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="group block">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      alt={item.imageAlt}
                      src={item.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-700">{item.name}</h3>
                    <p className="text-lg font-medium text-gray-900">
                      {item.price}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="w-full py-3 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-8 p-4 border-t border-gray-200">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-medium text-gray-900">
                    Total Items:
                  </span>
                  <span className="text-lg font-semibold text-gray-800">
                    {totalItems}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-medium text-gray-900">
                    Total Price:
                  </span>
                  <span className="text-lg font-semibold text-gray-800">
                    ${totalPrice}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <p className="text-2xl font-medium text-gray-900">
              Your cart is empty
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Cart;
