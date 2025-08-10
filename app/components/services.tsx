import React from "react";
import { LuTicketSlash } from "react-icons/lu";
import { FaHotel } from "react-icons/fa6";
import { MdTour } from "react-icons/md";

export default function Services() {
    return (
        <>
            <div className="container">
                <h4 className="text-6xl font-bold text-center pt-15">Our <span className="highlight">Service</span></h4>
                <div className="lg:flex flex-wrap lg:justify-between justify-center">
                    <div className="group bg-neutral-900 rounded-2xl hover:bg-orange-500 cursor-pointer text-white lg:w-[30%] p-6 transition-colors duration-300 mt-15">
                        <LuTicketSlash size={40} className="text-orange-500 group-hover:text-white" />
                        <h4 className="text-3xl font-bold pt-3">Ticket Booking</h4>
                        <p className="text-lg pt-2">
                            You can easily Book your according to your budget hotel by our website.
                        </p>
                    </div>
                    <div className="group bg-neutral-900 rounded-2xl hover:bg-orange-500 cursor-pointer text-white lg:w-[30%] p-6 transition-colors duration-300 mt-15">
                        <FaHotel size={40} className="text-orange-500 group-hover:text-white" />
                        <h4 className="text-3xl font-bold pt-3">Hotel Booking</h4>
                        <p className="text-lg pt-2">We Book all kind of national or international ticket for your destination.</p>
                    </div>
                    <div className="group bg-neutral-900 rounded-2xl hover:bg-orange-500 cursor-pointer text-white lg:w-[30%] p-6 transition-colors duration-300 mt-15">
                        <MdTour size={40} className="text-orange-500 group-hover:text-white" />
                        <h4 className="text-3xl font-bold pt-3">Tour Plan</h4>
                        <p className="text-lg pt-2">We provide you the best plan within a short time explore more.</p>
                    </div>
                </div>
            </div>
        </>
    )
}