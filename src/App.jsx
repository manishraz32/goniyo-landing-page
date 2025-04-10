import { useState } from "react";
import Navbar from "./components/Navbar";
import { Menu } from "lucide-react";
import MenuIcon from "./assets/MenuIcon";
import { X } from "lucide-react";
import { Popover, Button, Typography } from "@mui/material";

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setShowNavMenu(!showNavMenu);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="w-full">
      <div
        className="relative w-full h-[77vh]  
        bg-[url('https://i0.wp.com/goniyo.com/wp-content/uploads/2024/12/reshomebanner1.webp?fit=360%2C768&ssl=1')] 
        md:bg-[url('https://i0.wp.com/goniyo.com/wp-content/uploads/2024/11/homepgbanner4.webp?fit=1440%2C720&ssl=1')] 
        bg-no-repeat bg-center bg-cover p-[10px]"
      >
        <header className="flex justify-between">
          <div className="my-3 ml-6">
            <div>
              <img
                width={88}
                height={26}
                src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/05/newlogo2024.webp?fit=136%2C41&ssl=1"
              />
            </div>
          </div>
          <div className="my-3 mr-8">
            <div
              className="p-1 bg-blue-400 rounded-[4px] cursor-pointer"
              onClick={() => handleClick()}
            >
              {showNavMenu ? (
                <X strokeWidth={2.5} />
              ) : (
                <Menu strokeWidth={2.5} />
              )}
            </div>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  width: "100vw", // Full viewport width
                  maxWidth: "100vw",
                  left: "0 !important", // Override left alignment
                  right: "0",
                  borderRadius: 0, // Remove border radius if you want sharp edges
                },
              }}
            >
              <div className="p-4 w-full flex flex-col gap-3">
                <Typography>Offer 1</Typography>
                <Typography>Offer 2</Typography>
                <Typography>Offer 3</Typography>
              </div>
            </Popover>
          </div>
        </header>
        <main className="flex flex-col mt-[44px] gap-4">
          <div>
            <h1 className="text-[35px] text-center font-bold normal-case not-italic leading-[45px] tracking-[0.3px] text-[#242424]">
              The Niyo way to travel is here!
            </h1>
          </div>
          <div className="">
            <p className="text-center text-[18px] font-normal text-[#242424]">
              Trusted by 1 million travellers
            </p>
          </div>
        </main>
        <div className="flex justify-center mt-16">
          <img
            width={325}
            height={390}
            src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/10/mock-image-new.webp?fit=1270%2C1524&ssl=1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
