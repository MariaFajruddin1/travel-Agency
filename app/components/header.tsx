'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaPlaneDeparture } from "react-icons/fa";
import Man from '@/public/images/man2.png';
import Plane from '@/public/images/plane.png';

const menuList = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'About Us',
        link: '/'
    },
    {
        name: 'Services',
        link: '/'
    },
    {
        name: 'Portfolio',
        link: '/'
    },
    {
        name: 'Testimonials',
        link: '/'
    },
    {
        name: 'News',
        link: '/'
    }
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="container pt-10">
                {/* Navbar */}
                <div className="flex justify-between items-center">
                    <div className="uppercase">
                        <p className="text-lg flex items-center gap-2">Travel <FaPlaneDeparture size={30} className="text-orange-500" /></p>
                        <h4 className="text-4xl font-bold">Agency</h4>
                    </div>
                    <div
                        className="cursor-pointer transition-transform duration-300 hover:scale-110"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="transition-all duration-300 ease-in-out">
                            {menuOpen ? (
                                <CgClose
                                    size={50}
                                    className="transition-transform duration-300 rotate-90"
                                />
                            ) : (
                                <CgMenuRight
                                    size={50}
                                    className="transition-transform duration-300 rotate-0"
                                />
                            )}
                        </div>
                    </div>
                    {/* Animated Menu Box */}
                    <div
                        className={`absolute right-4 top-25 w-56 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 p-5 flex flex-col gap-4 uppercase text-center transition-all duration-300 origin-top ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                            }`}
                        style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}
                    >
                        {menuList.map((items) => (
                            <Link
                                key={items.name}
                                href={items.link}
                                className="hover:text-orange-500 transition-colors uppercase"
                                onClick={() => setMenuOpen(false)}
                            >
                                {items.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* header */}
                <div className="lg:flex justify-between place-items-center">
                    <div className="lg:w-[50%]">
                        <h1 className="text-8xl font-bold">Plan <span className="highlight">Your Trip</span> Book with Us</h1>
                        <p className="text-lg pt-5 w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit corrupti est debitis nam sint adipisci natus. Vitae voluptates consequuntur quia?</p>
                        <button className="mt-7 bg-orange-500 text-lg px-5 py-2.5 rounded-xl hover:bg-orange-600 cursor-pointer">Discover More</button>
                    </div>
                    <div className="bg-[url('/images/map.png')] h-150 bg-no-repeat bg-contain lg:w-[50%]">
                        <Image src={Plane} alt="man" width={200} height={200} className="absolute top-80 left-[44%]" />
                        <Image src={Man} alt="man" width={600} height={600} className="mx-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}