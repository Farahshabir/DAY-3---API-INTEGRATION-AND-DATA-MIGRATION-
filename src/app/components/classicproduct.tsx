import Image from "next/image";
import classicproduct from "@/app/images/classicproduct.png";
export default function ClassicProduct() {
  return (
    <>
      <div className="bg-[#23856D] w-full max-w-[1349px] h-[702px] p-6 flex justify-between items-center">
        <div className="space-y-2 w-[400px] ml-24 ">
          <p className="text-white text-sm font-medium mb-10">SUMMER 2020</p>
          <h4 className="text-white text-6xl font-bold">
            Vita Classic Product
          </h4>
          <div className="w-[340px]">
            <p className="text-sm text-white leading-loose">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
          </div>
          <div className="flex text-white font-bold ">
            {" "}
            <p className="mt-6">$16.48</p>
            <button className="bg-[#2DC071] text-white w-[160px] h-[50px] rounded-md p-2 ml-10 text-sm mt-5">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="mr-36 mt-24">
          <Image
            className=""
            src={classicproduct}
            alt="Vita Classic Product"
            // width={400}
            // height={400}
          />
        </div>
      </div>
    </>
  );
}
