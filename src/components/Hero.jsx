import image from "../assets/images/bg-red.png"
import image2 from "../assets/images/food.png"
import image3 from "../assets/images/Offer.png"
import vector from "../assets/images/vector_star.png"
const Hero = () => {
    return (
        <div id="home" style={{ backgroundImage: `url(${image})` }} className="flex w-full min-h-[100vh]">
            <div className="flex flex-col content-center lg:flex-row w-[81.25%] lg:w-[75%] mx-auto pt-9 pb-20 lg:pt-32 lg:pb-32">
                <div className="flex flex-col grow relative lg:w-[50%]">
                    <div className=" mt-20 lg:w-[133%] lg:bg-[linear-gradient(90deg,_#BD1F1700_0%,_#BD1F17B2_70%)] z-30 ">
                        <h1 className="lg:text-[110px] text-6xl z-50 uppercase text-white">taste the authentic <br />saudi cuisine</h1>
                    </div>
                    <div className="mb-10">
                        <p className="text-white text-lg py-8">Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
                        <a href="#contact" className="pt-3 text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400">explore menu</a>
                    </div>
                </div>
                <div className="lg:w-[50%] grow relative">
                    <img className=" absolute -top-9 -right-7 lg:-right-9" src={vector} alt="" />
                    <img className="lg:max-w-xl" src={image2} alt="" />
                    <img className="absolute bottom-2 right-2 lg:-bottom-5 lg:-right-16" src={image3} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Hero;