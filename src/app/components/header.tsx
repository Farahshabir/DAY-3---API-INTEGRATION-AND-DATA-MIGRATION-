"use client";

import { useState } from "react";
import { FaRegUser, FaChevronDown, FaBars } from "react-icons/fa";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Mens Clothing", path: "/mens-clothing" },
    { name: "Womens Clothing", path: "/womens-clothing" },
    { name: "Accessories", path: "/jewelery"},
    { name: "Sale", path: "/sale" },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-[#FFFFFF] text-black h-[58px]">
        {/* Title */}
        <div className="text-2xl font-bold">
          <h1>Bandage</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <FaBars
            className="text-[#23A6F0] text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu visibility
          />
        </div>

        {/* Navigation Links (Desktop/Tablets) */}
        <div className="hidden md:flex relative flex-1 justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>

            {/* Shop Dropdown */}
            <li className="relative group">
              <button
                className="flex items-center space-x-2 hover:text-gray-400"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Shop</span>
                <FaChevronDown className="text-sm" />
              </button>
              <div className="absolute left-0 hidden mt-2 space-y-2 bg-[#252B42] text-white group-hover:block z-10">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-gray-400">
                Pages
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons (Login, Search, Cart, Heart) */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaRegUser className="text-lg text-[#23A6F0]" />
            <span className="hidden md:block text-[#23A6F0]">
              Login / Register
            </span>
          </div>
          <CiSearch className="text-[#23A6F0] text-xl cursor-pointer hover:text-gray-400" />
          <div className="flex items-center space-x-1">
            <CiShoppingCart className="text-[#23A6F0] text-xl cursor-pointer hover:text-gray-400" />
            <span className="text-[#23A6F0] text-sm">1</span>
          </div>
          <div className="flex items-center space-x-1">
            <CiHeart className="text-[#23A6F0] text-xl cursor-pointer hover:text-gray-400" />
            <span className="text-[#23A6F0] text-sm">1</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center space-y-4 p-4 bg-[#252B42] text-white`}
      >
        <Link href="/" className="hover:bg-gray-700 px-4 py-2">
          Home
        </Link>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="hover:bg-gray-700 px-4 py-2"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/about" className="hover:bg-gray-700 px-4 py-2">
          About
        </Link>
        <Link href="/blog" className="hover:bg-gray-700 px-4 py-2">
          Blog
        </Link>
        <Link href="/contact" className="hover:bg-gray-700 px-4 py-2">
          Contact
        </Link>
        <Link href="/pages" className="hover:bg-gray-700 px-4 py-2">
          Pages
        </Link>
        <div className="flex items-center space-x-4 pt-4">
          <CiSearch className="text-[#23A6F0] text-xl cursor-pointer" />
          <CiShoppingCart className="text-[#23A6F0] text-xl cursor-pointer" />
          <CiHeart className="text-[#23A6F0] text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
}
