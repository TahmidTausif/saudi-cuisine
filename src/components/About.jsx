import bellPaper from "../assets/images/bell-paper.png"
import burger from "../assets/images/burger.png"
import market from "../assets/images/market.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
    return (
        <div id="#about" className="relative flex w-full min-h-[100vh]">
            <img className="absolute hidden lg:block right-0 bottom-[20%]" src={bellPaper} alt="" />
            <div className="flex flex-col w-[75%] mx-auto mt-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="relative w-[50%] my-auto">
                        <img className="absolute top-4" src={market} alt="" />
                        <img className="w-[92%]" src={burger} alt="" />
                    </div>
                    <div className="w-[50%]">
                        <Tabs id="controlled-tabs" selectedTabClassName="bg-red-800 border-b-2 text-white">
                            <TabList className="my-6 flex sm:flex-row sm:items-center ">
                                <Tab className="cursor-pointer px-6  border-b-2 border-red-800 flex">About</Tab>
                                <Tab className="cursor-pointer px-6  border-b-2 border-red-800 flex">Experience</Tab>
                                <Tab className="cursor-pointer px-6  border-b-2 border-red-800 flex">Contact</Tab>
                                <Tab className="disabled flex-grow py-3 border-b-2 border-red-800"></Tab>
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
                                    <h2 className="font-bold pb-3 text-4xl">Professional Experience<br/> in Authentic Saudi Cuisine</h2>
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
                                    <h2 className="font-bold pb-3 text-4xl">Get in Touch<br/> for an excuisite Experience</h2>
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
                           
                        </Tabs>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default About;