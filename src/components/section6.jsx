import React from 'react';
import cafe1 from '../assets/section6cafe1.jpg';
import cafe2 from '../assets/section6cafe2.jpg';
import cafe3 from '../assets/section6cafe3.jpg';

function CustomTable() {
  return (
    <div className="flex flex-col md:flex-row w-full shadow-2xl">
      <div className="flex-1 flex items-center justify-center w-full h-64 lg:h-128 xl:h-128 md:h-128">
        <img src={cafe3} alt="Imagen 1" className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex flex-col w-full h-64 md:h-auto">
        <div className="flex flex-1">
          <div className="flex-1 flex items-center justify-center bg-amber-800 bg-opacity-20 w-full h-32 md:h-64">
            <div className='felx justify-center items-center text-center'>
                <p className='font-semibold'>NEW PRODUCT</p>
                <p className='font-bold'>FIND LACORSO COFFEE NEAR YOU</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center w-full h-32 md:h-64">
            <img src={cafe1} alt="Imagen 3" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1 flex items-center justify-center w-full h-32 md:h-64">
            <img src={cafe2} alt="Imagen 4" className="object-cover w-full h-full" />
          </div>
          <div className="flex-1 flex items-center justify-center  bg-amber-800 bg-opacity-20 w-full h-32 md:h-64">
            <div className='felx justify-center items-center text-center'>
                <p className='font-semibold'>FIND US</p>
                <p className='font-bold'>FIND LACORSO COFFEE NEAR YOU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;