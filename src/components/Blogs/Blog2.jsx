import {
  FaArrowRight,
  FaCalendar,
  FaEye,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import blog5 from "../../assets/images/articles/blog-5.jpg";
import img1 from "../../assets/image-1.png";
import { FaMessage } from "react-icons/fa6";

function Blog2() {
  return (
    <>
      <div className="mt-28 flex items-center justify-center">
        <div className="relative -z-10 w-full md:w-[80%] md:h-[450px]  ">
          <img src={blog5} alt="" className="rounded-xl w-[100%] h-[100%] " />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              50+ High rated online banking mobile apps on playstore.
            </h1>
            <div className="flex items-center flex-wrap justify-evenly w-[80%] md:w-[100%]  mt-3 text-white">
              <img src={img1} className="w-10" alt="" />
              <p className="font-sans font-medium">
                By <span className="hover:text-[#8B5cf5]">Musharof Chy</span>
              </p>
              <p className="flex items-center gap-3">
                <FaCalendar className="inline" />
                <span>12 Jan 2024</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMessage className="inline" />
                <span>50</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEye className="inline" />
                <span>40</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Texts */}
      <div className="flex  items-cneter justify-start gap-12 mt-12">
        <div className="w-[100%] md:w-[60%] mx-auto flex flex-col items-start  gap-10 text-start">
          <p className="text-gray-400 font-sans font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
            amet. Ligula ullamcorper malesuada proin libero nunc consequat
            interdum varius. Quam pellentesque nec nam aliquam sem et tortor
            consequat. Pellentesque adipiscing commodo elit at imperdiet.
          </p>
          <p className="text-gray-400 font-sans font-normal">
            Semper auctor neque vitae tempus quam pellentesque nec. Amet dictum
            sit amet justo donec enim diam. Varius sit amet mattis vulputate
            enim nulla aliquet porttitor. Odio pellentesque diam volutpat
            commodo sed.
          </p>
          <h1 className="text-2xl font-sans font-bold">
            Online banking mobile lists
          </h1>
          <p className="text-gray-400 font-sans font-normal">
            consectetur adipiscing elit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
            cupidatat.
          </p>
          <ul className="text-gray-400 flex flex-col gap-3 ul list-disc ms-4">
            <li>Consectetur adipiscing elit in voluptate velit.</li>
            <li>Mattis vulputate cupidatat.</li>
            <li>Vulputate enim nulla aliquet porttitor odio pellentesque</li>
            <li>Ligula ullamcorper malesuada proin</li>
          </ul>
          <div className="bg-[#8a5cf5] py-6 px-12 text-center rounded-lg">
            <p className="text-white font-sans font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt utionals labore et dolore magna aliqua. Quis
              lobortis scelerisque fermentum, The Neque ut etiam sit amet.
            </p>
          </div>
          <p className="text-gray-400 font-sans font-normal">
            consectetur adipiscing elit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
            cupidatat.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-[100%] md:w-[60%] mx-auto my-6 flex-wrap">
        <div className="text-start">
          <h1 className="font-medium mt-6 mb-2 font-sans  text-gray-400">
            Popular Tags :
          </h1>
          <div className="flex  items-center gap-4">
            <button className="py-1 px-6 bg-gray-100 rounded-lg  font-sans font-medium text-gray-400 hover:bg-[#8a5cf5] transition-all duration-150 ease-in hover:text-white">
              Desing
            </button>
            <button className="py-1 px-6 bg-gray-100 rounded-lg  font-sans font-medium text-gray-400 hover:bg-[#8a5cf5] transition-all duration-150 ease-in hover:text-white">
              Development
            </button>
            <button className="py-1 px-6 bg-gray-100 rounded-lg  font-sans font-medium text-gray-400 hover:bg-[#8a5cf5] transition-all duration-150 ease-in hover:text-white">
              Info
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="font-medium mt-6 mb-2 font-sans  text-gray-400">
            Share this post :
          </h1>
          <div className="flex  items-center gap-4">
            <button className="p-2 bg-gray-100 rounded-lg  font-sans font-medium text-gray-400 hover:bg-[#8a5cf5] transition-all duration-150 ease-in hover:text-white">
              <FaLinkedin />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg  font-sans font-medium text-gray-400 hover:bg-[#8a5cf5] transition-all duration-150 ease-in hover:text-white">
              <FaTwitter />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg  font-sans font-medium text-gray-400 hover:bg-[#8a5cf5] transition-all duration-150 ease-in hover:text-white">
              <FaFacebookF />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog2;
