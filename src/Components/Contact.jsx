"use client";
import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import { Helmet } from "react-helmet";

function Contact() {
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Empire-Design | Contact Page</title>
      </Helmet>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="relative flex flex-wrap lg:h-screen lg:items-center p-5 ">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Get in Touch</h1>

            <p className="mt-4 text-gray-500">
              Need help or have questions? We're here for you! Contact us with
              any inquiries, feedback, or support related to our products and
              services.
            </p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="text" className="sr-only">
                Full Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                  placeholder="Enter full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Subject
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                  placeholder="Enter Subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Message
              </label>

              <div className="relative">
                <textarea
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-md"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-97 lg:h-[75%] lg:w-1/2">
          <img
            alt=""
            src="https://png.pngtree.com/thumb_back/fw800/background/20230809/pngtree-a-living-room-with-lots-of-furniture-image_13035271.jpg"
            className="absolute inset-0 h-full w-full object-cover rounded-[20px]"
          />
        </div>
      </section>
    </>
  );
}

export default Contact;
