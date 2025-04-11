import React, { Suspense } from "react";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
const ShowQRCode = React.lazy(() => import("../components/ShowQRCode"));
import { motion } from "framer-motion";
import SecondSection from "../components/SecondSection";

const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <div
          className="relative w-full h-[77vh] md:h-[77vh]
        bg-[url('https://i0.wp.com/goniyo.com/wp-content/uploads/2024/12/reshomebanner1.webp?fit=360%2C768&ssl=1')] 
        md:bg-[url('https://i0.wp.com/goniyo.com/wp-content/uploads/2024/11/homepgbanner4.webp?fit=1440%2C720&ssl=1')] 
        bg-no-repeat bg-center bg-cover  md:flex md:flex-col md:items-center"
        >
          <div className="md:min-w-[1140px]">
            <Navbar
              showQRModal={() => {
                document.getElementById("my_modal_2").showModal();
              }}
            />
            <div className="flex flex-col gap-16 md:flex-row -mt-18 md:mt-[80px] md:gap-[130px]">
              <div className="flex flex-col mt-[100px] gap-4">
                <div className="md:w-[530px] md:h-[140px]">
                  <h1 className="text-[35px] md:text-[60px] text-center md:text-left font-bold normal-case not-italic leading-[45px] md:leading-[70px] tracking-[0.3px] md:tracking-[3px] text-[#242424]">
                    The Niyo way to travel is here!
                  </h1>
                </div>
                <div className="md:w-[530px] md:h-[42px] md:mt-3">
                  <p className="text-center md:text-left text-[18px] md:text-[30px] font-normal text-[#242424]">
                    Trusted by 1 million travellers
                  </p>
                </div>
                <div className="hidden md:flex flex-start md:mt-3">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                    className="bg-[#0E1226] text-[18px] font-medium normal-case no-underline fill-[#F7E0C3] text-[#F7E0C3] rounded-full py-[10px] px-[45px] cursor-pointer"
                  >
                    Get Your First Card
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box rounded-3xl w-[480px]">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          <X />
                        </button>
                      </form>
                      <Suspense fallback={<div>Loading...</div>}>
                        <ShowQRCode />
                      </Suspense>
                    </div>
                  </dialog>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.img
                  src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/10/mock-image-new.webp?fit=1270%2C1524&ssl=1"
                  alt="card-image"
                  className="w-[325px] h-[390px] md:w-[399px] md:h-[478px] hidden md:flex"
                  animate={{
                    y: ["-5%", "-10%", "-5%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  className="w-[325px] h-[390px] md:w-[399px] md:h-[478px] md:hidden"
                  src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/10/mock-image-new.webp?fit=1270%2C1524&ssl=1"
                  alt="card-image"
                />
              </div>
            </div>
          </div>
        </div>
        {/* secondSection */}
        <SecondSection />
        <div className="fixed rounded-[34px_8px_34px_34px] shadow-[0_5px_4px_0_rgba(0,0,0,0.26)] bottom-[20px] right-[30px] z-[9995] cursor-pointer">
          <img
            width={60}
            height={60}
            src="https://assetscdn-wchat.in.freshchat.com/static/assets/freshchat-line.7327fc2a43ff6a857c38e96ffa7e00f2.svg"
          />
        </div>
        <div className="fixed bottom-[20px] right-[30px] z-[9996] cursor-pointer"></div>
      </div>
    </>
  );
};

export default HomePage;
