import bellPaper from "../assets/images/bell-paper.png"
import burger from "../assets/images/burger.png"
import market from "../assets/images/market.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FiPhoneCall } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

const About = () => {
    return (
        <div id="about" className="relative py-40 flex w-full min-h-[100vh]">
            <img className="absolute hidden lg:block right-0 bottom-[20%]" src={bellPaper} alt="" />
            <div className="flex flex-col w-[75%] mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="relative lg:w-[50%] my-auto">
                        <img className="absolute top-4" src={market} alt="" />
                        <img className="lg:w-[92%]" src={burger} alt="" />
                    </div>
                    <div className="lg:w-[50%]">
                        <Tabs id="controlled-tabs" selectedTabClassName="bg-red-800 border-b-2 text-white">
                            <TabList className="my-6 flex sm:flex-row sm:items-center ">
                                <Tab className="cursor-pointer px-6 py-1 border-b-2 border-red-800 flex">About</Tab>
                                <Tab className="cursor-pointer px-6 py-1 border-b-2 border-red-800 flex">Experience</Tab>
                                <Tab className="cursor-pointer px-6 py-1 border-b-2 border-red-800 flex">Contact</Tab>
                                <Tab className="disabled flex-grow py-4 border-b-2 border-red-800"></Tab>
                            </TabList>

                            <TabPanel>
                                <div>
                                    <h2 className="font-bold pb-3 text-4xl">Exceptional culinary<br /> experience and delicious food</h2>
                                    <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                </div>
                                <div className="flex flex-row mt-8">
                                    <a href="#" className="text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-white hover:text-yellow-400 border-2 border-yellow-400">about more</a>
                                    <div className="flex flex-row justify-between items-center gap-3 ml-8">
                                        <FiPhoneCall className="text-red-800" />
                                        <p className="font-bold text-lg">+88 3426 739 485</p>

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <h2 className="font-bold pb-3 text-4xl">Professional Experience<br /> in Authentic Saudi Cuisine</h2>
                                    <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                </div>
                                <div className="flex flex-row mt-8">
                                    <a href="#" className="text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-white hover:text-yellow-400 border-2 border-yellow-400">about more</a>
                                    <div className="flex flex-row justify-between items-center gap-3 ml-8">
                                        <FiPhoneCall className="text-red-800" />
                                        <p className="font-bold text-lg">+88 3426 739 485</p>

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <h2 className="font-bold pb-3 text-4xl">Get in Touch<br /> for an excuisite Experience</h2>
                                    <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                                </div>
                                <div className="flex flex-row mt-8">
                                    <a href="#contact" className="text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-white hover:text-yellow-400 border-2 border-yellow-400">contact</a>
                                    <div className="flex flex-row justify-between items-center gap-3 ml-8">
                                        <FiPhoneCall className="text-red-800" />
                                        <p className="font-bold text-lg">+88 3426 739 485</p>

                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel></TabPanel>

                        </Tabs>
                    </div>
                </div>
                <div className="mt-14 flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex flex-row">
                        <div className="flex items-center justify-center w-24 h-24  rounded-full shadow-lg">
                            <BsBoxSeam className=" text-red-800 text-5xl" />
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <h3 className="uppercase text-3xl font-semibold">fast delivery</h3>
                            <p className="text-lg font-light">Within 30 minutes</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex items-center justify-center w-24 h-24  rounded-full shadow-lg">
                            <FaAward className=" text-red-800 text-5xl" />
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <h3 className="uppercase text-3xl font-semibold">absolute dining</h3>
                            <p className="text-lg font-light">Best buffet restaurant</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex items-center justify-center w-24 h-24  rounded-full shadow-lg">
                            <FiShoppingBag className=" text-red-800 text-5xl" />
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <h3 className="uppercase text-3xl font-semibold">pickup delivery</h3>
                            <p className="text-lg font-light">Grab your food order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;