'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Client1 from '@/public/images/client1.jpeg';
import Client2 from '@/public/images/client2.jpg';
import Client3 from '@/public/images/client3.jpg';
import Client4 from '@/public/images/client4.jpeg';
import Client5 from '@/public/images/client5.webp';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const testimonialsData = [
    {
        clientName: 'Maria',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!',
        country: 'pakistan',
        active: 1,
        image: Client1
    },
    {
        clientName: 'Maria 2',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!',
        country: 'Turkey',
        active: 2,
        image: Client2
    },
    {
        clientName: 'Maria 3',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!',
        country: 'Pakistan',
        active: 3,
        image: Client3
    },
    {
        clientName: 'Maria 4',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!',
        country: 'Iran',
        active: 4,
        image: Client4
    },
    {
        clientName: 'Maria 5',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!',
        country: 'Palestine',
        active: 5,
        image: Client5
    }
];

const testimonials = [
    {
        id: 1,
        initials: Client1,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!",
        name: "John Doe",
        role: "CEO, ABC Inc.",
    },
    {
        id: 2,
        initials: Client2,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!",
        name: "Winter Doe",
        role: "CTO, XYZ Corp.",
    },
    {
        id: 3,
        initials: Client3,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!",
        name: "John Wick",
        role: "Product Manager, Fake Corp.",
    },
    {
        id: 4,
        initials: Client4,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!",
        name: "John Doe",
        role: "CEO, ABC Inc.",
    },
    {
        id: 5,
        initials: Client5,
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet a sequi harum laborum ea repellendus maiores architecto, sapiente autem, tempore doloremque tenetur commodi corporis iure amet doloribus vitae debitis!",
        name: "Winter Doe",
        role: "CTO, XYZ Corp.",
    },
];


export default function Client() {
    const [active, setActive] = useState(3);

    const handlePrev = () => {
        setActive((prev) => (prev === 1 ? testimonials.length : prev - 1));
    };

    const handleNext = () => {
        setActive((prev) => (prev === testimonials.length ? 1 : prev + 1));
    };
    return (
        <>

            <div className="container py-10">
                <div className="">
                    <h4 className="text-6xl font-bold text-center">Our <span className="highlight">Client's</span> Say about us</h4>
                </div>
                {/* Testimonial Text */}
                <p className="lg:w-[70%] mx-auto text-center pt-10 text-xl md:text-2xl">
                    {testimonials.find((t) => t.id === active)?.content}
                </p>

                <div className="flex gap-2 text-yellow-500 text-xl justify-center pt-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* Name & Role */}
                <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
                    <div className="text-center">
                        <h2 className="text-sm md:text-[18px] font-bold text-white leading-tight">
                            {testimonials.find((t) => t.id === active)?.name}
                        </h2>
                        <small className="text-white text-[16px] truncate">
                            {testimonials.find((t) => t.id === active)?.role}
                        </small>
                    </div>
                </div>

                {/* Selector Buttons */}
                <div className="flex my-4 justify-center items-center overflow-hidden">
                    {testimonials.map((t) => (
                        <Image
                            key={t.id}
                            onClick={() => setActive(t.id)}
                            className={`text-center font-bold shadow-xs rounded-full mx-4 ${active === t.id
                                ? "h-30 w-30 opacity-100 bg-indigo-600 text-white border-7 border-white"
                                : "h-25 w-25 opacity-25 bg-indigo-300 text-white"
                                }`}
                            src={t.initials}
                            alt={t.name}
                        >
                        </Image>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-5 pt-10">
                    <div
                        onClick={handlePrev}
                        className="rounded-full bg-orange-500 text-white font-bold p-2 cursor-pointer"
                    >
                        <IoIosArrowBack size={30} />
                    </div>
                    <div
                        onClick={handleNext}
                        className="rounded-full bg-orange-500 text-white font-bold p-2 cursor-pointer"
                    >
                        <IoIosArrowForward size={30} />
                    </div>
                </div>
            </div>
        </>
    )
}