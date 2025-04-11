import React from "react";

const SecondSection = () => {
  return (
    <>
      <div
        className="relative w-full h-[100vh] md:h-[140vh]
        bg-[url('https://i0.wp.com/goniyo.com/wp-content/uploads/2024/11/whitebgimg.webp?fit=600%2C972&ssl=1')] 
        md:bg-[url('https://i0.wp.com/goniyo.com/wp-content/uploads/2024/05/scrollbanner2.jpeg?fit=1904%2C1268&ssl=1')] 
        bg-no-repeat bg-center bg-cover md:flex md:flex-col md:items-center"
      >
        <div className=" md:max-w-[1174px] flex flex-col md:flex-row-reverse gap-4 mt-7 md:mt-[100px] px-[15px]">
          <div className="w-full md:w-[50%]">
            <div className="w-full flex flex-col gap-8">
              <div>
                <h1 className="hidden md:flex text-start text-[50px] font-bold leading-[60px]">
                  Experience the power of zero forex benefit
                </h1>
                <h1 className="text-[25px] leading-[40px] font-bold  text-black text-center md:hidden">
                  Experience the power of zero forex markup card
                </h1>
              </div>
              <div>
                <p className="text-center md:text-start text-[16px] font-normal md:text-[22px]">
                  Say bon voyage to forex fees! Niyo debit and credit cards
                  offer <b>zero forex markup fee*</b>, always! Maximise your
                  <b>savings by up to 5%</b>
                  on every swipe abroad.
                </p>
              </div>
              <div className="hidden md:flex">
                <button
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  className="bg-[#0E1226] text-[18px] font-medium normal-case no-underline fill-[#F7E0C3] text-[#F7E0C3] rounded-full py-[10px] px-[45px] cursor-pointer"
                >
                  Save Big Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] mt-[30px] md:mt-0">
            <div className="border border-[#e4e4e4] rounded-[15px] shadow-[7px_7px_20px_#00000003] m-0 w-full md:w-[348px]">
              <div className="p-5 text-center bg-[#e4f5ff] rounded-t-[15px] text-[17px] font-semibold">
                The Niyo zero forex calculator
              </div>
              <div className="py-[20px] px-[10px] w-full bg-white">
                <input
                  type="text"
                  placeholder="$1000"
                  className="input input-xl focus:outline-none w-full md:py-8"
                />
                <div className="py-[13px] flex justify-center">
                  <img src="https://static2.goniyo.com/currency-converter/assets/Img/tertiary.png" />
                </div>
                <input
                  type="text"
                  placeholder="$1000"
                  className="input input-xl focus:outline-none w-full md:py-8"
                />
              </div>
              <div className="p-[10px] bg-[#f4f6f5] rounded-b-[15px] flex justify-between items-center">
                <div className="w-[20%]">
                  <img
                    width={52}
                    height={52}
                    alt="cart-img"
                    src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/10/mock-image-new.webp?fit=1270%2C1524&ssl=1"
                  />
                </div>
                <div className="text-[10px] w-[50%]">
                  Save <b>4%</b> on the above amount with zero forex Niyo Global
                  Card
                </div>
                <div className="text-[10px] text-[#008cff] w-[20%] font-bold">
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
