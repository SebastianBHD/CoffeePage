import img1 from '../assets/img1.jpg';

function Section1() {
    return (
        <>
            <div className="grid bg-cover shadow-xl bg-center xl:p-20 lg:p-20 p-10" style={{ backgroundImage: `url(${img1})`, height: '76vh' }}>
                <div className="xl:flex xl:items-center xl:justify-end flex items-start h-full">
                    <div className='flex flex-col justify-center gap-8'>
                        <h1 className="text-4xl lg:text-6xl xl:text-6xl md:text-6xl font-semibold text-white">Life Begin After Coffee</h1>
                        <p className="text-white text-xl italic">Here to bring your Life Style to the next level!</p>
                        <button className="bg-amber-800 w-2/5 rounded-2xl text-white p-2 shadow-md hover:shadow-lg">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section1;