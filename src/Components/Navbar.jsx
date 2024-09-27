"use client";

import { useState, useEffect } from "react";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Living Room",
    description:
      "Discover stylish and comfortable furniture to transform your living room into a cozy, modern space.",
    href: "/livingroom",
    icon: SquaresPlusIcon,
  },
  {
    name: "Bedroom",
    description:
      "Find the perfect furniture to create a peaceful and relaxing bedroom environment for better sleep and comfort.",
    href: "/bedroom",
    icon: Bars3Icon,
  },
  {
    name: "Office",
    description:
      "Enhance productivity with ergonomic and modern office furniture designed for a professional work setting.",
    href: "/office",
    icon: SquaresPlusIcon, // Represents a building or structure
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // In your main component or useEffect
  // In your main component or useEffect
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("bagItems")) || [];
    const cartCountElement = document.querySelector("#cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = savedItems.length;
    }
  }, []);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210701-4jhh8kj7q79pyhjbhwfp.png?crop=1:1,smart&width=250&dpr=2"
              className="h-10 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <Link
            to="/cart"
            className="relative mr-7 flex items-center text-gray-900 hover:text-gray-700 transition duration-300"
          >
            <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to={"/"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>

          <Link
            to={"/shop"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Shop
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Categories
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            to={"/about"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About us
          </Link>
          <Link
            to={"/contact"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact us
          </Link>
          <Link
            to={"/team"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Our Team
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/cart"
            className="relative flex items-center text-gray-900 hover:text-gray-700 transition duration-300"
          >
            <ShoppingBagIcon className="h-8 w-8" aria-hidden="true" />
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210701-4jhh8kj7q79pyhjbhwfp.png?crop=1:1,smart&width=250&dpr=2"
                className="h-8 w-auto"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={"/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>

                <Link
                  to={"/shop"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Categories
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link} // Use Link instead of "a"
                        to={item.href} // Use "to" instead of "href"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  to={"/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </Link>

                <Link
                  to={"/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact us
                </Link>
                <Link
                  to={"/team"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our Team
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
