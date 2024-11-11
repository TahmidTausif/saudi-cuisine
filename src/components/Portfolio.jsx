import { useSwiper } from "swiper/react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import burger from "../assets/images/burger-pic.png"
import pizza from "../assets/images/pizza.png"
import fries from "../assets/images/french-fries.png"
import shrimp from "../assets/images/fried-shrimp.png"
import yellow from "../assets/images/yellow-capsicum.png"


const Portfolio = () => {

    const swiper = useSwiper()
    return (
        <div className="bg-[#FBF7F2] relative w-full lg:min-h-[100vh]">
            <img className="absolute max-w-44 hidden lg:block left-0 bottom-[25%]" src={yellow} alt="" />
            <div className="lg:w-[75%] w-[81.25%] py-20 lg:py-40 grid gap-4 grid-cols-1 lg:grid-cols-4 mx-auto">

                <div className="lg:col-span-3">
                    <div className="flex mb-3 flex-row items-center">
                        <span className="bg-red-800 w-3 h-3 inline-block mr-3"></span>
                        <p className="text-xl font-bold text-red-800">Crispy, Every Bite Taste</p>
                    </div>
                    <h2 className="text-6xl font-bold">POPULAR FOOD ITEMS</h2>
                </div>
                <div className="hidden lg:flex items-center py-4 justify-center lg:justify-end gap-8">
                    <button className="swiper-next-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormPrevious className="text-black active:text-red-800 text-3xl" /></button>
                    <button className="swiper-prev-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormNext className="text-black active:text-red-800 text-3xl" /></button>
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
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >



                        <SwiperSlide>
                            <div className="bg-white h-[300px] pt-8 flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={burger} alt="" />
                                <span className="bg-red-800 w-14 mb-4 h-1 inline-block"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white pt-8 h-[300px] flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={pizza} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white pt-8 h-[300px] flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={fries} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white pt-8 h-[300px] flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={shrimp} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white pt-8 h-[300px] flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={burger} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white pt-8 h-[300px] flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={pizza} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[300px] pt-8 bg-white flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={fries} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white pt-8 h-[300px] flex flex-col items-center">
                                <img className="min-h-[110px] mb-4" src={shrimp} alt="" />
                                <span className="bg-red-800 mb-4 w-14 h-1"></span>
                                <h3 className="font-bold text-2xl">vegetables burger</h3>
                                <p className="font-normal text-base">Barbecue Italian cuisine pizza</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="flex lg:hidden items-center py-4 justify-center lg:justify-end gap-8">
                    <button className="swiper-next-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormPrevious className="text-black active:text-red-800 text-3xl" /></button>
                    <button className="swiper-prev-button p-4 rounded-full shadow-[0_0_13.64px_0_rgba(0,0,0,0.1)]"><GrFormNext className="text-black active:text-red-800 text-3xl" /></button>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;