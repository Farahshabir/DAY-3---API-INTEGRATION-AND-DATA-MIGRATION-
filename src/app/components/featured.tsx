import Image from "next/image";
import { BiAlarm } from "react-icons/bi";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import post1 from "@/app/images/post1.png";
import post2 from "@/app/images/post2.png";
import post3 from "@/app/images/post3.png";
export default function Featured() {
  return (
    <>
      <div>
        <div className="text-center w-[995px] h-[130px] ml-40">
          <p className="text-[#23A6F0]">Practice Advice</p>
          <h1 className="text-3xl">Featured Posts</h1>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-[#737373]">
            the two major realms of Classical physics: Newtonian mechanisms
          </p>
        </div>
        <div className="flex ml-40 w-[995px] h-[600px] gap-2  ">
          <div className="w-[348px] h-[600px]">
            <Image className="" src={post1} alt="Post 1" />
            <div className="border-solid border-2 border-slate-200 shadow-md">
              <div className="space-x-4 ml-2 mt-2 text-sm">
                <span className="text-[#8EC2F2]">Google</span>
                <span className="text-[#737373]">Trending</span>
                <span className="text-[#737373]">New</span>
              </div>
              <h3 className="ml-2 text-2xl">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="text-[#737373] text-sm ml-2 space-x-2 w-[280px]">
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              <div className="flex">
                <div className="flex mt-6">
                  <div className="ml-2 text-xl">
                    <span className="text-[#8EC2F2]">
                      <BiAlarm />
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-[#737373] text-sm">22 April 2021</p>
                  </div>
                  <div className="ml-8 text-xl">
                    <span className="text-[#23856D]">
                      <FaChartArea />
                    </span>
                  </div>
                  <div>
                    <p className="text-[#737373] text-sm">10 comments</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="ml-3 text-[#737373]">
                  <p>Learn More</p>
                </div>
                <div className="text-[#23A6F0] text-xl ml-1 mt-1">
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[348px] h-[600px] ">
            <Image className="" src={post2} alt="Post 1" />
            <div className="border-solid border-2 border-slate-200 shadow-md">
              <div className="space-x-4 ml-2 mt-2 text-sm">
                <span className="text-[#8EC2F2]">Google</span>
                <span className="text-[#737373]">Trending</span>
                <span className="text-[#737373]">New</span>
              </div>
              <h3 className="ml-2 text-2xl">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="text-[#737373] text-sm ml-2 space-x-2 w-[280px]">
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              <div className="flex">
                <div className="flex mt-6">
                  <div className="ml-2 text-xl">
                    <span className="text-[#8EC2F2]">
                      <BiAlarm />
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-[#737373] text-sm">22 April 2021</p>
                  </div>
                  <div className="ml-8 text-xl">
                    <span className="text-[#23856D]">
                      <FaChartArea />
                    </span>
                  </div>
                  <div>
                    <p className="text-[#737373] text-sm">10 comments</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="ml-3 text-[#737373]">
                  <p>Learn More</p>
                </div>
                <div className="text-[#23A6F0] text-xl ml-1 mt-1">
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[348px] h-[600px]">
            <Image className="" src={post3} alt="Post 1" />
            <div className="border-solid border-2 border-slate-200 shadow-md">
              <div className="space-x-4 ml-2 mt-2 text-sm">
                <span className="text-[#8EC2F2]">Google</span>
                <span className="text-[#737373]">Trending</span>
                <span className="text-[#737373]">New</span>
              </div>
              <h3 className="ml-2 text-2xl">
                Loudest à la Madison #1 (L&apos;integral)
              </h3>
              <p className="text-[#737373] text-sm ml-2 space-x-2 w-[280px]">
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              <div className="flex">
                <div className="flex mt-6">
                  <div className="ml-2 text-xl">
                    <span className="text-[#8EC2F2]">
                      <BiAlarm />
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-[#737373] text-sm">22 April 2021</p>
                  </div>
                  <div className="ml-8 text-xl">
                    <span className="text-[#23856D]">
                      <FaChartArea />
                    </span>
                  </div>
                  <div>
                    <p className="text-[#737373] text-sm">10 comments</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="ml-3 text-[#737373]">
                  <p>Learn More</p>
                </div>
                <div className="text-[#23A6F0] text-xl ml-1 mt-1">
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
