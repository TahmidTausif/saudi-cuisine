import image from "../assets/images/bg-red.png"
import image2 from "../assets/images/food.png"
import image3 from "../assets/images/Offer.png"
import vector from "../assets/images/vector_star.png"
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="flex w-full min-h-[100vh]">
            <div className="flex lg:flex-row w-[81.25%] mx-auto pt-32 pb-32">
                <div className="flex flex-col grow relative w-[50%]">
                    <div className=" mt-10 lg:w-[140%] bg-[linear-gradient(90deg,_#BD1F1700_0%,_#BD1F17B2_70%)] z-50 ">
                        <h1 className="text-[120px] z-50 uppercase text-white">taste the authentic <br />saudi cuisine</h1>
                    </div>
                    <div>
                        <p className="text-white text-2xl py-8">Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
                        <button className="text-lg bg-yellow-400 px-6 py-4 uppercase font-bold">explore menu</button>
                    </div>
                </div>
                <div className="w-[50%] grow relative">
                    <img className=" absolute -top-8 -right-8" src={vector} alt="" />
                    <img className="w-full h-full" src={image2} alt="" />
                    <img className="absolute -bottom-4 -right-16" src={image3} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Hero;