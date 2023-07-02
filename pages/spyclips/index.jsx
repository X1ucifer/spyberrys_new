import React, { useState, useEffect, useRef } from "react";
import ClipsPlayer from "../../components/spyclips/ClipsPlayer";
import videosData from "../../dummyData/videos.json"; // Import the JSON data

const Spyclips = () => {
    const containerRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                const { target } = entry;
                const video = target.querySelector("video");

                if (entry.isIntersecting) {
                    video.play();
                    video.classList.add("visible");
                } else {
                    video.pause();
                    video.classList.remove("visible");
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
        const videos = Array.from(container.querySelectorAll(".spyclip-video"));

        videos.forEach((video) => {
            observerRef.current.observe(video);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="">
            <div className="spyclip-container overflow-x-auto snap-type-mandatory" ref={containerRef}>
                {videosData.map((video) => (
                    <div key={video.id} className="spyclip-video flex flex-col justify-center items-center w-full  snap-align-start scroll-snap-align-start mb-[20px] relative ">
                        <video src={video.url} controls className="w-[400px] h-[100vh] object-cover" />
                        <div className="absolute bottom-0  w-[400px] bg-black bg-opacity-40 py-2 px-4 text-white">
                            <h3 className="text-lg font-medium mb-2">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Spyclips;