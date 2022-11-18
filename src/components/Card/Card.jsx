import Cards from "../../assets/image.jpg";
const Card = () => {
    return ( 
        <div className="card-container box-container bg-zinc-800  md:max-w-2xl md:flex md:m-[auto] md:w-2/4 md:text-left">
            <div className="image-container h-[350px] md:h-auto">
                <img className="w-full h-full rounded-[1rem] object-fill md:max-w-xs md:max-h-80" src={Cards} alt="" />
            </div>
            <div className="content-container md:pl-[2vw]">
            <div className="title-container mt-1 p-3 md:p-0">
                <span className="text-white text-20 md:text-[clamp(1vw,2.1vw,20px);]">Get diet and fitness tips in your inbox</span>
            </div>
            <div className="description-container mb-6 md:mb-[1vw]">
                <p className="text-white md:text-[clamp(10px,1vw,13px)]">Eat better and exercise better. Signup for the Diet&Fitness newsletter.</p>
            </div>
            <div className="submit-container">
            <div className="email-container mb-4">
            <input type="text" id="fname" name="email" placeholder="Enter your email address" className="w-10/12 h-11 bg-transparent border border-white border-opacity-10 placeholder:text-center placeholder:text-[clamp(10px,12px,18px)]"/>
            </div>
            <div className="subcribe-container mb-5"><a href="" className="subcribe-btn btn-primary w-10/12 bg-[#84cc16] md:m-0"> Subcribe</a></div>
            </div>
            </div>
        </div>
        
     );
}
 
export default Card;