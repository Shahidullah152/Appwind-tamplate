import { FaArrowRight } from "react-icons/fa";
import AboutIMG1 from "../../assets/images/About/about-image-1.svg";
import AboutIMG2 from "../../assets/images/About/about-image-2.svg";
function About() {
  return (
    <>
      <div className="mt-32 ">
        {/* About section 1 */}
        <div className="flex items-center justify-center gap-20 mb-20 flex-wrap md:flex-nowrap ">
          {/* image */}
          <div className="md:max-w-lg order-last md:order-first">
            <img src={AboutIMG1} alt="" />
          </div>
          <div className="text-start max-w-lg flex flex-col gap-4">
            <h2 className="text-lg font-sans font-medium text-[#8B5cF5]">
              About Application
            </h2>
            <h2 className="text-3xl font-bold font-sans">
              Instant Payment Transfer <br /> SavesYou Time
            </h2>
            <p className="text-gray-400 font-sans font-medium tracking-wider">
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own
              publishing schedule.
            </p>
            <p className="text-[#8B5CF6] font-bold mt-12 font-sans text-md hover:underline hover:cursor-pointer text-start">
              Know More About App
              <span className="ms-2">
                <FaArrowRight className="inline" />
              </span>
            </p>
          </div>
        </div>
        {/* About section 2 */}
        <div className="flex items-center justify-center gap-20 mb-20 flex-wrap md:flex-nowrap">
          <div className="text-start max-w-lg flex flex-col gap-4">
            <h2 className="text-lg font-sans font-medium text-[#8B5cF5]">
              Easy to Manage Appwind
            </h2>
            <h2 className="text-3xl font-bold font-sans">
              Manage your online wallet <br /> with Appwind.
            </h2>
            <p className="text-gray-400 font-sans font-medium tracking-wider">
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own
              publishing schedule.
            </p>
            <p className="text-[#8B5CF6] font-bold mt-12 font-sans text-md hover:underline hover:cursor-pointer text-start">
              Get the App Now!
              <span className="ms-2">
                <FaArrowRight className="inline" />
              </span>
            </p>
          </div>
          {/* image */}

          <div className="max-w-lg">
            <img src={AboutIMG2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
