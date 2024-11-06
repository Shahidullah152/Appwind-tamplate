import {
  FaApple,
  FaApplePay,
  FaDownload,
  FaGooglePlay,
  FaHandHoldingUsd,
  FaUser,
} from "react-icons/fa";
import AppIMG1 from "../../assets/images/download/cta-image-1.svg";
import AppIMG2 from "../../assets/images/download/cta-image-2.svg";
function Work() {
  return (
    <>
      <div className="mt-20">
        {/* heading & text */}
        <div className="mb-16">
          <h1 className="text-4xl font-sans font-bold my-4">How it Works?</h1>
          <p className="text-gray-400 font-medium  ">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-5 flex-wrap ">
          <div className="w-96 rounded-xl  h-auto p-2 group cursor-pointer flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gray-100  group-hover:bg-[#8B5cF5] rounded-2xl flex items-center justify-center transition duration-300 ease-in-out">
              <span>
                <FaDownload className="text-[#8B5cF5] group-hover:text-white text-2xl transition duration-300 ease-in-out" />
              </span>
            </div>
            <h1 className="text-lg font-sans font-bold">Download for Free</h1>
            <p className="text-md font-sans text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </p>
          </div>
          <div className="w-96 rounded-xl  h-auto p-2 group cursor-pointer flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gray-100  group-hover:bg-[#8B5cF5] rounded-2xl flex items-center justify-center transition duration-300 ease-in-out">
              <span>
                <FaUser className="text-[#8B5cF5] group-hover:text-white text-2xl transition duration-300 ease-in-out" />
              </span>
            </div>
            <h1 className="text-lg font-sans font-bold">Open an Account</h1>
            <p className="text-md font-sans text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </p>
          </div>
          <div className="w-96 rounded-xl  h-auto p-2 group cursor-pointer flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gray-100  group-hover:bg-[#8B5cF5] rounded-2xl flex items-center justify-center transition duration-300 ease-in-out">
              <span>
                <FaHandHoldingUsd className="text-[#8B5cF5] group-hover:text-white text-2xl transition duration-300 ease-in-out" />
              </span>
            </div>
            <h1 className="text-lg font-sans font-bold">Enjoy our App</h1>
            <p className="text-md font-sans text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </p>
          </div>
        </div>

        {/* Download Now section */}
        <div className="mt-32 bg-HeroBG-img w-full pt-20  px-4 rounded-xl ">
          {/* content */}

          <div className="flex items-center  justify-center gap-20 mb-20 flex-wrap  ">
            <div className="text-start max-w-md flex flex-col gap-4 py-8">
              <h2 className="text-lg font-sans font-medium text-[#8B5cF5]">
                Download Now!
              </h2>
              <h2 className="text-4xl font-bold font-sans">
                Download our mobile <br /> application.
              </h2>
              <p className="mt-3 text-gray-400 font-sans font-bold tracking-wider">
                Download Appwind mobile banking app for IOS & Android to manage
                your online money.
              </p>
              <div className="flex items-center gap-4">
                <div className="mt-3 flex  items-center justify-evenly gap-2 w-32 md:w-44 hover:shadow-[#8a5cf54c] transition-all duration ease-in cursor-pointer shadow-xl bg-[#8B5cF5] px-2 py-2 rounded-xl">
                  <span>
                    <FaGooglePlay className="text-white text-md md:text-3xl" />
                  </span>
                  <span className="flex items-start justify-start flex-col ">
                    <span className="font-medium text-sm md:text-lg font-sans text-gray-400">
                      Get in
                    </span>
                    <span className="font-bold text-sm md:text-lg font-sans text-white">
                      Google Play
                    </span>
                  </span>
                </div>
                <div className="mt-3 flex  items-center justify-evenly gap-2 w-32 md:w-44 hover:shadow-slate-400 transition-all duration ease-in cursor-pointer shadow-xl bg-slate-900 px-2 py-2 rounded-xl">
                  <span>
                    <FaApple className="text-white text-md md:text-3xl" />
                  </span>
                  <span className="flex items-start justify-start flex-col ">
                    <span className="font-medium text-[10px] md:text-md md:py-[6px] py-1 font-sans text-gray-400">
                      Download From
                    </span>
                    <span className="font-bold font-sans text-white text-sm md:text-lg">
                      Apple Store
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* image */}
            <div className="flex ">
              <img src={AppIMG1} alt="" className="w-40 md:w-full" />
              <img src={AppIMG2} alt="" className="w-40 md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
