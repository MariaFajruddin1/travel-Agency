import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="bg-neutral-900">
                <div className="container flex flex-wrap gap-4 justify-between py-15 border-b-2">
                    <div className="space-y-2">
                        <div className="uppercase pb-2">
                            <p className="text-lg flex items-center gap-2">Travel <FaPlaneDeparture size={30} className="text-orange-500" /></p>
                            <h4 className="text-4xl font-bold">Agency</h4>
                        </div>
                        <p className="text-lg pb-2">+0123456789</p>
                        <p className="text-lg pb-2">contact@travelagency.com</p>
                        <p className="text-lg pb-2">Lahore, Pakistan</p>
                    </div>
                    <div>
                        <h4 className="text-2xl pb-3 text-orange-500">Company</h4>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Blog</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">How it works</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Career</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Review</p>
                    </div>
                    <div>
                        <h4 className="text-2xl pb-3 text-orange-500">About Us</h4>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Who we are?</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Feature</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">News Letter</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Career</p>
                    </div>
                    <div>
                        <h4 className="text-2xl pb-3 text-orange-500">Service</h4>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Flight</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Make Tour Plan</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Arrange Tour</p>
                        <p className="text-lg pb-2 hover:underline hover:underline-offset-4 cursor-pointer">Bookng Hotel</p>
                    </div>
                    <div>
                        <h4 className="text-2xl pb-3 text-orange-500">Follow Us</h4>
                        <div className="flex gap-4 text-2xl">
                            <PiInstagramLogoFill/>
                            <FaFacebook/>
                            <BsYoutube/>
                            <FaLinkedin/>
                        </div>
                    </div>
                </div>
                <div className="container py-8 lg:flex lg:justify-between justify-center text-center text-xl">
                    <p>Travel Agency Landing Page Templete by Maria</p>
                    <p>copyright © 2025. All rights reserved</p>
                </div>
            </div>
        </>
    )
}