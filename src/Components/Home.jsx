import React from "react";
import Home2 from "./Home2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  const stats = [
    { id: 1, name: "Total Sales", value: "25,000+ Happy Customers" },
    { id: 2, name: "Deliveries", value: "Across 150+ Cities" },
    {
      id: 3,
      name: "Exclusive Collections",
      value: "50+ Premium Furniture Lines",
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Empire-Design</title>
      </Helmet>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl  md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Transform Your Home <br /> with Timeless Furniture
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Discover stylish, modern furniture that elevates every corner of
                your home.
                <br /> Find the perfect piece to match your unique style today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  to={"/shop"}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Shop Now
                </Link>
                <Link
                  to={"/contact"}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Contact us<span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>

      <Home2 />
    </>
  );
}

export default Home;
