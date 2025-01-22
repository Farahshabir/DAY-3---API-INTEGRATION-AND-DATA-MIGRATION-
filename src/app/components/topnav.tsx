import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function TopNav() {
  return (
    <>
      {/* top-navBar */}
      <div className="w-full h-[58px] bg-[#252B42] flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <i className="text-lg text-white">
              <IoCallOutline />
            </i>
            <a href="tel:+12555550118" className="text-white">
              (255) 555-0118
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="text-lg text-white">
              <MdMailOutline />
            </i>
            <a href="mailto:michelle.rivera@example.com" className="text-white">
              farah.shabir@hotmail.com
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <h4 className="text-sm md:text-base text-white">
            Follow Us and get a chance to win 80% off
          </h4>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-white">Follow Us:</p>
          <a href="https://www.instagram.com" className="text-white text-lg">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" className="text-white text-lg">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com" className="text-white text-lg">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" className="text-white text-lg">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
}
