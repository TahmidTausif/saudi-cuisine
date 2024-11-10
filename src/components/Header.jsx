import logo from "../assets/images/Group.png"
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <div className="fixed z-10 top-0 bg-transparent w-full">
            <div className="navbar z-10 bg-transparent sticky max-w-[1280px] mx-auto">
                <div className="navbar-start w-full">

                    <a className="btn btn-ghost text-white text-4xl"><img src={logo} alt="" />Restaurent</a>
                    <div className="hidden pl-10 lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className="text-white font-light">Home</a></li>
                            <li><a className="text-white font-light">About</a></li>
                            <li><a className="text-white font-light">Portfolio</a></li>
                            <li><a className="text-white font-light">Client</a></li>
                            <li><a className="text-white font-light">Blog</a></li>
                            <li><a className="text-white font-light">Contact</a></li>
                            
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
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                            <li><a className="btn">Button</a></li>
                        </ul>

                    </div>
                    <button className="text-lg hidden lg:block bg-yellow-400 px-6 py-2 uppercase font-bold">Book a Table</button>
                </div>
            </div>
        </div>
    );
};

export default Header;