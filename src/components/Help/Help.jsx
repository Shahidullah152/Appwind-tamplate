/* eslint-disable react/prop-types */
function Help({ DarkMode }) {
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
            Need Any Help?
          </h1>
          <p className="text-gray-400 font-medium  ">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Form Section start */}
        <div className="w-full p-1 sm:p-8 flex items-center justify-center mb-4">
          <div className="w-[100%] sm:w-[750px]  border-[1px] border-gray-200 shadow-sm rounded-2xl  h-auto py-10 px-2 flex items-center justify-center ">
            <form className="flex gap-y-5 sm:gap-y-8 flex-col px-2 w-full">
              <div className="flex items-center justify-between gap-10 flex-col  sm:flex-row  ">
                <div className="w-full sm:w-full  flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label
                    htmlFor=""
                    className={`"text-lg ${
                      DarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className={`px-8 py-3   ${
                      DarkMode ? "bg-gray-700 border-gray-500" : "bg-white"
                    } border-gray-200 rounded-lg border-[1px] w-full  focus:border-[#8B5cf5]  outline-none`}
                  />
                </div>
                <div className="w-full sm:w-full flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label
                    htmlFor=""
                    className={`"text-lg ${
                      DarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className={` px-8 py-3 border-[1px] w-full  rounded-lg border-[1px] ${
                      DarkMode
                        ? "bg-gray-700 border-gray-500 "
                        : "border-gray-300"
                    } focus:border-[#8B5cf5] outline-none`}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-10 flex-col sm:flex-row  ">
                <div className="w-full sm:w-full  flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label
                    htmlFor=""
                    className={`"text-lg ${
                      DarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Business email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your email"
                    className={`px-8 py-3   ${
                      DarkMode ? "bg-gray-700 border-gray-500" : "bg-white"
                    } border-gray-200 rounded-lg border-[1px] w-full  focus:border-[#8B5cf5]  outline-none`}
                  />
                </div>
                <div className="w-full sm:w-full flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label
                    htmlFor=""
                    className={`"text-lg ${
                      DarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className={` px-8 py-3 border-[1px] w-full border-gray-200 rounded-lg border-[1px] ${
                      DarkMode
                        ? "bg-gray-700 border-gray-500 "
                        : "border-gray-300"
                    } focus:border-[#8B5cf5] outline-none`}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-10 flex-row  ">
                <div className="w-full sm:w-full  flex flex-col items-center sm:items-start    font-sans gap-3">
                  <label
                    htmlFor=""
                    className={`"text-lg ${
                      DarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    What are you looking for?
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Message"
                    className={`px-6 py-3 pb-32 w-[100%] ${
                      DarkMode ? "bg-gray-700 border-gray-500" : "bg-white"
                    }   border-gray-200 rounded-lg border-[1px]  focus:border-[#8B5cf5]  outline-none`}
                  />
                </div>
              </div>
              <div className="my-6">
                <button className="px-10 py-3 rounded-xl transition-all duration-300 ease-in shadow-xl hover:shadow-[#8a5cf555] bg-[#8B5cf5] text-white font-medium">
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Form Section end */}
      </div>
    </>
  );
}

export default Help;
