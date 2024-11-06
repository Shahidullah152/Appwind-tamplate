import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/images/Logo/logo3.svg";
function Footer() {
  return (
    <>
      <div className="bg-blue-100 w-full  rounded-xl relative ">
        <svg
          className="overflow-hidden ms-auto me-2 "
          width="63"
          height="30"
          viewBox="0 0 63 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.21563"
            cy="10.1013"
            r="1.14106"
            transform="rotate(-118.771 7.21563 10.1013)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="24.8191"
            cy="0.43515"
            r="1.14106"
            transform="rotate(-118.771 24.8191 0.43515)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="16.7716"
            cy="27.5037"
            r="1.14106"
            transform="rotate(-118.771 16.7716 27.5037)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="2.38256"
            cy="1.2995"
            r="1.14106"
            transform="rotate(-118.771 2.38256 1.2995)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="25.5737"
            cy="22.6717"
            r="1.14106"
            transform="rotate(-118.771 25.5737 22.6717)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="34.3754"
            cy="17.8386"
            r="1.14106"
            transform="rotate(-118.771 34.3754 17.8386)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="43.1771"
            cy="13.0056"
            r="1.14106"
            transform="rotate(-118.771 43.1771 13.0056)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="51.9788"
            cy="8.17249"
            r="1.14106"
            transform="rotate(-118.771 51.9788 8.17249)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="60.5805"
            cy="3.44925"
            r="1.14106"
            transform="rotate(-118.771 60.5805 3.44925)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="11.9389"
            cy="18.7029"
            r="1.14106"
            transform="rotate(-118.771 11.9389 18.7029)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="20.7405"
            cy="13.8698"
            r="1.14106"
            transform="rotate(-118.771 20.7405 13.8698)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="29.5423"
            cy="9.0368"
            r="1.14106"
            transform="rotate(-118.771 29.5423 9.0368)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="38.344"
            cy="4.2038"
            r="1.14106"
            transform="rotate(-118.771 38.344 4.2038)"
            fill="#8B5CF6"
          ></circle>
          <circle
            cx="47.1458"
            cy="-0.62915"
            r="1.14106"
            transform="rotate(-118.771 47.1458 -0.62915)"
            fill="#8B5CF6"
          ></circle>
        </svg>

        <div className="py-16 px-8 flex items-center justify-center gap-8 flex-wrap">
          <div className="md:w-64 w-full">
            <img src={logo} className="w-36" alt="" />
            <p className="text-start text-gray-400 font-medium my-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              feugiat et sem at Etiam in lobortis dui. Praesent .
            </p>
            <div className="flex items-center gap-4">
              <span className="hover:text-[#8B5cf5] text-gray-400 cursor-pointer">
                <FaFacebook />
              </span>
              <span className="hover:text-[#8B5cf5] text-gray-400 cursor-pointer">
                <FaTwitter />
              </span>
              <span className="hover:text-[#8B5cf5] text-gray-400 cursor-pointer">
                <FaInstagram />
              </span>
              <span className="hover:text-[#8B5cf5] text-gray-400 cursor-pointer">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="md:w-64 w-full">
            <h1 className="text-start text-lg font-sans font-bold mb-5">
              Quick Links
            </h1>
            <ul className="flex items-start flex-col gap-4">
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Our Blog
              </li>
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Check Pricing
              </li>
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                About Us
              </li>
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Help & Support
              </li>
            </ul>
          </div>
          <div className="md:w-64 w-full">
            <h1 className="text-start text-lg font-sans font-bold mb-5">
              App Information
            </h1>
            <ul className="flex items-start flex-col gap-4">
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Style Guideline
              </li>
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Getting Started
              </li>
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Changelog
              </li>
              <li className="text-gray-400 font-medium font-sans hover:text-[#8B5cf5] cursor-pointer">
                Update Details
              </li>
            </ul>
          </div>
          <div className="md:w-64 w-full">
            <h1 className="text-start text-lg font-sans font-bold mb-5">
              Join Our Newsletter
            </h1>
            <p className="text-gray-500 font-sans font-medium text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla
              feugiat
            </p>
            <div className="mt-7 relative">
              <input
                type="text"
                placeholder="Enter Your email"
                className="rounded-xl py-3 px-6 outline-none focus:border-[#8B5cf5] border-[1px] w-full"
              />
              <div className="w-10 h-10 rounded-xl bg-[#8B5cf5] flex items-center justify-center absolute right-4 top-1 ">
                <FaTelegramPlane className="text-white text-lg rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copy right text */}
      <div className="h-10  w-full flex items-center justify-center mt-6">
        <h1 className="text-center text-lg font-medium font-sans text-gray-500">
          Copyright by Appwind 2024, All rights reserved.
        </h1>
      </div>
    </>
  );
}

export default Footer;
