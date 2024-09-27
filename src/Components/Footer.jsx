import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white mt-20 border-t-[1px] text-gray-200">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img
                  alt=""
                  src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210701-4jhh8kj7q79pyhjbhwfp.png?crop=1:1,smart&width=250&dpr=2"
                  className="h-10 w-auto"
                />{" "}
                <h1 className="ml-2 font-bold text-2xl text-cyan-950 sm:text-2xl">
                  Empire Design
                </h1>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Discover stylish, modern furniture that elevates every corner of
                your home. Find the perfect piece to match your unique style
                today.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  to={"/"}
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  to={"/shop"}
                >
                  {" "}
                  Shop{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  to={"/about"}
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 transition hover:text-gray-700/75"
                  to={"/contact"}
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
