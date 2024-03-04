import Image from "next/image";

const SmallWidget = ({ city, country, temp, tempMax, tempMin, description, icon }) => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary2 size-72 p-4 flex flex-col gap-4 items-center justify-center rounded-xl text-white">
      <h2 className="text-2xl font-semibold">{city}, {country}</h2>
      <div className="flex flex-col items-center gap-4 w-auto">
        <p className="text-7xl font-semibold ">{(temp - 273.15).toFixed(0)}°C</p>
        <div className="flex gap-1">
          <div className="flex flex-col justify-center pl-4">
            <div className=" flex gap-4">
              <p className="w-1/3">Max:</p>
              <p>{(tempMax - 273.15).toFixed(1)} °C</p>
            </div>
            <div className="flex gap-4">
              <p className="w-1/3">Min:</p>
              <p>{(tempMin - 273.15).toFixed(1)} °C</p>
            </div>
          </div>
          <Image src={`http://openweathermap.org/img/w/${icon}.png`} width={100} height={100} alt="WeatherIcon" className="w-16 h-w-16" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SmallWidget;


