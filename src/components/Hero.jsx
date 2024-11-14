import { useEffect } from "react";
import image from "../assets/images/bg-red.png"
import image2 from "../assets/images/food.png"
import image3 from "../assets/images/Offer.png"
import vector from "../assets/images/vector_star.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {

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
        <div id="home" style={{ backgroundImage: `url(${image})` }} className="flex w-full min-h-[100vh]">
            <div className="flex flex-col content-center lg:flex-row w-[81.25%] lg:w-[75%] mx-auto pt-9 pb-20 lg:pt-32 lg:pb-32">
                <div className="flex flex-col grow relative lg:w-[50%]">
                    <div data-aos="fade-right" className=" mt-20 py-4 lg:w-[133%] lg:bg-[linear-gradient(90deg,_#BD1F1700_0%,_#BD1F17B2_70%)] z-30 ">
                        <h1 className="lg:text-[110px] text-6xl z-50 uppercase text-white">taste the authentic <br />saudi cuisine</h1>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="200" className="mb-10">
                        <p className="text-white 2xl:text-2xl text-lg py-8">Among the best Saudi chefs in the world, serving<br /> you something beyond flavor.</p>
                        <a href="#portfolio" className="pt-3 text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400">explore menu</a>
                    </div>
                </div>
                <div className="lg:w-[50%] grow">
                    <div data-aos="fade-left" className="relative">
                        <img className=" absolute -top-9 -right-7 lg:-right-9" src={vector} alt="" />
                        <img className="lg:max-w-full" src={image2} alt="" />
                        <img className="absolute bottom-2 right-2 lg:-bottom-5 lg:-right-16" src={image3} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;