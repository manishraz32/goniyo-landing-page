import React from "react";

const ShowQRCode = () => {
  return (
    <div className=" flex flex-col">
      <h1 className="text-center mt-15 text-xl font-semibold text-[#0E1226]">
        Scan QR code to download the app
      </h1>
      <div className="flex justify-center pt-4 pb-8 mb-15">
        <img
          width={207}
          height={207}
          src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/11/goniyo_homepage.png?w=1000&ssl=1"
        />
      </div>
    </div>
  );
};

export default ShowQRCode;
