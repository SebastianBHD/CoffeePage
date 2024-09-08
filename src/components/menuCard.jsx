function MenuCard ({name, img, price, desc}) {

    return (
        <>
            <div className="flex flex-row gap-x-2 items-center justify-center bg-amber-800 bg-opacity-15 p-2 rounded-3xl shadow-xl">
                <div className="basis-1/3 max-w-24 h-24 flex lg:justifi-end xl:justify-end md:justify-end">
                    <img className="flex flex-row justify-center items-center object-cover rounded-full md:w-24 border-2 md:h-24 w-20 h-20" src={img} alt={name} />
                </div>
                <div className="basis-2/3 grid justify-start text-start text-black">
                    <p className="xl:text-2xl lg:text-2xl md:text-xl text-sm font-bold">{name} ............. {price}</p>
                    <p className="xl:text-2xl text-opacity-60 font-light italic text-black lg:text-2xl md:text-xl text-sm">{desc}</p>
                </div>
            </div>
        </>
    );
}
export default MenuCard;