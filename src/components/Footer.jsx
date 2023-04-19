import { Fragment } from "react";
import SavePlyLogo from "../assets/Images/SavePly_logo.svg";
import Twitter from "../assets/Images/Twitter.svg";
import Facebook from "../assets/Images/Facebook.svg";
import Instagram from "../assets/Images/Instagram.svg";
import LinkedIn from "../assets/Images/LinkedIn.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-[90%] mx-auto font-semibold py-8">
        <img src={SavePlyLogo} alt="" className="md:w-[200px] w-[100px]" />
        <div className="max-w-[400px] my-12 lg:my-0">
          <ul className="flex justify-between md:items-center mb-4 text-[#7F0799]">
            <li>Home</li>
            <li>Why Us</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
          <div className=" rounded max-w-[400px] flex justify-between p-1 border-[#7F0799] border-2">
            <input type="text" name="" id="" className="outline-none " />
            <button className="bg-[#7F0799] rounded text-white p-2 outline-none">
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-[#7F0799]">Contact us:</p>
          <ul className="my-2">
            <li>
              {" "}
              <a href="mailto:saveplyafrica@gmail.com">
                saveplyafrica@gmail.com
              </a>
            </li>
            <li className="mt-2">
              {" "}
              <a href="tel:+2348166931080">+2348166931080</a>
            </li>
          </ul>
          <p className="text-[#7F0799]">Follow us:</p>
          <div className="flex justify-between space-x-7 my-4 w-[200px]">
            <a
              href="https://twitter.com/saveplyafrica?t=bATMrkhX3MIKUOkfYfYNTg&s=09"
              target="_blank"
            >
              <img src={Twitter} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/saveply" target="_blank">
              <img src={LinkedIn} alt="" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089687713444&mibextid=ZbWKwL"
              target="_blank"
            >
              <img src={Facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/saveply.ng" target="_blank">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
