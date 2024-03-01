import React from 'react';

const WebCams = ({ stationsDB }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {Object.keys(stationsDB).map(station => (
        <div key={station} className="border border-gray-200 rounded-lg overflow-hidden">
          <h2 className="text-lg font-bold px-4 py-2 bg-gray-100">{station}</h2>
          <div className="grid grid-cols-1 gap-2 p-4">
            {stationsDB[station].webcams.map((webcam, index) => (
              <img
                key={index}
                src={webcam}
                alt={`Webcam ${index + 1}`}
                className="w-full h-auto rounded-md shadow-md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebCams;
