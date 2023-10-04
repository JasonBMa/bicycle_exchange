import React from 'react'

export const Banner = () => {
  return (
    <div className="border-solid border-2 border-blue-400 w-full h-96 mt-5 bg-blue-500 shadow-lg shadow-blue-500/50 mb-5 flex flex-col items-center justify-center rounded">
      <div className="text-white text-6xl font-bold">
        Welcome to <span className="text-green-300 font-extrabold italic">Rent A Bike</span>
      </div>
      <div className="text-white text-4xl font-bold">
        Browse, Rent, <span className="text-yellow-400 animate-pulse">Explore</span>
      </div>
    </div>
  );
}
