import Headphone from '../../assets/headphone.png';
import { GiScales } from "react-icons/gi";
import {AiOutlineHeart} from "react-icons/ai"; 


const Product = () => {
    return ( 
        <section>
        <div className="card-container box-container max-w-[28rem] p-5 pt-1 bg-white shadow-3d text-black">
        <div className="pr-image-container p-11 pt-5 "><img className="w-[85%] m-auto" src={Headphone} alt="" /></div>
        <span className="shipping-tag text-white p-3 pt-1 pb-1 rounded-full bg-black">Free Shipping</span>
        <h1 className="product-title mt-5 text-24 font-medium">Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
        <p className="product-price discount mt-4 line-through">$799</p>
        <p className="product-price text-48 font-bold">$599</p>
        <p className="offer-detail text-gray-400 text-14">This offer is valid until April 3rd or as long as the stock last</p>
        <div className="cart-btn-container m-3">
            <a href="" className="btn-primary cart-btn p-7 border-b-8 border-blue-700 bg-blue-500 text-white hover:p-8 hover:border-b-0">Add to cart</a>
        </div>
        <div className="stock-detail-container flex flex-row gap-4 m-3 items-center">
            <div className="signal-dot bg-green-400 h-3 w-3 rounded-lg"></div>
            <div className="stock-detail text-left"> 50+ pcs. in stock</div>
        </div>
        <div className="cart-btn-container mb-5">
            <a href="" className="btn-primary card-btn mt-4 mb-4 border-2 p-7 border-gray-300 hover:border-b-8 hover:p-6"> <GiScales size={30} /> <p className='ml-3'>Add to cart</p></a>
            <a href="" className="btn-primary wishlist-btn border-2 p-7 border-gray-300 hover:border-b-8 hover:p-6"> <AiOutlineHeart size={30}/> <p className='ml-3'>Add to wishlist</p> </a></div>
        </div>
        </section>
    );
}
 
export default Product;