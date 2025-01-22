import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div>
        <div className="w-[1050px] h-[138px] pt-8 justify-self-center mt-8">
          <div>
            <h1 className="text-2xl font-bold">Bandage</h1>
          </div>
          <div className="flex float-right gap-4 -mt-5 ">
            <div>
              <span className="text-[#23A6F0] text-2xl">
                <FaFacebook />
              </span>
            </div>
            <div>
              <span className="text-[#23A6F0] text-2xl">
                <FaInstagram />
              </span>
            </div>
            <div>
              <span className="text-[#23A6F0] text-2xl">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
        <div className="pl-2 flex w-[1050px] h-[300px] pt-8 gap-10 justify-self-center">
          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Company Info</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Legal</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Features</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>Buiness Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Resources</h2>
            </div>
            <div>
              <ul className="text-[#737373] leading-loose">
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
          </div>

          <div className="w-[148px] h-[170px]">
            <div>
              <h2 className="font-bold">Get In Touch</h2>
            </div>

            <div className="w-[321px] h-[58px] ">
              <form action="#">
                <input
                  className="ltr h-[58px] w-[190px] bg-[#F9F9F9] text-[#737373] border border-[#E6E6E6]"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <button className="bg-[#23A6F0] text-[#FFFFFF] h-[58px] w-[90px] rounded-r-lg">
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <p className="text-[#737373] text-sm">Lorm imp sum doler Amit</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA] text-[#737373] w-[1050px] h-[80px] pt-6 justify-self-center">
          <p>Made With Love By @Farah Shabir All Right Reserved</p>
        </div>
      </div>
    </>
  );
}
