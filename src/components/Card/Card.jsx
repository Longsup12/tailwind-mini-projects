import Cards from "../../assets/image.jpg";
const Card = () => {
    return ( 
        // .container{
        //     .image-container{
        //     img
        //     }
        //     .title-container{span}
        //     .description-container{span}
        //     input.email-input{label}
        //     a.btn.subcribe-btn{}
        //     }
        <div className="card-container text-center p-2 bg-zinc-800 rounded-[1rem]">
            <div className="image-container h-[350px]">
                <img className="rounded-[1rem] w-full h-full object-fill" src={Cards} alt="" />
            </div>
            <div className="title-container mt-1 p-3">
                <span className="text-white text-20">Get diet and fitness tips in your inbox</span>
            </div>
            <div className="description-container mb-6">
                <p className="text-white">Eat better and exercise better. Signup for the Diet&Fitness newsletter.</p>
            </div>
            <div className="email-container mb-4">
            <input type="text" id="fname" name="email" placeholder="Enter your email address" className="w-10/12 bg-transparent border border-white border-opacity-10 h-11 placeholder:text-center"/>
            </div>
            <div className="subcribe-container mb-5"><a href="" className="subcribe-btn flex bg-[#84cc16]  w-10/12 m-[auto] h-10 rounded-md justify-center items-center"> Subcribe</a></div>
            
        </div>
        
     );
}
 
export default Card;