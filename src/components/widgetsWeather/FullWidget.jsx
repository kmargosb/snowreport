
const FullWidget = ({ latitude, longitude }) => {

    return (
        <div className="size-40 bg-primary2 rounded-lg shadow-lg">
            <div>
                <div>
                    <p>Ciudad, Pais</p>
                    <p>Soleado</p>
                </div>
                <Image />
            </div>
            <div>
                <p>10C</p>
                <div>
                    <p className="border-b">Detalles</p>
                    <div className="flex">
                        <p>sensacion</p>
                        <p>5C</p>
                    </div>
                    <div className="flex">
                        <p>viento</p>
                        <p>3.1m/s</p>
                    </div>
                    <div className="flex">
                        <p>Humedad</p>
                        <p>60%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullWidget;