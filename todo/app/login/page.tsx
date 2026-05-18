"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      console.log("LOGIN RESPONSE:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);

        alert("Login successful 🚀");

        router.push("/dashboard");
      } else {
        alert(data.message || "Invalid credentials ❌");
      }

    } catch (error) {
      console.log(error);
      alert("Backend not reachable");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center p-5">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Login to continue your productivity journey
        </p>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border border-white/20 p-4 rounded-2xl text-white placeholder-gray-300 outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border border-white/20 p-4 rounded-2xl text-white placeholder-gray-300 outline-none"
          />

          <button
            onClick={handleLogin}
            className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 p-4 rounded-2xl font-semibold text-white"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}