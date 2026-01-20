"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    console.log("Attempting login with:", { email, password });
    try {
      const res = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log("Login response:", res);
      if (res.status === 200) {
        if (res.data) {
          alert(res.data.message);
          router.push("/userDashboard");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm  p-6 rounded-lg shadow">
        <h1 className="text-2xl bg- green-500 font-bold text-center mb-6 text-white">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 rounded bg-gray-700 text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 rounded bg-gray-700 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 rounded"
        >
          Sign In
        </button>

      </div>
      
    </div>
  );
}
