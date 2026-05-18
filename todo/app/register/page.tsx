"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
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

      console.log("REGISTER RESPONSE:", data);

      // ✅ SUCCESS CHECK
      if (res.ok) {
        alert("Registered successfully 🚀");
        router.push("/login");
      } else {
        alert(data.message || "Registration failed");
      }

    } catch (error) {
      console.log("Error:", error);
      alert("Backend not reachable");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Account ✨
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-white/20 bg-white/10 text-white placeholder-gray-300 p-4 rounded-2xl outline-none"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white/20 bg-white/10 text-white placeholder-gray-300 p-4 rounded-2xl outline-none"
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-white/20 bg-white/10 text-white placeholder-gray-300 p-4 rounded-2xl outline-none"
          />

          <button
            onClick={handleRegister}
            className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white p-4 rounded-2xl font-semibold"
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
}