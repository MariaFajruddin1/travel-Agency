import React from "react";
import Image from "next/image";
import about from '@/public/images/about.jpg';
import { RiTeamFill } from "react-icons/ri";
import { ImHappy2 } from "react-icons/im";
import { MdTour } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function About() {
    return (
        <>
            <div className="bg-neutral-900 my-10">
                <div className="container lg:flex justify-between py-10 gap-10">
                    <div className="lg:w-[50%]">
                        <Image src={about} alt="about" width={800} height={800} />
                    </div>
                    <div className="place-content-center lg:w-[50%]">
                        <h4 className="text-6xl font-bold lg:pt-0 pt-10">We Always try to give you best service</h4>
                        <p className="text-xl pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam modi aliquam eum maiores. Saepe quasi minus adipisci odio optio.</p>
                        <div className="lg:flex justify-around">
                            <div className="flex items-center gap-4 mt-6 bg-black p-4 lg:w-[40%] w-[100%]">
                                <RiTeamFill className="text-orange-500" size={28} />
                                <div>
                                    <p className="text-2xl font-bold">20+</p>
                                    <p className="text-xl">Years Experience</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6 bg-black p-4 lg:w-[40%] w-[100%]">
                                <ImHappy2 className="text-orange-500" size={27} />
                                <div>
                                    <p className="text-2xl font-bold">20+</p>
                                    <p className="text-xl">Satisfiesd User</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex justify-around">
                            <div className="flex items-center gap-4 mt-4 bg-black p-4 lg:w-[40%] w-[100%]">
                                <MdTour className="text-orange-500" size={33} />
                                <div>
                                    <p className="text-2xl font-bold">20+</p>
                                    <p className="text-xl">Places Visited</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4 bg-black p-4 lg:w-[40%] w-[100%]">
                                <IoLocation className="text-orange-500" size={33} />
                                <div>
                                    <p className="text-2xl font-bold">20+</p>
                                    <p className="text-xl">Travel History</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}