'use client'
import React, { useState } from "react";
import Image from "next/image";
import place6 from '@/public/images/place6.webp';
import place7 from '@/public/images/place7.webp';
import place8 from '@/public/images/place8.webp';
import { FaRegHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const packageList = [
    {
        name: 'Ireland',
        place: 'Cliffs of Moher',
        image: place6
    },
    {
        name: 'Australia',
        place: 'Shark Bay',
        image: place7
    },
    {
        name: 'Portugal',
        place: 'Algarve',
        image: place8
    },
]

export default function Package() {
    const [Select, setSelect] = useState('hotDeal');
    return (
        <>
            <div className="container py-10">
                <h1 className="text-6xl font-bold text-center">Our Best <span className="highlight">Packages</span> For You</h1>
                {/* category tab section */}
                <div className="flex gap-10 mt-10 overflow-hidden w-full">
                    <p onClick={() => setSelect('hotDeal')} className={Select === 'hotDeal' ? 'px-10 py-3 rounded-2xl bg-orange-500 text-xl cursor-pointer' : 'px-10 py-3 rounded-2xl bg-neutral-900 text-xl cursor-pointer'}>Hot Deals</p>
                    <p onClick={() => setSelect('honeymoon')} className={Select === 'honeymoon' ? 'px-10 py-3 rounded-2xl bg-orange-500 text-xl cursor-pointer' : 'px-10 py-3 rounded-2xl bg-neutral-900 text-xl cursor-pointer'}>Honeymoon</p>
                    <p onClick={() => setSelect('backpack')} className={Select === 'backpack' ? 'px-10 py-3 rounded-2xl bg-orange-500 text-xl cursor-pointer' : 'px-10 py-3 rounded-2xl bg-neutral-900 text-xl cursor-pointer'}>Backpack</p>
                    <p onClick={() => setSelect('south')} className={Select === 'south' ? 'px-10 py-3 rounded-2xl bg-orange-500 text-xl cursor-pointer' : 'px-10 py-3 rounded-2xl bg-neutral-900 text-xl cursor-pointer'}>South Asia</p>
                    <p onClick={() => setSelect('europe')} className={Select === 'europe' ? 'px-10 py-3 rounded-2xl bg-orange-500 text-xl cursor-pointer' : 'px-10 py-3 rounded-2xl bg-neutral-900 text-xl cursor-pointer'}>Europe</p>
                    <p onClick={() => setSelect('more')} className={Select === 'more' ? 'px-10 py-3 rounded-2xl bg-orange-500 text-xl cursor-pointer' : 'px-10 py-3 rounded-2xl bg-neutral-900 text-xl cursor-pointer'}>More</p>
                </div>
                {/* packages images section */}
                <div className="flex flex-wrap -mx-2 mt-12">
                    {Array.from({ length: 3 }).map((_, colIndex) => (
                        <div key={colIndex} className="w-full md:w-1/3 px-2">
                            {packageList
                                .filter((_, index) => index % 3 === colIndex)
                                .map((items, i) => (
                                    <div key={i} className="mb-4">
                                        {/* Make whole card a group */}
                                        <div className="relative group">
                                            <Image
                                                src={items.image}
                                                alt={items.name}
                                                width={400}
                                                height={400}
                                                className="w-full h-auto rounded-xl"
                                            />

                                            {/* heart icon section */}
                                            <div className="absolute top-0 m-5">
                                                <div className="cursor-pointer text-black text-center bg-white rounded-3xl w-10 h-10 p-2">
                                                    <FaRegHeart size={25} />
                                                </div>
                                            </div>

                                            {/* info text section */}
                                            <div className="absolute bottom-0 w-full bg-neutral-900 group-hover:bg-orange-500 text-white p-4 transition-colors duration-300">
                                                <div className="lg:flex items-center justify-between">
                                                    <div className="flex gap-1 items-center">
                                                        <GoDotFill size={20} className="text-red-700" />
                                                        <p className="text-md text-end">5 Days, 4 Nights</p>
                                                    </div>
                                                    <p className="text-md">$500/Person</p>
                                                </div>
                                                <h4 className="text-2xl font-bold pt-2">
                                                    Explore the Beauty of {items.place}
                                                </h4>
                                                <div className="lg:flex items-center justify-between">
                                                    <div className="flex items-center text-xl gap-2 pt-4">
                                                        <IoLocationSharp />
                                                        <p>{items.name}</p>
                                                    </div>
                                                    <p className="text-lg underline underline-offset-4">Explore More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>


                <div className="text-xl bg-orange-500 hover:bg-orange-600 cursor-pointer w-50 text-center px-4 p-3 rounded-2xl mx-auto">Discover More</div>
            </div>
        </>
    )
}