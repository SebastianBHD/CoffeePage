import React from "react";

function TestimonialCard({ name, testimony, rol }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 xl:p-20">
      <h2 className="lg:text-5xl xl:text-5xl text-3xl font-semibold mb-4">What The People Say?</h2>
      <div className="w-16 h-1 bg-gray-300 mb-4"></div>
      <p className="text-md md:text-2xl italic text-gray-700 max-w-4xl">
        {testimony}
      </p>
      <div className="mt-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm md:text-base text-amber-800">{rol}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;