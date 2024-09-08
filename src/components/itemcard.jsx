import stars from "../assets/rating.png";

function ItemCard({ img = "https://via.placeholder.com/150", productName = "Product Name", price = "Price" }) {
    return (
        <div className="grid justify-center text-center items-center p-5 bg-white rounded-3xl hover:shadow-xl shadow-md">
            <div className="flex flex-col justify-center items-center text-center h-52 overflow-hidden">
                <img src={img} alt={productName} className="object-cover w-full h-full" />
            </div>
            <div className="justify-center flex items-center">
                <img className="w-32" src={stars}></img>
            </div>
            <p className="text-xl">{productName}</p>
            <h1 className="text-xl font-bold ">{price}</h1>
        </div>
    );
}

export default ItemCard;