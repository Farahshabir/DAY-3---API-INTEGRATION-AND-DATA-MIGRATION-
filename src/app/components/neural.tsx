import Image from "next/image";
import none from "@/app/images/none.png";
export default function Neural() {
  return (
    <>
      <div className="w-[1349px] h-[665px]">
        <div className="flex">
          <div className="w-[700px] h-[665px] ml-12">
            <Image src={none} alt="" />
          </div>

          <div className="w-[700px] h-[665px]">
            <div className="w-[560px] h-[326px] float-right mt-36">
              <p className="text-[#BDBDBD]">SUMMER 2020</p>
              <h1 className="text-5xl mt-3">
                Part of the Neural <br></br> Universe
              </h1>

              <p className="text-[#737373] text-xl mt-4">
                We know how large objects will act, <br></br>but things on a
                small scale.
              </p>
              <div className="flex gap-2 mt-3">
                <button className="bg-[#2DC071] text-white w-[156px] h-[52px] rounded-md">
                  BUY NOW
                </button>
                <button className="text-[#2DC071] bg-white  w-[156px] h-[52px] rounded-md border-solid border-2 border-[#2DC071]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
