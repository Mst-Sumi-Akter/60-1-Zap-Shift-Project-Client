import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png'
import serviceIcon from '../../../assets/service.png'
const Works = () => {
    return (
        <div className="w-full flex flex-col gap-16 py-16 ">

            {/* How It Works */}
            <section className="mx-auto w-11/12 max-w-6xl p-6 rounded-2xl">
                <h2 className="text-4xl font-bold mb-6 text-left">How it Works.</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-6 rounded-xl shadow bg-gray-50 text-left">
                        <div className="text-4xl mb-3"><img src={bookingIcon} /></div>
                        <h2 className="font-semibold text-xl mb-2">Booking Pick & Drop</h2>
                        <p className="text-md text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>

                    <div className="p-6 rounded-xl shadow bg-gray-50 text-left">
                        <div className="text-4xl mb-3"><img src={bookingIcon} /></div>
                        <h2 className="font-semibold text-xl mb-2">Cash On Delivery</h2>
                        <p className="text-md text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>

                    <div className="p-6 rounded-xl shadow bg-gray-50 text-left">
                        <div className="text-4xl mb-3"><img src={bookingIcon} /></div>
                        <h2 className="font-semibold text-xl mb-2">Delivery Hub</h2>
                        <p className="text-md text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                      <div className="p-6 rounded-xl shadow bg-gray-50 text-left">
                        <div className="text-4xl mb-3"><img src={bookingIcon} /></div>
                        <h2 className="font-semibold text-xl mb-2">Booking SME & Corporate</h2>
                        <p className="text-md text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="w-full p-15 rounded-3xl bg-[#003b36] text-white text-center">
                <h2 className="text-4xl font-bold mb-2">Our Services</h2>
                <p className="text-md opacity-80 max-w-xl mx-auto mb-10">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl shadow text-gray-800 bg-white">
                        <div className="text-4xl mb-3 text-center"><img src={serviceIcon} className='mx-auto'/></div>
                        <h3 className="font-semibold text-xl mb-2">Express & Standard Delivery</h3>
                        <p className="text-md text-gray-700">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow text-gray-800 bg-lime-300">
                        <div className="text-4xl mb-3 text-center"><img src={serviceIcon} className='mx-auto'/></div>
                        <h3 className="font-semibold text-xl mb-2">Nationwide Delivery</h3>
                        <p className="text-md text-gray-700">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow text-gray-800 bg-white">
                        <div className="text-4xl mb-3 text-center"><img src={serviceIcon} className='mx-auto'/></div>
                        <h3 className="font-semibold text-xl mb-2">Fulfillment Solution</h3>
                        <p className="text-md text-gray-700">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow text-gray-800 bg-white">
                        <div className="text-4xl mb-3 text-center"><img src={serviceIcon} className='mx-auto' /></div>
                        <h3 className="font-semibold text-xl mb-2">Cash on Home Delivery</h3>
                        <p className="text-md text-gray-700">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow text-gray-800 bg-white">
                        <div className="text-4xl mb-3 text-center"><img src={serviceIcon} className='mx-auto'/></div>
                        <h3 className="font-semibold text-xl mb-2">Corporate Service / Contract Logistics</h3>
                        <p className="text-md text-gray-700">Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow text-gray-800 bg-white">
                        <div className="text-4xl mb-3 text-center"><img src={serviceIcon} className='mx-auto' /></div>
                        <h3 className="font-semibold text-xl mb-2">Parcel Return</h3>
                        <p className="text-md text-gray-700">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Works;
