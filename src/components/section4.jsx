import React from 'react';
import MenuCard from '../components/menuCard';
import taza1 from '../assets/taza1.png';
import taza2 from '../assets/taza2.png';
import taza3 from '../assets/taza3.png';
import taza4 from '../assets/taza4.png';

function Section4() {
    return (
        <>
            <div className='grid text-center bg-amber-800 bg-opacity-20 gap-10 lg:p-10 xl:p-10 p-2'>
                <h1 className='lg:text-5xl xl:text-5xl text-3xl p-4 font-bold'>Explore Our Menu</h1>
                <p className='lg:text-2xl xl:text-3xl text-md px-4'>Coffee Address Is Committed To Positively Impact the Quality Of Life Through Exceptional Cup Of Coffee</p>
                <div className="container mx-auto lg:pb-20 pb-10 max-w-screen-sm lg:max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="flex flex-col gap-4 h-full p-2">
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza1} name="Cappuccino" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza2} name="Black" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza3} name="Super Coffee" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza4} name="Moka Pot" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                        </div>
                        <div className="flex flex-col gap-4 h-full p-2">
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza1} name="Cappuccino" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza2} name="Black" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza3} name="Super Coffee" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                            <div className="flex-1 justify-center flex items-center"><MenuCard img={taza4} name="Moka Pot" price="$8.00" desc="A very good coffee with coffee and milk" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4;

