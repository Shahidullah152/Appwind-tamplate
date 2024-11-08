/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaMoon,
  FaPlus,
  FaSun,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DarkLogo from "../../assets/images/Logo/logo4.svg";
import LightLogo from "../../assets/images/Logo/logo3.svg";

function Navbar({ DarkMode, handleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isShowButton, setisShowButton] = useState(false);

  const isOpenDiv = () => {
    setIsOpen(!isOpen);
  };

  const isMenuMouseEnter = () => {
    setIsMenu(true);
  };

  const isMenuMouseLeave = () => {
    setIsMenu(false);
  };

  const showbtnHandle = () => {
    if (window.scrollY > 50) {
      setisShowButton(true);
    } else {
      setisShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showbtnHandle);
    return () => window.removeEventListener("scroll", showbtnHandle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={
          DarkMode
            ? "fixed top-0 left-0 z-50 w-full bg-gray-800/90 backdrop-blur-sm p-2 shadow-xl content-center  h-[60px] md:h-auto"
            : "fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-sm p-2 shadow-sm content-center  h-[60px] md:h-auto"
        }
      >
        <div className="flex items-center justify-around">
          {/* logo div */}
          <div className="">
            {/* <svg
              width="140"
              height="28"
              viewBox="0 0 158 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.3722 19.5568H45.3161L44.0694 23.0973H40.3543L46.837 5.69378H50.8513L57.309 23.0973H53.5939L52.3722 19.5568ZM51.4247 16.8889L48.8317 9.45872L46.2386 16.8889H51.4247Z"
                fill="#07102D"
              />
              <path
                d="M67.4595 9.10965C68.623 9.10965 69.6702 9.39223 70.6011 9.95739C71.5319 10.5225 72.255 11.3453 72.7703 12.4258C73.3022 13.4896 73.5681 14.7446 73.5681 16.1907C73.5681 17.6369 73.3022 18.9002 72.7703 19.9806C72.255 21.0444 71.5319 21.8589 70.6011 22.4241C69.6702 22.9893 68.623 23.2718 67.4595 23.2718C66.2959 23.2718 65.2986 22.9976 64.4674 22.449C63.653 21.8839 63.0712 21.1359 62.7221 20.205V29.6797H59.2065V9.28419H62.7221V12.1515C63.0712 11.2207 63.653 10.481 64.4674 9.93246C65.2986 9.38392 66.2959 9.10965 67.4595 9.10965ZM66.3624 12.1765C65.2986 12.1765 64.4176 12.5422 63.7194 13.2735C63.0379 13.9883 62.6972 14.9607 62.6972 16.1907C62.6972 17.4042 63.0379 18.3766 63.7194 19.1079C64.4176 19.8227 65.2986 20.1801 66.3624 20.1801C67.4595 20.1801 68.3404 19.831 69.0053 19.1329C69.6702 18.4181 70.0027 17.4374 70.0027 16.1907C70.0027 14.9441 69.6702 13.9634 69.0053 13.2486C68.3404 12.5338 67.4595 12.1765 66.3624 12.1765Z"
                fill="#07102D"
              />
              <path
                d="M84.309 9.10965C85.4725 9.10965 86.5197 9.39223 87.4506 9.95739C88.3814 10.5225 89.1045 11.3453 89.6198 12.4258C90.1517 13.4896 90.4177 14.7446 90.4177 16.1907C90.4177 17.6369 90.1517 18.9002 89.6198 19.9806C89.1045 21.0444 88.3814 21.8589 87.4506 22.4241C86.5197 22.9893 85.4725 23.2718 84.309 23.2718C83.1454 23.2718 82.1481 22.9976 81.317 22.449C80.5025 21.8839 79.9207 21.1359 79.5716 20.205V29.6797H76.056V9.28419H79.5716V12.1515C79.9207 11.2207 80.5025 10.481 81.317 9.93246C82.1481 9.38392 83.1454 9.10965 84.309 9.10965ZM83.2119 12.1765C82.1481 12.1765 81.2671 12.5422 80.569 13.2735C79.8875 13.9883 79.5467 14.9607 79.5467 16.1907C79.5467 17.4042 79.8875 18.3766 80.569 19.1079C81.2671 19.8227 82.1481 20.1801 83.2119 20.1801C84.309 20.1801 85.19 19.831 85.8549 19.1329C86.5197 18.4181 86.8522 17.4374 86.8522 16.1907C86.8522 14.9441 86.5197 13.9634 85.8549 13.2486C85.19 12.5338 84.309 12.1765 83.2119 12.1765Z"
                fill="#07102D"
              />
              <path
                d="M112.678 9.28419L108.963 23.0973H105.073L102.106 13.0491L99.0641 23.0973H95.1745L91.4843 9.28419H95L97.244 19.9557L100.311 9.28419H104.026L107.118 19.9557L109.387 9.28419H112.678Z"
                fill="#07102D"
              />
              <path
                d="M114.031 5.31977C114.031 4.75462 114.231 4.2975 114.63 3.94844C115.028 3.58275 115.552 3.3999 116.2 3.3999C116.849 3.3999 117.372 3.58275 117.771 3.94844C118.17 4.2975 118.37 4.75462 118.37 5.31977C118.37 5.86831 118.17 6.32542 117.771 6.69111C117.372 7.04018 116.849 7.21471 116.2 7.21471C115.552 7.21471 115.028 7.04018 114.63 6.69111C114.231 6.32542 114.031 5.86831 114.031 5.31977ZM117.946 9.28419V23.0973H114.43V9.28419H117.946Z"
                fill="#07102D"
              />
              <path
                d="M129.354 9.08472C130.95 9.08472 132.221 9.60832 133.169 10.6555C134.116 11.7027 134.59 13.1738 134.59 15.0687V23.0973H131.099V15.4677C131.099 14.3706 130.817 13.5229 130.252 12.9245C129.687 12.3094 128.914 12.0019 127.933 12.0019C126.936 12.0019 126.138 12.3261 125.539 12.9743C124.941 13.6226 124.642 14.5534 124.642 15.7669V23.0973H121.126V9.28419H124.642V12.0518C125.007 11.1209 125.606 10.3979 126.437 9.88259C127.285 9.35068 128.257 9.08472 129.354 9.08472Z"
                fill="#07102D"
              />
              <path
                d="M143.094 9.10965C144.258 9.10965 145.247 9.38392 146.061 9.93246C146.892 10.481 147.491 11.2207 147.856 12.1515V4.64657H151.347V23.0973H147.856V20.205C147.491 21.1359 146.892 21.8839 146.061 22.449C145.247 22.9976 144.258 23.2718 143.094 23.2718C141.93 23.2718 140.883 22.9893 139.952 22.4241C139.022 21.8589 138.29 21.0444 137.758 19.9806C137.243 18.9002 136.985 17.6369 136.985 16.1907C136.985 14.7446 137.243 13.4896 137.758 12.4258C138.29 11.3453 139.022 10.5225 139.952 9.95739C140.883 9.39223 141.93 9.10965 143.094 9.10965ZM144.191 12.1765C143.094 12.1765 142.213 12.5338 141.548 13.2486C140.883 13.9634 140.551 14.9441 140.551 16.1907C140.551 17.4374 140.883 18.4181 141.548 19.1329C142.213 19.831 143.094 20.1801 144.191 20.1801C145.255 20.1801 146.128 19.8227 146.809 19.1079C147.507 18.3766 147.856 17.4042 147.856 16.1907C147.856 14.9607 147.507 13.9883 146.809 13.2735C146.128 12.5422 145.255 12.1765 144.191 12.1765Z"
                fill="#07102D"
              />
              <path
                d="M157.45 19.4321V23.0973H153.66V19.4321H157.45Z"
                fill="#07102D"
              />
              <path
                d="M29.0209 4.9792C25.8328 1.79107 21.5087 1.70198e-07 17 0C12.4914 -1.70198e-07 8.16733 1.79107 4.9792 4.9792C1.79107 8.16733 5.10595e-07 12.4914 0 17C-5.10595e-07 21.5087 1.79107 25.8328 4.9792 29.0209L29.0209 4.9792Z"
                fill="#8B5CF6"
              />
              <path
                opacity="0.5"
                d="M4.9792 4.979C1.79107 8.16713 2.23964e-07 12.4912 0 16.9999C-2.23964e-07 21.5085 1.79107 25.8326 4.9792 29.0207C8.16733 32.2088 12.4914 33.9999 17 33.9999C21.5087 33.9999 25.8328 32.2088 29.0209 29.0207L4.9792 4.979Z"
                fill="#8B5CF6"
              />
            </svg> */}
            <img src={DarkMode ? DarkLogo : LightLogo} alt="" />
          </div>
          {/* menus */}
          <div className="hidden lg:block">
            <ul className="flex list-none">
              <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                <a href="">Features</a>
              </li>
              <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                <a href="">About</a>
              </li>
              <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                <a href="">Pricing</a>
              </li>
              <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                <a href="">Reveiws</a>
              </li>
              <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                <a href="">Contact</a>
              </li>
              <li
                className="text-gray-400 group  mx-5 text-md relative"
                onMouseEnter={isMenuMouseEnter}
                // onMouseLeave={isMenuMouseLeave}
              >
                <a href="" className="hover:text-[#8b5cf6]">
                  Pages{" "}
                  <span>
                    <FaAngleDown className="inline" />
                  </span>
                </a>
                {/* Toggle-able Div */}
                {isMenu && (
                  <div
                    onMouseEnter={isMenuMouseEnter}
                    onMouseLeave={isMenuMouseLeave}
                    className={
                      DarkMode
                        ? "mt-5 p-6 w-[250px] bg-gray-800   rounded-md shadow-sm shadow-indigo-400 transition duration-300 ease-in-out absolute -right-24"
                        : "mt-5 p-6 w-[250px] bg-white   rounded-md shadow-sm shadow-indigo-400 transition duration-300 ease-in-out absolute -right-24"
                    }
                  >
                    <ul className="flex flex-col gap-4 items-start">
                      <li className=" hover:text-[#8b5cf6] cursor-pointer transition-all duration-200 ease-in font-sans">
                        <NavLink to="/blog1">Blog Grid Page</NavLink>
                      </li>
                      <li className=" hover:text-[#8b5cf6] cursor-pointer transition-all duration-200 ease-in font-sans">
                        <NavLink to="/blog2">Blog Details Page</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* btns */}
          <div className="flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <div className="flex items-center justify-between gap-4">
                <button className="px-8 py-4 rounded-md bg-[#8b5cf6] text-white hover:shadow-lg hover:shadow-[#8a5cf643]">
                  Download
                </button>
                <span onClick={handleDarkMode}>
                  {DarkMode ? (
                    <FaSun className="inline text-2xl text-[#f6c55c]" />
                  ) : (
                    <FaMoon className="inline text-2xl text-[#8b5cf6]" />
                  )}
                </span>
              </div>
            </div>
            <span onClick={handleDarkMode} className="md:hidden">
              {DarkMode ? (
                <FaSun className="inline text-2xl text-[#f6c55c]" />
              ) : (
                <FaMoon className="inline text-2xl text-[#8b5cf6]" />
              )}
            </span>
            <span
              className="text-[30px]   lg:hidden cursor-pointer text-[#8b5cf6]"
              onClick={isOpenDiv}
            >
              {isOpen ? <FaPlus /> : <FaBars />}
            </span>
            {/* Toggle-able Div */}
            {isOpen && (
              <div
                className={
                  DarkMode
                    ? "mt-5 p-6 w-full md:w-1/3 bg-gray-800 lg:hidden   rounded-lg shadow-2xl transition duration-300 ease-in-out absolute top-14 right-0 md:right-10"
                    : "mt-5 p-6 w-full md:w-1/3 bg-white lg:hidden   rounded-lg shadow-xl transition duration-300 ease-in-out absolute top-14 right-0 md:right-10"
                }
              >
                <ul className=" list-none flex flex-col gap-6 items-center">
                  <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                    <a href="">Features</a>
                  </li>
                  <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                    <a href="">About</a>
                  </li>
                  <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                    <a href="">Pricing</a>
                  </li>
                  <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                    <a href="">Reveiws</a>
                  </li>
                  <li className="text-gray-400 hover:text-[#8b5cf6] mx-5 text-md">
                    <a href="">Contact</a>
                  </li>
                  <li
                    className="text-gray-400 group  mx-5 text-md relative"
                    onMouseEnter={isMenuMouseEnter}
                  >
                    <a href="" className="hover:text-[#8b5cf6]">
                      Pages{" "}
                      <span>
                        <FaAngleDown className="inline" />
                      </span>
                    </a>
                    {/* Toggle-able Div */}
                    {isMenu && (
                      <div
                        onMouseEnter={isMenuMouseEnter}
                        onMouseLeave={isMenuMouseLeave}
                        className={
                          DarkMode
                            ? "mt-5 p-6 w-[250px] bg-gray-800   rounded-md shadow-sm shadow-indigo-400 transition duration-300 ease-in-out absolute -right-24"
                            : "mt-5 p-6 w-[250px] bg-white   rounded-md shadow-sm shadow-indigo-400 transition duration-300 ease-in-out absolute -right-24"
                        }
                      >
                        <ul className="flex flex-col gap-4 items-start">
                          <li className=" hover:text-[#8b5cf6] cursor-pointer transition-all duration-200 ease-in font-sans">
                            <NavLink to="/blog1">Blog Grid Page</NavLink>
                          </li>
                          <li className=" hover:text-[#8b5cf6] cursor-pointer transition-all duration-200 ease-in font-sans">
                            <NavLink to="/blog2">Blog Details Page</NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* scroll to top btn */}

      {isShowButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 z-50 animate-pulse right-8 bg-[#8B5cF5] text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-[#5431a4]"
        >
          <FaAngleUp className="text-2xl" />
        </button>
      )}
    </>
  );
}

export default Navbar;
