import {HiOutlineSun} from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
    return (  
        <nav className="flex items-center mb-8">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2 text-white">Tailwind Learn</div>
                <HiOutlineSun size={"21px"} color="#e9c46a" className="cursor-pointer"/>
            </div>
            <ul className="ml-auto text-16 font-semibold">
                <HiOutlineMenu size="24px" color="white" />
            </ul>
        </nav>
    );
}
 
export default Navbar;