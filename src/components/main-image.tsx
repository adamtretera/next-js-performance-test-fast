import React, { useState, useEffect } from 'react';
import Image from "next/image";

export const MainImage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageLoaded(true);
        }, 2000); // Delay to simulate image load

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={"bg-blue-900 rounded px-4 container m-auto my-4"} style={{ width: '100%', textAlign: 'center' }}>
            <Image alt={"main image"}  src={imageLoaded ? "https://via.placeholder.com/600x400": ""} width={600} height={400} />
        </div>
    );
};

