import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import MapLegend from './MapLegend';
import WeatherLayer from './WeatherLayer';
import Loading from '../loading/Loading';

const WeatherMap = () => {
  const mapCenter = { lat: 0, lng: 0 };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAzKp5StTGvc7_kydK2MoE_kXhHj2GTDWc',
  });

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <Loading/>;

    return (
        <div className='mt-[100px]'>
            <main>
                
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '400px' }}
                        center={mapCenter}
                        zoom={10}>
                        <Marker position={mapCenter} />
                        <WeatherLayer/>
                        <MapLegend/>
                    </GoogleMap>
                
            </main>
        </div>
    );
};

export default WeatherMap;

