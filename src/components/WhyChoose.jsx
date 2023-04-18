import React, { Fragment } from "react";
import Secure from "../assets/Images/Secure.svg";
import Convenient from "../assets/Images/Convenient.svg";
import Inclusivity from "../assets/Images/Inclusivity.svg";
import { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { Icon } from '@iconify/react';

const WhyChoose = () => {
  const [currrentIndex, setCurrentIndex] = useState(0);

  return (
    <Fragment>
      <div className="mx-auto w-[90%] my-16 lg:my-[4rem] xl:my-[5rem]">
        <div className="my-4">
          <h1 className="text-[#7F0799] text-3xl sm:text-5xl font-semibold mb-4 leading-[1.7] capitalize">
            Why Choose Saveply?
          </h1>
          <p className="text-lg">Secure, Convenient, and Inclusive</p>
          <p className="text-lg">
            Maximize your savings potential with our platform
          </p>
        </div>

        <div className="relative flex overflow-hidden space-x-2">
          <div
            className={`min-w-full rounded-xl my-12 p-8 md:p-12 flex items-center text-center sm:text-start flex-col-reverse sm:flex-row justify-between duration-700 bg-[#7F0799] ${currrentIndex > 0 ? "translate-x-[-101%]" : "translate-x-0"
              }`}
          >
            <div className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[45%] xl:w-[55%]">
              <h1 className="text-lg sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#FFC100]">
                Secure and Reliable
              </h1>
              <p className="text-sm sm:text-base lg:text-xl my-4 text-white">
                SAVEPLY uses up-to-date encryption and security measures to
                protect the savings, informations and transactions of our users.
                Users can be assured that their funds are safe and secure.
              </p>
            </div>
            <img src={Secure} alt="" className="md:w-[200px] w-[100px] my-4" />
          </div>

          <div
            className={`min-w-full rounded-xl my-12 p-8 md:p-12 flex items-center text-center sm:text-start flex-col-reverse sm:flex-row justify-between duration-700 bg-[#FEC81F] ${currrentIndex === 1 &&
              "translate-x-[-101.7%] sm:translate-x-[-101%] xl:translate-x-[-100.5%]"
              } ${currrentIndex > 1 && "translate-x-[-203%] xl:translate-x-[-201%]"
              }`}
          >
            <div className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[45%] xl:w-[55%]">
              <h1 className="text-lg sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#41473D]">
                Easy and Convenient
              </h1>
              <p className="text-sm sm:text-base lg:text-xl my-4 text-white">
                At SAVEPLY, we understand the value of convenience in managing
                your finances. That's why we have designed our platform to make
                it easy for you to save and track your progress towards your
                financial goals.
              </p>
            </div>
            <img
              src={Convenient}
              alt=""
              className="md:w-[200px] w-[100px] my-4"
            />
          </div>

          <div
            className={`min-w-full rounded-xl my-12 p-8 md:p-12 flex items-center text-center sm:text-start flex-col-reverse sm:flex-row justify-between duration-700 bg-[#070807] ${currrentIndex === 1 &&
              "translate-x-[-101.7%] sm:translate-x-[-101%] xl:translate-x-[-100.5%]"
              } ${currrentIndex === 2 &&
              "translate-x-[-204%] sm:translate-x-[-202%] xl:translate-x-[-201.1%]"
              }`}
          >
            <div className="w-[100%] sm:w-[60%] md:w-[60%] lg:w-[45%] xl:w-[55%]">
              <h1 className="text-lg sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#7E57C2]">
                Inclusivity
              </h1>
              <p className="text-sm sm:text-base lg:text-xl my-4 text-white">
                SAVEPLY caters for every demographic of the African population
                by providing our services both offline and online thereby
                representing everyone from the Tech-savvy Tech-bro to Luddite
                market woman.",
              </p>
            </div>
            <img
              src={Inclusivity}
              alt=""
              className="md:w-[200px] w-[100px] my-4"
            />
          </div>
          <button
            onClick={() => {
              setCurrentIndex(currrentIndex - 1);
            }}
            className="absolute top-[40%] left-2"
          >
            <Icon icon="material-symbols:chevron-left-rounded"
              // size={30}
              className={`text-white ${currrentIndex === 0 ? "hidden" : "block"
                } text-5xl`}
            />
          </button>
          <button
            onClick={() => {
              setCurrentIndex(currrentIndex + 1);
            }}
            className="absolute top-[40%] right-2"
          >
            <Icon icon="material-symbols:chevron-right-rounded"
              // size={50}
              className={`text-white ${currrentIndex === 2 ? "hidden" : "block"
                } text-5xl`}
            />
          </button>
          <div className="absolute bottom-4 left-[35%] sm:left-[40%] lg:left-[45%] flex space-x-4">
            <p
              onClick={() => {
                setCurrentIndex(0);
              }}
              className={`h-[20px] w-[20px] rounded-full duration-700 ${currrentIndex === 0 ? "bg-[#7F0799]" : "bg-[#D9D9D9]"
                }`}
            ></p>
            <p
              onClick={() => {
                setCurrentIndex(1);
              }}
              className={`h-[20px] w-[20px] rounded-full duration-700 ${currrentIndex === 1 ? "bg-[#FEC81F]" : "bg-[#D9D9D9]"
                }`}
            ></p>
            <p
              onClick={() => {
                setCurrentIndex(2);
              }}
              className={`h-[20px] w-[20px] rounded-full duration-700 ${currrentIndex === 2 ? "bg-[#070807]" : "bg-[#D9D9D9]"
                }`}
            ></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhyChoose;
