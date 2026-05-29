"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/api";

export default function RegisterComponent() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {

      const data = await registerUser(name, email, password);

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


      alert("Registered successfully 🚀");

      setName("");
      setEmail("");
      setPassword("");

      router.push("/login");
    } catch (error: any) {
      console.log(error);
      alert(error.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl w-[340px] text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          className="w-full p-3 mb-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-5 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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
