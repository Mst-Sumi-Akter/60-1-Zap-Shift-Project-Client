import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import { FaArrowCircleUp } from "react-icons/fa";

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            
            {/* Slide 1 */}
            <div className="relative">
                <img src={banner1} className="w-full block" />

                <p className="absolute top-[79%] left-[37%] -translate-x-1/2 text-black w-3/5 text-left">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
                    <br />
                    packages to business shipments — we deliver on time, every time.
                    <br />

                    {/* Buttons + Arrow Here */}
                    <div className="flex items-center gap-3 mt-3">
                        <button className='p-2 rounded-full text-secondary bg-primary shadow'>
                            Track Your Parcel
                        </button>

                        <FaArrowCircleUp className="text-2xl text-black" />

                        <button className='p-2 bg-white shadow rounded-xl text-secondary'>
                            Be A Rider
                        </button>
                    </div>
                </p>
            </div>

            {/* Slide 2 */}
            <div className="relative">
                <img src={banner2} />

                <p className="absolute top-[78%] left-[37%] -translate-x-1/2 text-black w-3/5 text-left">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    <br />
                    From personal packages to business shipments — we deliver on time, every time.
                    <br />

                    {/* Buttons + Arrow Here */}
                    <div className="flex items-center gap-3 mt-3">
                        <button className='p-2 rounded-full text-secondary bg-primary shadow'>
                            Track Your Parcel
                        </button>

                        <FaArrowCircleUp className="text-2xl text-black" />

                        <button className='p-2 bg-white shadow rounded-xl text-secondary'>
                            Be A Rider
                        </button>
                    </div>
                </p>
            </div>

            {/* Slide 3 */}
            <div className="relative">
                <img src={banner3} />

                <p className="absolute top-[75%] left-[37%] -translate-x-1/2 text-black w-3/5 text-left">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    <br />
                    From personal packages to business shipments — we deliver on time, every time.
                    <br />

                    {/* Buttons + Arrow Here */}
                    <div className="flex items-center gap-3 mt-3">
                        <button className='p-2 rounded-full text-secondary bg-primary shadow'>
                            Track Your Parcel
                        </button>

                        <FaArrowCircleUp className="text-2xl text-black" />

                        <button className='p-2 bg-white shadow rounded-xl text-secondary'>
                            Be A Rider
                        </button>
                    </div>
                </p>
            </div>

        </Carousel>
    );
};

export default Banner;
