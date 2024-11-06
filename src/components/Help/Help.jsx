function Help() {
  return (
    <>
      <div className="mt-20">
        {/* heading & text */}
        <div className="mb-16">
          <h1 className="text-4xl font-sans font-bold my-4 mb-2">
            Need Any Help?
          </h1>
          <p className="text-gray-400 font-medium  ">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Form Section start */}
        <div className="w-full p-8 flex items-center justify-center">
          <div className="sm:w-[750px] border-[1px] border-gray-200 shadow-sm rounded-2xl  h-auto py-10 flex items-center justify-center ">
            <form className="flex gap-y-5 sm:gap-y-8 flex-col px-2 ">
              <div className="flex items-center justify-between gap-10 flex-col sm:flex-row  ">
                <div className="w-[400px] sm:w-full  flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label htmlFor="" className="text-lg">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="px-8 py-3  border-[1px] border-gray-200 rounded-lg border-[1px] border-gray-300 focus:border-[#8B5cf5]  outline-none"
                  />
                </div>
                <div className="w-[400px] sm:w-full flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label htmlFor="" className="text-lg">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="px-8 py-3 border-[1px] border-gray-200 rounded-lg border-[1px] border-gray-300 focus:border-[#8B5cf5] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-10 flex-col sm:flex-row  ">
                <div className="w-[400px] sm:w-full  flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label htmlFor="" className="text-lg">
                    Business email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your email"
                    className="px-8 py-3  border-[1px] border-gray-200 rounded-lg border-[1px] border-gray-300 focus:border-[#8B5cf5]  outline-none"
                  />
                </div>
                <div className="w-[400px] sm:w-full flex flex-col  items-cneter sm:items-start sm:flex-col font-sans gap-3">
                  <label htmlFor="" className="text-lg">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="px-8 py-3 border-[1px] border-gray-200 rounded-lg border-[1px] border-gray-300 focus:border-[#8B5cf5] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-10 flex-row  ">
                <div className="w-[400px] sm:w-full  flex flex-col items-center sm:items-start    font-sans gap-3">
                  <label htmlFor="" className="text-lg">
                    What are you looking for?
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Message"
                    className="px-6 py-3 pb-32 w-[100%]  border-[1px] border-gray-200 rounded-lg border-[1px] border-gray-300 focus:border-[#8B5cf5]  outline-none"
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
