import { useState } from "react";
import logo from "../assets/images/Group.png"
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const [navbar, setNavbar] = useState(false);


    const bgChange = () => {
        if(scrollY >= 60){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', bgChange )


    return (
        <div className={navbar ?"fixed z-50 top-0 py-3 bg-red-800 w-full delay-75" : "fixed z-10 top-0 bg-transparent w-full"}>
            <div className={navbar ? "navbar z-50 bg-red-800 sticky max-w-[75%] mx-auto delay-75" : "navbar z-10 bg-transparent sticky max-w-[75%] mx-auto"}>
                <div className="navbar-start w-full">

                    <a className="btn btn-ghost text-white text-4xl"><img src={logo} alt="" />Restaurent</a>
                    <div className="hidden pl-10 lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="#home" className="text-white font-light">Home</a></li>
                            <li><a href="#about" className="text-white font-light">About</a></li>
                            <li><a href="#portfolio" className="text-white font-light">Portfolio</a></li>
                            <li><a href="#client" className="text-white font-light">Client</a></li>
                            <li><a href="#blog" className="text-white font-light">Blog</a></li>
                            <li><a href="#contact" className="text-white font-light">Contact</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="navbar-end w-[20%]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                           <IoMenu className="text-white text-4xl"></IoMenu>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#home" className="text-white font-light">Home</a></li>
                            <li><a href="#about" className="text-white font-light">About</a></li>
                            <li><a href="#portfolio" className="text-white font-light">Portfolio</a></li>
                            <li><a href="#client" className="text-white font-light">Client</a></li>
                            <li><a href="#blog" className="text-white font-light">Blog</a></li>
                            <li><a href="#contact" className="text-white font-light">Contact</a></li>
                            <li><a href="#contact" className="pt-3 text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-white hover:text-yellow-400 border-2 border-yellow-400">Book a Table</a></li>
                        </ul>

                    </div>
                    <a href="#contact" className="pt-3 text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-red-800 hover:text-yellow-400 border-2 border-yellow-400">Book a Table</a>
                </div>
            </div>
        </div>
    );
};

export default Header;