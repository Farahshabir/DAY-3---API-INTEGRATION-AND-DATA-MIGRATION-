import Image from "next/image";
import banner from "@/app/images/banner.jpg";
export default function Banner() {
  return (
    <>
      <div className="relative">
        {/* Image Banner */}
        <Image
          src={banner}
          alt="Banner Image"
          className="w-full h-auto object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-left p-8">
          <p className="text-sm md:text-2xl font-semibold -ml-96 mb-4">
            SUMMER 2020
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 -ml-80">
            NEW COLLECTION
          </h1>
          <p className="text-sm md:text-lg max-w-lg px-4 md:px-8 -ml-72">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Shop Now Button */}
          <a
            href="#shop"
            className="-ml-80 mt-6 px-8 py-3 bg-[#2DC071] text-white text-lg font-semibold rounded-lg hover:bg-[#2DC071] transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
}
