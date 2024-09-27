import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Empire-Design | About Page</title>
      </Helmet>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  About us
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  About Empire Design
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Welcome to Empire Design, where we believe that great
                  furniture brings your home to life. We specialize in providing
                  high-quality, stylish, and modern furniture to suit every
                  taste and lifestyle. From elegant living room sets to
                  functional office furniture, our carefully curated collections
                  are designed to enhance the beauty and comfort of your space.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://t4.ftcdn.net/jpg/05/51/69/95/360_F_551699573_1wjaMGnizF5QeorJJIgw5eRtmq5nQnzz.jpg"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="text-xl font-semibold leading-7 text-indigo-600">
                  Our Mission
                </p>
                <p>
                  At Empire Design, our mission is simple: To create spaces
                  where style meets comfort. We aim to offer furniture that not
                  only looks beautiful but also makes your living or working
                  environment more comfortable and functional. Whether you’re
                  furnishing your home, office, or a specific room, we are
                  committed to delivering pieces that perfectly match your
                  vision.
                </p>
                <p className="text-xl mt-1 font-semibold leading-7 text-indigo-600">
                  Our Collections
                </p>

                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Living Room Furniture
                      </strong>{" "}
                      Comfortable sofas, stylish coffee tables, and functional
                      TV stands to make your living room a relaxing and
                      welcoming environment.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Bedroom Furniture:
                      </strong>{" "}
                      Modern beds, cozy mattresses, and elegant wardrobes that
                      transform your bedroom into a haven of rest.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Office Furniture:
                      </strong>{" "}
                      Ergonomic chairs, practical desks, and storage solutions
                      designed to improve your productivity while adding
                      sophistication to your workspace.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  We understand that furniture shopping is a personal journey,
                  and we are here to help you every step of the way. Whether
                  you’re looking to furnish a new home, revamp a single room, or
                  find the perfect statement piece, our dedicated team is ready
                  to assist you in finding the furniture that fits your needs.
                  <br />
                  <br />
                  At Empire Design, we’re not just selling furniture – we’re
                  helping you create spaces where memories are made. Join us in
                  bringing timeless design and ultimate comfort into your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
