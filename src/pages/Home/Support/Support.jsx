import React from 'react';

export default function Support() {
  return (
    <>
      {/* Dotted line before the section */}
      <hr className="border-t-3 border-dotted border-gray-400  mx-auto " />

      <section className="w-full py-16">
        <div className="w-full mx-auto flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow">
            <img
              src="/icons/track.png"
              alt="Live Parcel Tracking"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">Live Parcel Tracking</h3>
              <p className="text-gray-600 text-sm mt-1">
                View updated real-time tracking information for your parcel and enjoy delivery updates around the clock
                to know your shipment’s exact location.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow">
            <img
              src="/icons/safe.png"
              alt="100% Safe Delivery"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">100% Safe Delivery</h3>
              <p className="text-gray-600 text-sm mt-1">
                All packages are handled with utmost care and delivered securely to ensure they reach their destination in
                perfect condition.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow">
            <img
              src="/icons/support.png"
              alt="24/7 Call Center Support"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">24/7 Call Center Support</h3>
              <p className="text-gray-600 text-sm mt-1">
                Our support agents are available around the clock to assist you with any questions, updates, or delivery
                concerns.
              </p>
            </div>
          </div>

          {/* Priority Section */}
          <div className="bg-[#003b36] text-white p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-10 bg-white/20 blur-3xl"></div>

            <h2 className="text-3xl font-bold max-w-xl">Merchant and Customer Satisfaction is Our First Priority</h2>
            <p className="text-sm max-w-md mt-3 opacity-90">
              We offer seamless pickup and delivery services with strong support to ensure the best experience for both
              merchants and customers.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl">Become a Merchant</button>
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl">
                Earn with ZapShift Courier
              </button>
            </div>

            <div className="absolute bottom-4 right-4 opacity-40">
              <img src="/icons/boxline.png" alt="Decor" className="w-40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
