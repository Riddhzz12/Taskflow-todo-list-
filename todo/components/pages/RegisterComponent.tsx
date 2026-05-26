"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterComponent() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully 🚀");

        // clear form
        setName("");
        setEmail("");
        setPassword("");

        // redirect to login
        router.push("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl w-[340px] text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        {/* NAME */}
        <input
          className="w-full p-3 mb-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <input
          className="w-full p-3 mb-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="w-full p-3 mb-5 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full bg-pink-500 hover:bg-pink-600 transition p-3 rounded-xl font-semibold"
        >
          Register
        </button>

      </div>
    </div>
  );
}
