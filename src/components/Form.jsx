import { useEffect, useState } from "react";
import plate from "../assets/images/plate.jpg"
import toast, { Toaster } from "react-hot-toast";
import { LuCalendarDays } from "react-icons/lu";
import { TbTriangle, TbTriangleInverted } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Form = () => {
    const [formData, setFormData] = useState(null)
    const [number, setNumber] = useState('');
    const currentDate = new Date().toISOString().slice(0, 10);
    console.log(currentDate);

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.reservationDate.value;
        const person = e.target.numberOfPeople.value;
        const message = e.target.message.value;

        const personData = { name, email, date, person, message }
        if (date < currentDate) {
            toast.error('come on mate!!! Do you have a time machine or something ?')
            return
        } else if (person < 1) {
            toast.error('If no one is coming why book the damn table ? curses !!!')
            return
        } else if (person > 5) {
            toast.error('sorry !!! we can feed atmost 5 of you hooligans.')
            return
        } else {
            toast.success(`Congrats! your table has been booked, ${name}. We'll be waiting for you and your friends if not a loner. Note: check your email. ${email} is the right one, right ? sent you the menu. If it reaches check the price and bring cash.`)
            return
        }

    }

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
        <div id="form" style={{ backgroundImage: `url(${plate})` }} className="bg-cover bg-center lg:bg-left-top flex w-full min-h-[100vh]">
            <Toaster />
            <div className="w-[81.25%] lg:w-[75%] py-20 mx-auto">
                <div  className="md:w-[50%] flex flex-col">

                    <div className="">
                        <div data-aos="fade-right" className="flex mb-4 flex-row items-center">
                            <span className="bg-red-700 w-3 h-3 inline-block mr-3"></span>
                            <p className="text-xl font-bold text-red-700">Book Now</p>
                        </div>
                        <h2 data-aos="fade-right" data-aos-delay="100" className="text-6xl text-white font-bold">Book Your Table</h2>
                        <p data-aos="fade-right" data-aos-delay="200" className="text-white my-4">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="300" className="">
                        <form onSubmit={handleChange} className="max-w-lg py-4">

                            <div className="grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-2 ">
                                <div className="">

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name*"
                                        className="w-full text-white placeholder-white border bg-transparent border-white p-2"
                                        required
                                    />
                                </div>
                                <div className="">

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full text-white placeholder-white border bg-transparent border-white p-2"
                                        required
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-1 mt-6 gap-6 md:gap-4 md:grid-cols-2">
                                <div className="">

                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="reservationDate"
                                            name="reservationDate"
                                            placeholder="Reservation Date"
                                            className="w-full text-white placeholder-white border bg-transparent border-white p-2  "
                                            onMouseEnter={(e) => e.target.setAttribute('type', 'date')}
                                            onMouseLeave={(e) => e.target.setAttribute('type', 'text')}
                                            required
                                        />
                                        <LuCalendarDays className="text-white pointer-events-none absolute right-3 top-3" />
                                    </div>
                                </div>
                                <div className="">

                                    <div className="relative">
                                        <input
                                            type="number"
                                            id="numberOfPeople"
                                            name="numberOfPeople"
                                            value={number}
                                            onChange={(e) => setNumber(Number(e.target.value))}
                                            min={0}
                                            placeholder="Total People"
                                            className="w-full placeholder-white text-white border bg-transparent border-white p-2"
                                            required
                                        />
                                        <div className="absolute right-3 top-2 flex flex-col">
                                            <button className="bg-transparent"
                                                onClick={() => setNumber(prevValue => prevValue + 1)}
                                                title="Decrease value"
                                                aria-label="Decrease value"><TbTriangle className="text-xs text-white" /></button>
                                            <button className="bg-transparent"
                                                onClick={() => setNumber(prevValue => Math.max(prevValue - 1, 0))}
                                                title="Decrease value"
                                                aria-label="Decrease value"><TbTriangleInverted className="text-xs font-extrabold text-white" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-6">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full placeholder-white text-white border bg-transparent border-white p-2"
                                ></textarea>
                            </div>


                            <div className="mt-8">
                                <button type="submit" className="pt-3 text-lg bg-yellow-400 px-6 py-4 uppercase font-bold hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;