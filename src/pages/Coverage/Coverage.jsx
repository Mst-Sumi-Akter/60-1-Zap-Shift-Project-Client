import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;

        const district = serviceCenters.find(c =>
            c.district.toLowerCase().includes(location.toLowerCase())
        );

        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 12); // zoom a adjust kora hoise
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-800">
                We are available in 64 districts
            </h2>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="flex justify-center mb-8">
                <div className="flex w-full max-w-md bg-white rounded-full shadow-md border border-gray-200 overflow-hidden">
                    <input
                        type="search"
                        name="location"
                        placeholder="Search by district..."
                        className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-3 rounded-r-full hover:bg-green-600 transition-colors"
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* Map */}
            <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className="w-full h-full"
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {serviceCenters.map((center, index) => (
                        <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br />
                                Service Area: {center.covered_area.join(', ')}.
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;
