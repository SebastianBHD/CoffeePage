import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function Section2() {
    return (
        <>
            <div className="container mx-auto lg:p-20 p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
                    <div className="flex flex-col h-full">
                        <div className="flex-1">
                            <img className="h-full w-full object-cover" src={img3} alt="placeholder" />
                        </div>
                        <div className="bg-amber-800 bg-opacity-20 py-10 flex-1 flex flex-col justify-center">
                            <div className='flex flex-col text-center items-center gap-4'>
                                <p className='text-xl lg:text-2xl'>Is Right Here For Your Disposition</p>
                                <h1 className='text-3xl lg:text-5xl'>Mr. Sebastian Britos</h1>
                                <h1 className='text-xl lg:text-3xl font-bold'>+598 096 099 111</h1>
                                <button className="bg-amber-800 w-2/5 rounded-2xl text-white p-2 hover:shadow-lg shadow-md">BOOK A TABLE</button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:h-screen">
                        <img className="h-full w-full object-cover" src={img2} alt="placeholder" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;