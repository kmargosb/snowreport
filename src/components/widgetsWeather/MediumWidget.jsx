import Image from "next/image";

const MediumWidget = ({ city, tempMax, tempMin, description, icon, country, temp}) => {
    return (
        <div className="bg-gradient-to-b from-primary to-primary2 w-[1280px] p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">{city}, {country}</h2>
            <div className="flex flex-col gap-4">
                <p className="text-7xl font-semibold ">{(temp - 273.15).toFixed(0)}°C</p>
                <div className="flex flex-col gap-1">
                    <p>Max: {(tempMax - 273.15).toFixed(1)}°C</p>
                    <p>Min: {(tempMin - 273.15).toFixed(1)}°C</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p>{description}</p>
                <Image src={`http://openweathermap.org/img/w/${icon}.png`} width={100} height={100} alt="WeatherIcon" className="w-16 h-w-16 " />
            </div>
        </div>
    );
};

export default MediumWidget;