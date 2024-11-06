import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import blog4 from "../../assets/images/articles/blog-4.jpg";
import blog5 from "../../assets/images/articles/blog-5.jpg";
import blog6 from "../../assets/images/articles/blog-6.jpg";
import blog7 from "../../assets/images/articles/blog-7.jpg";
import blog8 from "../../assets/images/articles/blog-8.jpg";

function Blog1() {
  return (
    <>
      {/* hero  */}
      <div className="w-full h-auto bg-HeroBG-img mt-12 rounded-2xl py-20 mb-10">
        <div>
          <h1 className="text-[45px] font-sans font-bold ">Blog Grid</h1>
          <p className="text-gray-500 font-sans font-medium my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            ipsum, <br /> vestibulum non odio vel, posuere posuere tortor.
          </p>
          <div>
            <NavLink
              to="/"
              className="text-gray-500 hover:text-[#8B5cf5] me-1 font-medium"
            >
              Home
            </NavLink>{" "}
            <b className="text-gray-500">/</b>{" "}
            <span className="text-[#8B5cf5] font-sans ms-2 font-semibold">
              Blog Grid
            </span>
          </div>
        </div>
      </div>

      {/* blogs */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        <div className="relative  -z-10 w-full md:w-[45%]  ">
          <img src={blog4} alt="" className="rounded-xl w-full" />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              50+ High rated online banking mobile <br /> apps on playstore.
            </h1>
            <div className="flex items-center justify-between mt-3 text-white">
              <span>Continue reading...</span>
              <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative  -z-10 w-full md:w-[45%] ">
          <img src={blog5} alt="" className="rounded-xl w-full" />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              Want to use Growup in your <br /> organization?
            </h1>
            <div className="flex items-center justify-between mt-3 text-white">
              <span>Continue reading...</span>
              <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative  -z-10 w-full md:w-[45%] ">
          <img src={blog6} alt="" className="rounded-xl w-full" />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              50+ High rated online banking mobile <br /> apps on playstore.
            </h1>
            <div className="flex items-center justify-between mt-3 text-white">
              <span>Continue reading...</span>
              <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative  -z-10 w-full md:w-[45%] ">
          <img src={blog7} alt="" className="rounded-xl w-full" />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              50+ High rated online banking mobile <br /> apps on playstore.
            </h1>
            <div className="flex items-center justify-between mt-3 text-white">
              <span>Continue reading...</span>
              <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative  -z-10 w-full md:w-[45%] ">
          <img src={blog8} alt="" className="rounded-xl w-full" />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              50+ High rated online banking mobile <br /> apps on playstore.
            </h1>
            <div className="flex items-center justify-between mt-3 text-white">
              <span>Continue reading...</span>
              <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="relative  -z-10 w-full md:w-[45%] ">
          <img src={blog4} alt="" className="rounded-xl w-full" />
          <div className="absolute  rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
            <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
              50+ High rated online banking mobile <br /> apps on playstore.
            </h1>
            <div className="flex items-center justify-between mt-3 text-white">
              <span>Continue reading...</span>
              <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Paginations */}
      <div className="flex items-center justify-center my-24">
        <div className="flex items-center justify-between w-[100%] md:w-[50%] lg:w-[40%] bg-HeroBG-img bg-cover py-4 px-6 rounded-lg">
          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer">
            <FaArrowLeft />
          </span>
          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer font-sans font-medium">
            1
          </span>
          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer font-sans font-medium">
            ...
          </span>
          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer font-sans font-medium">
            4
          </span>
          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer font-sans font-medium">
            5
          </span>
          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer font-sans font-medium">
            6
          </span>

          <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#8B5cf5] transition-all duration-200 ease-in hover:text-white cursor-pointer">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default Blog1;
