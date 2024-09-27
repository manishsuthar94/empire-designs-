import React from "react";

function Home2() {
  const callouts = [
    {
      name: "Living Room",
      description:
        "Stylish accessories to make your living space cozy and modern.",
      imageSrc:
        "https://cdn.pixabay.com/photo/2024/01/27/08/22/ai-generated-8535501_640.png",
      imageAlt:
        "Discover stylish and comfortable furniture to transform your living room into a cozy, modern space.",
      href: "#",
    },
    {
      name: "Bedroom",
      description: "Create a serene and relaxing environment for better rest.",
      imageSrc: "https://m.media-amazon.com/images/I/61haDw3+mDL.jpg",
      imageAlt:
        "Find the perfect furniture to create a peaceful and relaxing bedroom environment for better sleep and comfort.",
      href: "#",
    },
    {
      name: "Office",
      description:
        "Ergonomic furniture designed to boost productivity and comfort.",
      imageSrc:
        "https://bgofficefurniture.com/wp-content/uploads/2021/06/102-W2-1.jpg",
      imageAlt:
        "Enhance productivity with ergonomic and modern office furniture designed for a professional work setting.",
      href: "#",
    },
  ];

  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold text-gray-900">Categories</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
