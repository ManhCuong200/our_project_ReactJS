import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <div className="relative z-10 max-w-2xl px-6 mt-10">
        <h1 className="text-5xl mb-8 font-bold tracking-tight">Our Projects</h1>
        <p className="text-2xl font-medium text-gray-200 mt-8">
          We revel in helping our customers solve complex issues and turn their
          software ideas into success stories.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
