import Image from "next/image";
import Loading from "../loading/Loading";

const convertirHora = (hora) => {
   const fechaHora = new Date(hora);
   let horas = fechaHora.getHours();
   const minutos = fechaHora.getMinutes();
   const periodo = horas >= 12 ? 'PM' : 'AM';
   horas = horas % 12 || 12;
   const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
   return `${horas}:${minutosFormateados} ${periodo}`;
};

const MediumWidget = ({ city, country, temp, tempMax, tempMin, description, hourlyForecast, icon, humidity, feelsLike }) => {

   if (!hourlyForecast) {
      return <Loading />;
   }

   const firstForecast = hourlyForecast.list.slice(0, 13);

   return (
      <div className="bg-gradient-to-b from-primary to-primary2 max-w-1280 p-8 flex flex-col gap-8 items-center rounded-xl text-white">
         <div className="flex lg:items-center w-full flex-1 justify-between max-sm:flex-col max-sm:items-center">
            <div className="flex flex-col gap-4">
               <h2 className="text-4xl font-semibold">{city}, {country}</h2>
               <div className="flex gap-4 items-center">
                  <p className="text-7xl font-semibold">{(temp - 273.15).toFixed(0)}°C</p>
                  <Image src={`http://openweathermap.org/img/w/${icon}.png`} width={100} height={100} alt="WeatherIcon" />
               </div>
            </div>
            <div className="flex flex-col items-start gap-4 max-sm:border max-sm:p-4 max-sm:rounded-xl">
               <div className="flex gap-1">
                  <p>Max: {(tempMax - 273.15).toFixed(1)}°C</p>
                  <p>Min: {(tempMin - 273.15).toFixed(1)}°C</p>
               </div>
               <div className="flex gap-1 flex-col">
                  <p>Humedad: {humidity}%</p>
                  <p>Sensación Térmica: {(feelsLike - 273.15).toFixed(0)}°C</p>
               </div>
               <p className="text-xl">{description}</p>
            </div>
         </div>
         <div className="flex flex-col items-center gap-4 w-full ">
            <h3 className="text-2xl font-semibold">PREVISIÓN DEL DÍA</h3>
            <div className="flex flex-wrap justify-center gap-4">
               {firstForecast?.map((forecast, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <p>{convertirHora(forecast.dt_txt)}</p>
                     <p>{(forecast.main.temp - 273.15).toFixed(0)}°C</p>
                     <Image src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} width={50} height={50} alt="WeatherIcon" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default MediumWidget;
