
import mySqlDb from './victor-db-mysql';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const results = await new Promise((resolve, reject) => {
            mySqlDb.query('SELECT * FROM estacion JOIN nieve ON estacion.estacion_id = nieve.nieve_id JOIN informacion ON estacion.estacion_id = informacion.info_id JOIN pistas ON estacion.estacion_id = pistas.pistas_id JOIN remontes ON estacion.estacion_id = remontes.remontes_id', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        console.log(results);
        // connection.end();
        return (NextResponse.json(results))

    } catch (error) {
        return NextResponse.json(
            { message: error },
            { status: 500 }
        )
    }
}
