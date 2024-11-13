import { useSwiper } from "swiper/react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import vector from "../assets/images/Group.svg"
import tomato from "../assets/images/tomato.png"
import leaf from "../assets/images/leaf.png"
import mutton from "../assets/images/mutton.png"
import guy from "../assets/images/guy.png"
import guy2 from "../assets/images/guy-2.png"
import girl from "../assets/images/user.png"
import ReactPlayer from "react-player";




const Client = () => {
    const [showPlayer, setShowPlayer] = useState(false);

    const handleChange = () => {
        setShowPlayer(!showPlayer)
    }

    const swiper = useSwiper()
    return (


        <div className="bg-[#FBF7F2] relative w-full lg:min-h-[100vh]">
            <img className="absolute hidden lg:block max-w-44 left-0 top-[15%]" src={tomato} alt="" />
            <img className="absolute hidden lg:block max-w-80 right-0 bottom-[15%]" src={leaf} alt="" />

            <div className="lg:w-[75%] w-[81.25%] py-20 lg:py-40 grid gap-4 grid-cols-1 lg:grid-cols-4 mx-auto">

                <div className="lg:col-span-3">
                    <div className="flex mb-3 flex-row items-center">
                        <span className="bg-red-800 w-3 h-3 inline-block mr-3"></span>
                        <p className="text-xl font-bold text-red-800">Crispy, Every Bite Taste</p>
                    </div>
                    <h2 className="text-6xl font-bold">POPULAR FOOD ITEMS</h2>
                </div>
                <div className="hidden lg:flex items-center py-4 justify-center lg:justify-end gap-8">
                    <button className="swiper-next-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormPrevious className="text-black hover:text-red-800 text-3xl" /></button>
                    <button className="swiper-prev-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormNext className="text-black hover:text-red-800 text-3xl" /></button>
                </div>

                <div className="lg:col-span-4 w-full mt-10 lg:mt-20">

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        className="mySwiper"
                        navigation={{
                            nextEl: '.swiper-next-button',
                            prevEl: '.swiper-prev-button'
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                    >
                        <SwiperSlide>
                            <div className="flex flex-col md:flex-row-reverse w-full">
                            <div style={!showPlayer ? { backgroundImage: `url(${mutton}` } : {}} className="relative h-[50vh] md:h-[570px] w-full md:w-[50%] bg-cover bg-center">
                                    {!showPlayer ? <div>
                                        <button onClick={handleChange} className="bg-yellow-400 rounded-full p-4 absolute left-[45%] hover:opacity-100 hover:scale-125 transition ease-in-out delay-150 top-[45%]"><TbPlayerPlayFilled className="text-2xl" /></button>
                                    </div> : <div>
                                        <button onClick={handleChange} className="bg-yellow-400 rounded-full p-4 absolute left-[45%] opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out delay-150 top-[45%]"><IoClose className="text-2xl" /></button>
                                    </div>}
                                    {showPlayer && (
                                        <div className="video-player w-full h-full">
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                controls={true} // Show play/pause controls
                                                playing={true} // Automatically play when shown
                                                width="100%" // Customize width and height
                                                height="100%"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-[50%] relative bg-yellow-400 md:py-16 md:px-20 px-12 py-9 flex flex-col">
                                    <img className="absolute left-0 bottom-[10%]" src={vector} alt="" />
                                    <div className="mb-10 lg:mb-40 flex flex-row">
                                        <span className="font-bold text-4xl"><RiDoubleQuotesL /></span>
                                        <p className="text-xl leading-9 pt-4">You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                    </div>
                                    <div className="flex flex-row ml-8 ">
                                        <div className="pb-4 border-b-2 grow border-[#0A1425]">
                                            <h3 className="text-lg font-bold">Khalid Al Dawsry</h3>
                                            <p className="text-sm">Jeddah, Saudi</p>
                                        </div>
                                        <div className="avatar pb-4 border-b-4 border-red-800">
                                            <div className="max-w-10 rounded-full">
                                                <img src={guy} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col md:flex-row-reverse w-full">
                            <div style={!showPlayer ? { backgroundImage: `url(${mutton}` } : {}} className="relative h-[50vh] md:h-[570px] w-full md:w-[50%] bg-cover bg-center">
                                    {!showPlayer ? <div>
                                        <button onClick={handleChange} className="bg-yellow-400 rounded-full p-4 absolute left-[45%] hover:opacity-100 hover:scale-125 transition ease-in-out delay-150 top-[45%]"><TbPlayerPlayFilled className="text-2xl" /></button>
                                    </div> : <div>
                                        <button onClick={handleChange} className="bg-yellow-400 rounded-full p-4 absolute left-[45%] opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out delay-150 top-[45%]"><IoClose className="text-2xl" /></button>
                                    </div>}
                                    {showPlayer && (
                                        <div className="video-player w-full h-full">
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                controls={true} // Show play/pause controls
                                                playing={true} // Automatically play when shown
                                                width="100%" // Customize width and height
                                                height="100%"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-[50%] relative bg-yellow-400 md:py-16 md:px-20 px-12 py-9 flex flex-col">
                                    <img className="absolute left-0 bottom-[10%]" src={vector} alt="" />
                                    <div className="mb-10 lg:mb-40 flex flex-row">
                                        <span className="font-bold text-4xl"><RiDoubleQuotesL /></span>
                                        <p className="text-xl leading-9 pt-4">You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                    </div>
                                    <div className="flex flex-row ml-8 ">
                                        <div className="pb-4 border-b-2 grow border-[#0A1425]">
                                            <h3 className="text-lg font-bold">malayka Al chowthy</h3>
                                            <p className="text-sm">Riyad, Saudi</p>
                                        </div>
                                        <div className="avatar pb-4 border-b-4 border-red-800">
                                            <div className="max-w-10 rounded-full">
                                                <img src={girl} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col md:flex-row-reverse w-full">
                            <div style={!showPlayer ? { backgroundImage: `url(${mutton}` } : {}} className="relative h-[50vh] md:h-[570px] w-full md:w-[50%] bg-cover bg-center">
                                    {!showPlayer ? <div>
                                        <button onClick={handleChange} className="bg-yellow-400 rounded-full p-4 absolute left-[45%] hover:opacity-100 hover:scale-125 transition ease-in-out delay-150 top-[45%]"><TbPlayerPlayFilled className="text-2xl" /></button>
                                    </div> : <div>
                                        <button onClick={handleChange} className="bg-yellow-400 rounded-full p-4 absolute left-[45%] opacity-50 hover:opacity-100 hover:scale-125 transition ease-in-out delay-150 top-[45%]"><IoClose className="text-2xl" /></button>
                                    </div>}
                                    {showPlayer && (
                                        <div className="video-player w-full h-full">
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                controls={true} // Show play/pause controls
                                                playing={true} // Automatically play when shown
                                                width="100%" // Customize width and height
                                                height="100%"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-[50%] relative bg-yellow-400 md:py-16 md:px-20 px-12 py-9 flex flex-col">
                                    <img className="absolute left-0 bottom-[10%]" src={vector} alt="" />
                                    <div className="mb-10 lg:mb-40 flex flex-row">
                                        <span className="font-bold text-4xl"><RiDoubleQuotesL /></span>
                                        <p className="text-xl leading-9 pt-4">You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                    </div>
                                    <div className="flex flex-row ml-8 ">
                                        <div className="pb-4 border-b-2 grow border-[#0A1425]">
                                            <h3 className="text-lg font-bold">abdul Al Tisry</h3>
                                            <p className="text-sm">khaybar, Saudi</p>
                                        </div>
                                        <div className="avatar pb-4 border-b-4 border-red-800">
                                            <div className="max-w-10 rounded-full">
                                                <img src={guy2} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="flex lg:hidden items-center py-4 justify-center lg:justify-end gap-8">
                    <button className="swiper-next-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormPrevious className="text-black hover:text-red-800 text-3xl" /></button>
                    <button className="swiper-prev-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormNext className="text-black hover:text-red-800 text-3xl" /></button>
                </div>
            </div>

        </div>
    );
};

export default Client;