import React from "react";
import Image from "next/image";
import about from '@/public/images/about.jpeg'

export default function About() {
    return (
        <>
            <div className="container">
                <div>
                    <Image src={about} alt="about" width={400} height={400}/>
                </div>
                <div></div>
            </div>
        </>
    )
}