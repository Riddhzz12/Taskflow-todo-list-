"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl w-[320px] text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          className="w-full p-3 mb-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-5 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 hover:bg-pink-600 transition p-3 rounded-xl font-semibold"
        >
          Login
        </button>

      </div>
    </div>
  );
}