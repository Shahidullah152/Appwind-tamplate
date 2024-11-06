import Logo1 from "../../assets/images/Logo/logo1.svg";
import Logo2 from "../../assets/images/Logo/logo2.svg";
import Logo3 from "../../assets/images/Logo/logo3.svg";
import Logo4 from "../../assets/images/Logo/logo4.svg";
import Logo5 from "../../assets/images/Logo/logo6.svg";
import Logo7 from "../../assets/images/Logo/logo7.svg";
function Company() {
  return (
    <>
      <div className="w-full h-auto bg-HeroBG-img mt-28 rounded-2xl py-8">
        <div className="flex items-center justify-center px-4 py-6 flex-wrap gap-y-10 gap-x-12">
          <img
            src={Logo7}
            alt=""
            className="w-28 grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={Logo1}
            alt=""
            className="w-28 grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={Logo2}
            alt=""
            className="w-28 grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={Logo3}
            alt=""
            className="w-28 grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={Logo4}
            alt=""
            className="w-28 grayscale hover:grayscale-0 cursor-pointer"
          />
          <img
            src={Logo5}
            alt=""
            className="w-28 grayscale hover:grayscale-0 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Company;
