import React from 'react'

export const Banner = () => {
  return (
    <div className="w-full h-96 bg-secondary shadow-lg mb-5 flex flex-col items-center justify-center rounded">
      <div className="text-white text-6xl font-bold">
        Welcome to Rent A Bike
      </div>
      <div className="text-white text-4xl font-bold">
        Browse, Rent, <span className="text-blue animate-pulse">Explore</span>
      </div>
    </div>
  );
}
