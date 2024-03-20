"use client"
import { React } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  
  return (
    <div>
      {/* Top Links */}
      <div className="bg-white py-2 px-3 flex justify-end mr-10">
        <div className="text-sm flex gap-2">
          <Link href="/help">
            <div className="text-black hover:text-gray-400 mr-4">Help</div>
          </Link>
          <Link href="/order">
            <div className="text-black hover:text-gray-400 mr-4">Order</div>
          </Link>
          <Link href="/returns">
            <div className="text-black hover:text-gray-400">Returns</div>
          </Link>
        </div>
        <div className="text-sm text-gray-600 ml-2">Hi, John</div>
      </div>

      {/* Navbar */}
      <nav className="bg-white py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-black text-xl font-semibold mr-8 mb-2">
              Ecommerce
            </div>
          </div>

          <div className="flex justify-center flex-grow">
            <ul className="flex space-x-6 text-black">
              <li>
                <Link href="/categories">
                  <div className="hover:text-gray-300 cursor-pointer">
                    Categories
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/sale">
                  <div className="hover:text-gray-300 cursor-pointer">Sale</div>
                </Link>
              </li>
              <li>
                <Link href="/clearance">
                  <div className="hover:text-gray-300 cursor-pointer">
                    Clearance
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/new-stock">
                  <div className="hover:text-gray-300 cursor-pointer">
                    New Stock
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/trending">
                  <div className="hover:text-gray-300 cursor-pointer">
                    Trending
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <CiSearch className="text-black text-xl cursor-pointer hover:text-gray-300 mr-4 " />
            <CiShoppingCart className="text-black text-xl cursor-pointer hover:text-gray-300 " />
          </div>
        </div>
      </nav>
      <div className="text-center bg-gray-100 p-2">
        <h2 className="font-semibold text-sm">Get 10% off on business sign up</h2>
      </div>
    </div>
  );
};

export default Navbar;
