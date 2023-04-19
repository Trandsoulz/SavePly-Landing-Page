import pie from "../assets/Images/pie_chart.svg";
// import naira from "../assets/Images/nigeria-naira-icon.svg";
import largeImg from "../assets/Images/save-money.png";
import "../styles/styles.css";

export default function Features() {
  return (
    <div className="lg:p-20  px-5 !leading-normal md:text-xl">
      <div className="space-y-3">
        <h4 className="text-purp md:text-4xl text-6xl font-bold">
          Our Key Features
        </h4>
        <p className="md:w-[500px]">
          Discover the power of Saveply to revolutionalize and achieve your
          financial goals
        </p>
      </div>
      <div className="bg-purp grid md:flex grid-col-2 md:p-20 p-10 w-full mt-10 items-center justify-between text-white rounded-3xl  gap-10">
        <div>
          <div>
            <h4 className="text-yello md:text-[36px] font-semibold">
              Total Income
            </h4>
            <h4 className="flex gap-1 items-center">
              <span>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  fill="#fff"
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 115.09 122.88"
                >
                  <title>nigeria-naira</title>
                  <path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" />
                </svg>
              </span>
              115,664.00
            </h4>
          </div>
          <div className="my-5">
            <h4 className="font-semibold text-yello">Expenses</h4>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-4 bg-[#fff176] rounded"></div>
                <h4>Food</h4>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-4 bg-[#d38200] rounded"></div>
                <h4>Transport</h4>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-4 bg-[#7e57c2] rounded"></div>
                <h4>Data</h4>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-yello">Net Income</h4>
            <div className="flex items-center gap-2">
              <div className="w-8 h-4 bg-[#ff0799] rounded"></div>
              <h4 className="flex gap-1 items-center">
                <span>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    fill="#fff"
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 115.09 122.88"
                  >
                    <title>nigeria-naira</title>
                    <path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" />
                  </svg>
                </span>
                46,265.60
              </h4>
            </div>
          </div>
        </div>
        <div>
          <img src={pie} alt="" />
        </div>
        <div className="space-y-3 col-span-2">
          <h4 className="text-yello font-bold md:text-5xl text-4xl">
            Budget Tracking
          </h4>
          <p className="md:w-[400px]">
            Say goodbye to overspending, and hello to financial freedom.
          </p>
        </div>
      </div>
      <div className="grid grid-col-1 gap-5 w-full">
        <div className="mt-5 flex flex-col md:flex-row gap-5 md:gap-20 rounded-2xl items-center bg-yello text-black p-5 md:p-20 w-full">
          <div>
            <h4 className="font-bold md:text-5xl text-3xl">Target Savings</h4>
            <p className="md:text-2xl md:mt-5 mt-3 leading-normal">
              With customizable savings plans and a user-friendly interface
              saving has never been this effortless.
            </p>
          </div>
          <div className="bg-white w-full p-5 text-base rounded-xl gap-10 items-center flex">
            <div className="relative">
              <div className="h-32 w-32 absolute border-purp rounded-full border-[20px] progress-outer"></div>
              <div className="h-32 w-32 border-purp/25 rounded-full border-[20px]"></div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-2xl">School Fees</h4>
              <h4>75%</h4>
              <h4>Target Amount: 100,000</h4>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl flex flex-col md:flex-row gap-5 md:gap-20 md:items-center bg-black p-5 md:p-20 w-full relative overflow-hidden text-white">
          <div className="md:order-2">
            <h4 className="font-bold md:text-5xl text-3xl">Personal Wallet</h4>
            <p className="md:text-2xl md:mt-10 mt-3 font-normal leading-normal">
              Our secure and user-friendly digital wallet allows you to store,
              send and receive money with just a few taps on you smartphone.
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-20 h-20 bg-purp/70 rounded-full bottom-4 left-4" />
            <div className="absolute w-20 h-20 bg-purp/70 rounded-full right-4 bottom-32" />
            <div className="w-full p-7 space-y-5 rounded-2xl backdrop-blur-[10px] border border-white/50 bg-white/10">
              <h4 className="font-medium text-sm">Wallet Balance</h4>
              <span>🇳🇬</span>
              <h4 className="md:text-6xl text-4xl flex gap-2 items-center m-auto">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  fill="#fff"
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 115.09 122.88"
                >
                  <title>nigeria-naira</title>
                  <path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" />
                </svg>
                1,000,000.00
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl mt-10 bg-purp items-center flex flex-col md:flex-row">
        <div className="w-full ">
          <img
            src={largeImg}
            className="md:rounded-l-lg rounded-t-lg"
            alt="Coin img"
          />
        </div>
        <div className="w-full space-y-5 text-white p-6 m-3 h-full">
          <h4 className="font-bold text-3xl md:text-4xl md:w-96 text-yello ">
            Save simply, <br /> not harder.
          </h4>
          <p className="">
            Saving money doesn't have to be complicated. With Saveply, you can
            save more without breaking a sweat. Making it easy for you to reach
            your financial goals.
          </p>
          {/* <button>Learn More</button> */}
        </div>
      </div>
    </div>
  );
}
