'use client'
import { useEffect} from 'react';

const WeatherLayer = () => {
    useEffect(() => {
        const overlayOptions = {
            getTileUrl: (tile, zoom) => {
                const { x, y } = tile;
                return `https://tile.openweathermap.org/map/temp_new/${zoom}/${x}/${y}.png?appid=aefa98ee63403acca6298ea6a8e43e35`;
            },
            tileSize: new window.google.maps.Size(256, 256),
            isPng: true,
            saturation: 20
        };

        const overlayMapType = new window.google.maps.ImageMapType(overlayOptions);

        const mapElement = document.getElementById('map');
        if (mapElement) {
            const map = new window.google.maps.Map(mapElement, {
                center: { lat: 0, lng: 0 },
                zoom: 2,
                mapTypeId: 'roadmap',
                styles: [
                    {
                        stylers: [ { saturation: -100 }, { lightness: 0 }, { gamma: 1 }],
                    },
                ],
            });
            map.overlayMapTypes.push(overlayMapType);
        }

        return () => {
            if (mapElement) {
                mapElement.innerHTML = ''; // Limpiar el contenido del mapa
            }
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default WeatherLayer;