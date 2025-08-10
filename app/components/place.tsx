import React from "react";
import Image from "next/image";
import place1 from '@/public/images/place1.webp';
import place2 from '@/public/images/place2.webp';
import place3 from '@/public/images/place3.webp';
import place4 from '@/public/images/place4.webp';
import place5 from '@/public/images/place5.webp';
import place6 from '@/public/images/place6.webp';
import place7 from '@/public/images/place7.webp';
import place8 from '@/public/images/place8.webp';
import place9 from '@/public/images/place9.avif';
import { IoLocationSharp } from "react-icons/io5";

const placesList = [
    {
        name: 'Bahamas',
        place: 'Pink Sands Beach',
        image: place1
    },
    {
        name: 'Indonesia',
        place: 'Raja Ampat',
        image: place2
    },
    {
        name: 'Australia',
        place: 'Queensland',
        image: place3
    },
    {
        name: 'China',
        place: 'Zhangye National Geopark',
        image: place4
    },
    {
        name: 'Turkey',
        place: 'Cappadocia',
        image: place5
    },
    // {
    //     name: 'Ireland',
    //     place: 'Cliffs of Moher',
    //     image: place6
    // },
    // {
    //     name: 'Australia',
    //     place: 'Shark Bay',
    //     image: place7
    // },
    // {
    //     name: 'Portugal',
    //     place: 'Algarve',
    //     image: place8
    // },
    {
        name: 'Paris',
        place: 'Eiffel Tower',
        image: place9
    }
]

export default function Place() {
    return (
        <>
            <div className="container">
                <h4 className="text-6xl font-bold text-center pt-20">Explore Our Popular <span className="highlight">Places</span></h4>
                <div className="flex flex-wrap -mx-2 mt-8">
                    {Array.from({ length: 3 }).map((_, colIndex) => (
                        <div key={colIndex} className="w-full md:w-1/3 px-2">
                            {placesList
                                .filter((_, index) => index % 3 === colIndex)
                                .map((items, i) => (
                                    <div key={i} className="mb-4">
                                        <div className="relative group">
                                            <Image
                                                src={items.image}
                                                alt={items.name}
                                                width={400}
                                                height={400}
                                                className="w-full h-auto rounded-xl"
                                            />
                                            <div className="absolute top-0 m-5">
                                                <div className="text-black text-center bg-white rounded-3xl px-4 py-2 flex items-center gap-2">
                                                    <IoLocationSharp size={20} className="text-orange-500" />
                                                    <p>{items.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}