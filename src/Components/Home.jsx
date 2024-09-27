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

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Homeowners and Designers
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Empire Design is the trusted choice for transforming homes and
            workspaces with quality and style.
          </p>
        </div>

        <div className="bg-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 rounded-lg border border-gray-200 p-7"
                >
                  <dt className="text-xl leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <Home2 />
    </>
  );
}

export default Home;
