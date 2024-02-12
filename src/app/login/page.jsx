"use client";

import {
    createUserWithEmailAndPassword,
    getRedirectResult,
    signInWithRedirect,
} from "firebase/auth";
// import { auth, provider } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { auth, provider } from "../../../lib/firebase-config";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function SignIn() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [error, setError] = useState("");

    // const onSubmit = (data) => console.log(data);

    useEffect(() => {
        getRedirectResult(auth).then(async (userCred) => {
            if (!userCred) {
                return;
            }

            fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({}),
                headers: {
                    Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                },
            }).then((response) => {
                if (response.status === 200) {
                    router.replace("/");
                }
            });
        });
    }, [router]);

    const signInWithEmail = async (data) => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify(data ? data : {}),
            });

            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setError(""); // Clear the error state on successful login
                router.replace("/");
            } else {
                const errorResponse = await res.json();
                console.error(errorResponse);
                setError("Login failed. Please check your credentials."); // Set the error state
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An unexpected error occurred. Please try again."); // Set the error state
        }
    };

    function signInWithGoogle() {
        signInWithRedirect(auth, provider);
    }

    return (
        <>
            <section className="flex flex-col md:flex-row py-6">
                <div className="md:shadowAuth rounded-3xl py-12 md:max-w-md  md:mx-auto  md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight">
                            Log in to your account
                        </h1>
                        {error && <div className="text-red-500 text-sm absolute">{error}</div>}
                        <form
                            className="mt-6"
                            action="#"
                            onSubmit={handleSubmit(signInWithEmail)}>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    {...register("password")}
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                                Log In
                            </button>
                        </form>
                        <hr className="my-6 border-gray-300 w-full" />
                        <button
                            type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div
                                onClick={signInWithGoogle}
                                className="flex items-center justify-center">
                                <FcGoogle />
                                <span className="ml-4">Log in with Google</span>
                            </div>
                        </button>
                        <p className="mt-8">
                            Need an account?
                            <Link
                                href="/register"
                                className="text-blue-500 hover:text-blue-700 font-semibold">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}