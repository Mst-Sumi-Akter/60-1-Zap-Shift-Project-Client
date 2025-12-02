import React from 'react';
import trackingPng from '../../../assets/live-tracking.png'
import deliveryPng from '../../../assets/safe-delivery.png'
import location from '../../../assets/location-merchant.png'
import merchant from '../../../assets/be-a-merchant-bg.png'

export default function Support() {
  return (
    <>
      {/* Dotted line before the section */}
      <hr className="border-t-3 border-dotted border-gray-400 mx-auto" />

      <section className="w-full py-16">
        <div className="w-full mx-auto flex flex-col gap-6">

          {/* Feature 1 */}
          <div className="flex items-start gap-6 bg-white p-10 rounded-2xl shadow">
            <img
              src={trackingPng}
              alt="Live Parcel Tracking"
              className="w-40 h-40 object-contain"
            />

            <div className="border-l border-dotted border-gray-400 h-40"></div>

            <div className="flex flex-col justify-center h-40">
              <h3 className="text-xl font-bold">Live Parcel Tracking</h3>
              <p className="text-gray-600 text-md mt-1">
                Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, 
                monitor your shipment's journey and get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-6 bg-white p-10 rounded-2xl shadow">
            <img
              src={deliveryPng}
              alt="100% Safe Delivery"
              className="w-40 h-40 object-contain"
            />

            <div className="border-l border-dotted border-gray-400 h-40"></div>

            <div className="flex flex-col justify-center h-40">
              <h3 className="text-xl font-bold">100% Safe Delivery</h3>
              <p className="text-gray-600 text-md mt-1">
                We ensure your parcels are handled with the utmost care and delivered securely to their destination. 
                Our reliable process guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-6 bg-white p-10 rounded-2xl shadow">
            <img
              src={deliveryPng}
              alt="24/7 Call Center Support"
              className="w-40 h-40 object-contain"
            />

            <div className="border-l border-dotted border-gray-400 h-40"></div>

            <div className="flex flex-col justify-center h-40">
              <h3 className="text-xl font-bold">24/7 Call Center Support</h3>
              <p className="text-gray-600 text-md mt-1">
                Our dedicated support team is available around the clock to assist you with any questions, 
                updates, or delivery concerns—anytime you need us.
              </p>
            </div>
          </div>
         <hr className="border-t-4 border-dotted border-gray-400 w-full my-16" />

          {/* Priority Section */}
          <div className="bg-[#003b36] text-white p-30 rounded-3xl relative overflow-hidden ">
            <img src={merchant} alt=""className='absolute top-0'/>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-10 bg-white/20 blur-3xl"></div>

            <h2 className="text-3xl font-bold max-w-xl">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>

            <p className="text-md max-w-md mt-3 ">
             We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl">
                Become a Merchant
              </button>
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl">
                Earn with ZapShift Courier
              </button>
            </div>

            <div className="absolute bottom-10 right-10 opacity-50">
              <img src={location} alt="Decor" className="hidden sm:block w-full h-full " />
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
