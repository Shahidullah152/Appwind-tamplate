/* eslint-disable react/prop-types */
import { FaArrowRight, FaStar, FaTrophy } from "react-icons/fa";
import RecentIMG from "../../assets/Recent-cards-img.jpg";
import DarkLogo from "../../assets/images/Logo/logo4.svg";
import LightLogo from "../../assets/images/Logo/logo3.svg";

function Award({ DarkMode }) {
  return (
    <>
      <div className="mt-20">
        {/* heading & text */}
        <div className="mb-16">
          <h1
            className={`text-4xl font-sans font-bold my-4 ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            Our Recent Awards
          </h1>
          <p className="text-gray-400 font-medium  ">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <div
            className={`p-4 w-80 shadow-xl ${
              DarkMode ? "shadow-[#8b52f549]" : "shadow-gray-200"
            } rounded-xl h-auto p-10 flex flex-col gap-8 justify-start"`}
          >
            <div className="flex  items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center ">
                <FaStar className="text-white" />
              </span>
              <h1
                className={`font-bold ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                4.9 Rating
              </h1>
            </div>
            <div className="flex  items-center gap-2 font-sans">
              <img src={RecentIMG} alt="" className="w-28" />
              <h1
                className={`font-normal font-sans ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                +195K raters
              </h1>
            </div>
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate
              vitae massa eu dapibus ligula.
            </p>
            <p className="text-[#8B5CF6] font-bold font-sans text-md hover:underline hover:cursor-pointer text-start">
              Rate Out Application
              <span className="ms-2">
                <FaArrowRight className="inline" />
              </span>
            </p>
          </div>
          <div
            className={`p-4 w-80 shadow-xl ${
              DarkMode ? "shadow-[#8b52f549]" : "shadow-gray-200"
            } rounded-xl h-auto p-10 flex flex-col gap-8 justify-start"`}
          >
            <div className="flex  items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center ">
                <FaTrophy className="text-white" />
              </span>
              <h1
                className={`font-bold ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Awwards
              </h1>
            </div>
            <div className="flex  items-center gap-2 font-sans">
              <p
                className={`font-bold text-lg font-sans text-start ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Best of trendy design in{" "}
                <span className="text-[#8B5cF6]">2024</span> on Awwwards
              </p>
            </div>
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate
              vitae massa eu dapibus ligula.
            </p>
            <p className="text-[#8B5CF6] font-bold font-sans text-md hover:underline hover:cursor-pointer text-start">
              Get To Awwards
              <span className="ms-2">
                <FaArrowRight className="inline" />
              </span>
            </p>
          </div>
          <div
            className={`p-4 w-80 shadow-xl ${
              DarkMode ? "shadow-[#8b52f549]" : "shadow-gray-200"
            } rounded-xl h-auto p-10 flex flex-col gap-8 justify-start"`}
          >
            <div className="flex  items-center gap-2">
              <img src={DarkMode ? DarkLogo : LightLogo} alt="" />
            </div>
            <div className="flex  items-center gap-2 font-sans">
              <p
                className={`font-bold text-lg font-sans text-start ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Appwind is the best app for online payments.
              </p>
            </div>
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate
              vitae massa eu dapibus ligula.
            </p>
            <p className="text-[#8B5CF6] font-bold font-sans text-md hover:underline hover:cursor-pointer text-start">
              Know More
              <span className="ms-2">
                <FaArrowRight className="inline" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Award;
