import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/articles/blog-1.jpg";
import img2 from "../../assets/images/articles/blog-2.jpg";
import img3 from "../../assets/images/articles/blog-3.jpg";
function Article() {
  return (
    <>
      <div className="mt-32">
        {/* heading & text */}
        <div className="mb-16">
          <h1 className="text-4xl font-sans font-bold my-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 font-medium  ">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* cards */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex flex-col items-center justify-center gap-7">
            <div className="relative max-w-lg -z-10">
              <img src={img1} alt="" className="rounded-xl w-full" />
              <div className="absolute rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
                <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
                  Want to use Growup in your <br /> organization?
                </h1>
                <div className="flex items-center justify-between mt-3 text-white">
                  <span>Continue reading...</span>
                  <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="relative max-w-lg -z-10">
              <img src={img2} alt="" className="rounded-xl w-full" />
              <div className="absolute rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
                <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
                  Interested in selling your own Apps on <br /> marketplace?
                </h1>
                <div className="flex items-center justify-between mt-3 text-white">
                  <span>Continue reading...</span>
                  <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative max-w-lg -z-10">
            <img src={img3} alt="" className="rounded-xl w-full" />
            <div className="absolute rounded-xl bottom-0 h-32 left-0 w-full px-8  bg-black/50 backdrop-blur-sm p-2 shadow-2xl overflow-hidden">
              <h1 className="hover:text-[#8B5cf5] text-white text-start font-sans font-bold text-lg cursor-pointer ">
                Interested in selling your own Apps on <br /> marketplace?
              </h1>
              <div className="flex items-center justify-between mt-3 text-white">
                <span>Continue reading...</span>
                <FaArrowRight className="text-xl hover:text-[#8B5cf5] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
