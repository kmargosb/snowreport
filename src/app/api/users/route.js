export const dynamic = 'force-dynamic';
import { auth } from 'firebase/auth';
import { db } from '../../../../lib/firebase-config';
import { collection, doc, getDoc, setDoc, addDoc, updateDoc } from "firebase/firestore";
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
