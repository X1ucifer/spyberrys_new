import React from 'react'
import { useEffect, useState } from 'react';


function ResponsiveContainer({ children }) {

    const [browserWidth, setBrowserWidth] = useState(0);


    useEffect(() => {
        function handleResize() {
            setBrowserWidth(window.innerWidth);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log("jj", browserWidth)

    return (
        <>
            {browserWidth > 1800 ? (
                <div className='container mx-auto px-4'>
                    {children}
                </div>
            ) : (
                <div>
                    {children}
                </div>

            )}
        </>

    )
}

export default ResponsiveContainer