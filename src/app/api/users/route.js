export const dynamic = 'force-dynamic';
import { db } from '../../../../lib/firebase-config';
import { collection, doc, getDocs, setDoc} from "firebase/firestore";
import { NextResponse } from 'next/server';

export const POST = async (request) => {

    const users = await request.json();

    try {
        await setDoc(doc(db, "users", users.id ), users);
        return NextResponse.json({ message: "ok" }, { status: 201 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

export const GET = async (request) => {
    

    const data = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
        console.log(doc.id, " => ", doc.data());
    });
    return Response.json(data);
};

