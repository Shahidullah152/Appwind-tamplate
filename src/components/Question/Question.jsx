/* eslint-disable react/prop-types */
function Question({ DarkMode }) {
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
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 font-medium  ">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* cards */}
        <div className="flex items-center justify-center gap-7 flex-wrap">
          <div className="w-[100%] lg:w-[500px]  shadow-sm rounded-2xl border-[1px] border-gray-200 py-6 px-12 flex flex-col gap-16">
            <div className="text-start">
              <h1
                className={`"font-sans text-2xl font-bold mb-6 ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Which plan is suitable for me?
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                Sed tempor mi at nunc commodo, quis tincidunt turpis finibus.
                Pellentesque congue neque justo.
              </p>
            </div>
            <div className="text-start">
              <h1
                className={`"font-sans text-2xl font-bold mb-6 ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Will I get free future updates?
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                Maecenas tincidunt risus et interdum lobortis. Nunc nec eros
                mattis diam suscipit tristique at sit amet elit.
              </p>
            </div>
            <div className="text-start">
              <h1
                className={`"font-sans text-2xl font-bold mb-6 ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Do you provide support?
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                Maecenas tincidunt risus et interdum lobortis. Nunc nec eros
                mattis diam suscipit tristique.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[500px]  shadow-sm rounded-2xl border-[1px] border-gray-200 py-6 px-12 flex flex-col gap-16">
            <div className="text-start">
              <h1
                className={`"font-sans text-2xl font-bold mb-6 ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Which plan is suitable for me?
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                Sed tempor mi at nunc commodo, quis tincidunt turpis finibus.
                Pellentesque congue neque justo.
              </p>
            </div>
            <div className="text-start">
              <h1
                className={`"font-sans text-2xl font-bold mb-6 ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Will I get free future updates?
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                Maecenas tincidunt risus et interdum lobortis. Nunc nec eros
                mattis diam suscipit tristique at sit amet elit.
              </p>
            </div>
            <div className="text-start">
              <h1
                className={`"font-sans text-2xl font-bold mb-6 ${
                  DarkMode ? "text-white" : "text-black"
                }`}
              >
                Do you provide support?
              </h1>
              <p className="text-gray-400 font-sans font-medium">
                Maecenas tincidunt risus et interdum lobortis. Nunc nec eros
                mattis diam suscipit tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
