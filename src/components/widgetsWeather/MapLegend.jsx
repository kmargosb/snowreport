import React from 'react';

const MapLegend = () => {
    return (
        <div className="absolute top-20 right-2 bg-white opacity-60 p-2 rounded shadow flex">
            <ul className=''>
                <li className="flex items-center mb-2">
                    <span className="w-4 h-4 mr-2 bg-blue-500 rounded-full"></span>
                    Cold
                </li>
                <li className="flex items-center mb-2">
                    <span className="w-4 h-4 mr-2 bg-yellow-500 rounded-full"></span>
                    Warm
                </li>
                <li className="flex items-center mb-2">
                    <span className="w-4 h-4 mr-2 bg-red-500 rounded-full"></span>
                    Hot
                </li>
            </ul>
        </div>
    );
};

export default MapLegend;
