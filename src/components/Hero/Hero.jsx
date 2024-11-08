import HeroImg from "../../assets/images/hero/pii.png";
import { FaPlay } from "react-icons/fa";
function Hero() {
  return (
    <>
      <header className="w-full flex items-center justify-evenly flex-wrap gap-5  mt-12 rounded-xl py-12  px-4   bg-HeroBG-img ">
        {/* contents */}
        <div className="flex  flex-col md:max-w-sm px-4 md:px-0">
          <div>
            <h1 className="text-4xl font-medium font-sans mt-4  tracking-wide text-start">
              Tailwind CSS
            </h1>
            <h1 className="text-4xl font-medium font-sans mt-4  tracking-wide text-start">
              Template for <span className="font-bold">Apps</span>
            </h1>
            <h1 className="text-4xl font-bold font-sans mt-4  tracking-wide text-start">
              and Software
            </h1>
          </div>
          <p className="font-normal text-md text-gray-400 my-6 text-start">
            All in one Tailwind CSS site template for - App and Software sites.
            Comes with all essential components, clean design and everything you
            can expect from a complete app landing page.
          </p>
          <div className="text-start flex">
            <button className="px-5 py-2 rounded-md md:px-10  md:py-4 bg-[#8B5CF6] md:rounded-xl font-medium text-white ">
              Explore
            </button>
            <div className="flex items-center justify-center gap-5 ms-8 group cursor-pointer">
              <div className="sm:w-14 sm:h-14 w-8 h-8 bg-[#8a5cf61c] flex items-center group-hover:bg-[#8B5CF6]   transition-all duration-700 ease-out  justify-center rounded-full">
                <FaPlay className="inline text-[#8B5CF6] group-hover:text-white transition-all duration-700 ease-out " />
              </div>
              <div className="font-medium text-[10px] sm:text-[17px] group-hover:text-[#8B5CF6] transition-all duration-700 ease-out">
                Watch Intro
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="max-w-md">
          <img src={HeroImg} alt="" />
        </div>
      </header>
    </>
  );
}

export default Hero;
