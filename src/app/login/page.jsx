"use client";
import React, { useState } from "react";
import Link from "next/link";
import { loginController } from "../api/users/login/route";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!userData.email || !userData.password) {
        throw new Error("Please fill all the fields");
      }
      const response = await loginController(userData);
      if (response.success) {
        console.log("User successfully logged in", response);
        login(userData);
        setUserData({
          email: "",
          password: "",
        });
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="border border-gray-300 bg-white rounded-lg p-8 shadow-md w-96 ">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <h3 className="font-bold mb-2 text-center">
            Welcome back to E-commerce
          </h3>
          <p className="text-sm text-gray-600 mb-6 text-center">
            The next-gen business marketplace
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                autoComplete="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-4 py-2 text-sm text-gray-500 focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't Have an account?{" "}
            <Link
              href="/signup"
              className="text-gray-950 hover:underline font-semibold"
            >
              SIGNUP
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
