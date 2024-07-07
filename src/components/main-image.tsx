import React, { useState, useEffect } from 'react';

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
            {imageLoaded ? (
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="Loaded content"
                    style={{ width: '600px', height: '400px' }}
                />
            ) : (
                <div style={{ height: '20px' }}>Loading...</div>
            )}
        </div>
    );
};

