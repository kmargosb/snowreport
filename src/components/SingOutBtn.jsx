"use client";
import React from "react";
import { auth } from "@/../../lib/firebase-config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const SingOutBtn = () => {
  const router = useRouter();
  async function signOutUser() {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server --> https://snow-report.netlify.app/
    const response = await fetch("https://snow-report.netlify.app/api/signOut", {
      method: "POST",
    });

    if (response.status === 200) {
      router.push("/login");
    }
  }
  return (
    <div>
      <button onClick={signOutUser}>sign out</button>
    </div>
  );
};

export default SingOutBtn;