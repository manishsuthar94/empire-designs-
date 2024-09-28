import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow  m-4 mt-20 pt-7">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to={"/"}
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210701-4jhh8kj7q79pyhjbhwfp.png?crop=1:1,smart&width=250&dpr=2"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Empire Design
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <Link to={"/"} className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/shop"} className="hover:underline me-4 md:me-6">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/team"} className="hover:underline me-4 md:me-6">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <Link to={"/"} className="hover:underline">
              Empire Design
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
