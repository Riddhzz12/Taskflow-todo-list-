"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Loading...
    </div>
  );
}