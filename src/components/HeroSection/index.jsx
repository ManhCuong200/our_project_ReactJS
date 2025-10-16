import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        relative w-full h-[90vh] sm:h-screen
        flex flex-col justify-center items-center text-center text-white overflow-hidden
        px-4 sm:px-6
      "
    >
      <div className="relative z-10 max-w-2xl px-4 sm:px-6 mt-8 sm:mt-10">
        <h1
          className="
            text-3xl sm:text-5xl font-bold tracking-tight mb-6 sm:mb-8
            leading-tight sm:leading-snug
          "
        >
          Our Projects
        </h1>

        <p
          className="
            text-base sm:text-2xl font-medium text-gray-200
            mt-4 sm:mt-8 leading-relaxed sm:leading-normal
          "
        >
          We revel in helping our customers solve complex issues and turn their
          software ideas into success stories.
        </p>
      </div>
      <div className="absolute inset-0 bg-black/10 z-0"></div>
    </section>
  );
};

export default HeroSection;
