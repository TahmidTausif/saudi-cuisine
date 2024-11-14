import restaurent from "../assets/images/restaurent.jpg"
import { WiTime4 } from "react-icons/wi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 100,
                duration: 1500,
                easing: 'ease-out-quint',
                delay: 20,
              }
        );
      }, [])
    return (
        <div id="contact" style={{ backgroundImage: `url(${restaurent})` }} className="bg-cover bg-center relative lg:min-h-[100vh]">
            <div className="absolute bg-black inset-0 h-full w-full brightness-[.25] bg-opacity-65"></div>
            <div className="flex flex-col relative py-20 lg:pt-36 lg:w-[75%] w-[81.25%] mx-auto z-10 ">
                <div data-aos="fade-up" className="mx-auto">
                    <h1 className="font-bold text-center text-5xl text-white">We ready to have you the best dining experiences</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="mt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col text-center justify-center items-center">
                        <WiTime4 className="text-3xl mb-4 text-yellow-400 font-bold" />
                        <h3 className="font-bold text-2xl mb-2 text-white">Opening hours</h3>
                        <p className=" text-white">Monday - Sunday<br />
                            9:00 AM to 11:30 PM</p>
                    </div>
                    <div className="flex flex-col text-center justify-center items-center">
                        <FiPhoneCall className="text-3xl mb-4 text-yellow-400 font-bold" />
                        <h3 className="font-bold text-2xl mb-2 text-white">LET'S TALK</h3>
                        <p className=" text-white">Phone: 1-800-222-4545<br />Fax: 1-800-222-4545</p>
                    </div>
                    <div className="flex flex-col text-center justify-center items-center">
                        <FiMail className="text-3xl mb-4 text-yellow-400 font-bold" />
                        <h3 className="font-bold text-2xl mb-2 text-white">BOOK A TABLE</h3>
                        <p className=" text-white">Email: demo@website.com<br />
                            Support: support@website.com</p>
                    </div>
                    <div className="flex flex-col text-center justify-center items-center">
                        <FiMapPin className="text-3xl mb-4 text-yellow-400 font-bold" />
                        <h3 className="font-bold text-2xl mb-2 text-white">Our Address</h3>
                        <p className=" text-white">123 Stree New York City,<br /> United States Of America.</p>
                    </div>
                </div>
                <div className="w-full mt-20">
                    <div data-aos="fade-up" data-aos-delay="300" className="lg:w-[50%]  mx-auto">
                        <div className="grid grid-cols-4 gap-4 pb-5 place-self-center justify-center">
                            <a className="rounded-full bg-transparent border-white border-2 p-4">
                                <FaFacebook className="text-white text-2xl" />
                            </a>
                            <a className="rounded-full bg-transparent border-white border-2 p-4">
                                <FaSquareXTwitter className="text-white text-2xl" />
                            </a>
                            <a className="rounded-full bg-transparent border-white border-2 p-4">
                                <FaInstagramSquare className="text-white text-2xl" />
                            </a>
                            <a className="rounded-full bg-transparent border-white border-2 p-4">
                                <FaLinkedin className="text-white text-2xl" />
                            </a>
                        </div>
                        <p className="text-white text-center">{new Date().getFullYear()} All right reserved</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;