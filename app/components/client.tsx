import React from "react";
import { FaStar } from "react-icons/fa";

export default function Client() {
    return (
        <>
            <div className="container">
                <div>
                    <h4>Our Client's Say about us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio quasi laudantium, maiores est, perspiciatis totam explicabo id at ut voluptate quis quod quibusdam rem, tenetur eos magni similique repellendus?</p>
                    <div className="flex gap-2 text-yellow-500 text-xl">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <p>Ricky Marget</p>
                    <p>Switzarland</p>
                </div>
            </div>
        </>
    )
}