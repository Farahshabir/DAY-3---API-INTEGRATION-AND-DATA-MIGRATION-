import Image from "next/image";
import carditem1 from "@/app/images/carditem1.png";
import carditem2 from "@/app/images/carditem2.png";
import carditem3 from "@/app/images/carditem3.png";
import carditem4 from "@/app/images/carditem4.png";
export default function Editor() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">EDITOR&apos;S PICK</h1>
          <p className="text-lg text-[#737373] mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap justify-center gap-6 w-[1050px] h-[500px]">
          {/* Men&apos;s Section */}
          <div className="max-w-[510px]">
            <Image src={carditem1} alt="" className="w-full h-auto" />
          </div>

          {/* Women&apos;s Section */}
          <div className="max-w-[300px]">
            <Image src={carditem2} alt="" className="w-full h-auto" />
          </div>

          {/* Accessories & Kids Section */}
          <div className="max-w-[240px] h-[240px]">
            <Image
              src={carditem3}
              alt="Accessories"
              className="w-full h-auto"
            />
            <Image src={carditem4} alt="" className="w-full h-auto mt-4" />
          </div>
        </div>
      </div>
    </>
  );
}
