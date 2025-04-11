import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Popover } from "@mui/material";
import { navLinks, otherSectonNavLinks } from "../constants/navlinks";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar({ showQRModal }) {
  const [showMbileOtherNav, setShowMbileOtherNav] = useState(false);
  const [showMobleOfferNav, setShowMobleOfferNav] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setShowNavMenu(!showNavMenu);
    if (anchorEl == null) {
      setAnchorEl(event?.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
    setShowNavMenu(!showNavMenu);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="w-full">
      <header className="flex md:hidden justify-between py-[10px]">
        <div className="my-3 ml-6">
          <img
            width={88}
            height={26}
            src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/05/newlogo2024.webp?fit=136%2C41&ssl=1"
          />
        </div>
        <div className="my-3 mr-8">
          <div
            className="p-1 bg-blue-400 rounded-[4px] cursor-pointer"
            onClick={(e) => handleClick(e)}
          >
            {showNavMenu ? <X strokeWidth={2.5} /> : <Menu strokeWidth={2.5} />}
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
                width: "100vw",
                maxWidth: "100vw",
                left: "0 !important",
                right: "0",
                borderRadius: 0,
                mt: 2,
              },
            }}
          >
            <div className="p-4 w-full flex flex-col items-center gap-3 bg-[rgba(247,224,195,0.4)]">
              {navLinks?.map((navLink) => (
                <Link
                  key={navLink.id}
                  to={navLink.path}
                  className="mobile-nav-link"
                >
                  {navLink.name}
                  {navLink?.tag && (
                    <span className="bg-[#10B697] text-[10px] px-[10px] py-[2px] text-white font-[400] rounded-[10px] ml-[12px]">
                      {navLink?.tag}
                    </span>
                  )}
                </Link>
              ))}
              <div
                to="#"
                className="mobile-nav-link flex gap-2 w-full items-center justify-center"
                onClick={() => setShowMbileOtherNav(!showMbileOtherNav)}
              >
                Others
                <ChevronDown className="w-[16px] h-[16px]" strokeWidth={3} />
              </div>
              {showMbileOtherNav ? (
                <>
                  {otherSectonNavLinks?.map((navLink) => (
                    <Link key={navLink.id} to="#" className={`mobile-nav-link`}>
                      {navLink?.name}
                      {navLink?.tag && (
                        <span className="bg-[#10B697] text-[10px] px-[10px] py-[2px] text-white font-[400] rounded-[10px] ml-[12px]">
                          {navLink?.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                  <Link
                    to="#"
                    className="flex w-full gap-2 items-center justify-center mobile-nav-link"
                    onClick={() => setShowMobleOfferNav(!showMobleOfferNav)}
                  >
                    Offers
                    <ChevronDown
                      className="w-[16px] h-[16px]"
                      strokeWidth={3}
                    />
                  </Link>
                  {showMobleOfferNav ? (
                    <>
                      <Link to="#" className={`mobile-nav-link`}>
                        Niyo Global
                      </Link>
                      <Link to="#" className={`mobile-nav-link`}>
                        Niyox
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                  <Link to="#" className={`mobile-nav-link`}>
                    Testimoniol
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </Popover>
        </div>
      </header>
      <header className="hidden md:flex gap-18 py-[10px]">
        <div className="h-[66px] flex items-center ">
          <img
            className="ml-[20px]"
            width={136}
            height={41}
            src="https://i0.wp.com/goniyo.com/wp-content/uploads/2024/05/newlogo2024.webp?fit=136%2C41&ssl=1"
          />
        </div>
        <nav className="flex items-center my-3 mr-8 space-x-4 ">
          {navLinks?.map((navLink) => (
            <Link
              key={navLink.id}
              to={navLink.path}
              className="text-[#000] fill-current pl-6 pr-6 text-base font-normal"
            >
              {navLink.name}
              {navLink?.tag && (
                <span className="bg-[#10B697] text-[10px] px-[10px] py-[2px] text-white font-[400] rounded-[10px] ml-[12px]">
                  {navLink?.tag}
                </span>
              )}
            </Link>
          ))}
          <div className="dropdown dropdown-hover relative">
            <Link
              to="#"
              className="text-black pl-6 pr-6 text-base font-normal flex items-center gap-2"
            >
              Others
              <ChevronDown className="w-[16px] h-[16px]" strokeWidth={3} />
            </Link>

            <ul
              tabIndex={0}
              className="dropdown-content !p-0 menu bg-[rgba(247,224,195,0.8)] flex justify-center flex-col gap-2 rounded-2xl w-[200px] absolute top-[50px] z-10"
            >
              {otherSectonNavLinks?.map((navLink, idx) => (
                <Link
                  key={navLink.id}
                  to="#"
                  className={`text-[#000] ${
                    idx == 0 ? "rounded-t-2xl" : ""
                  } fill-current w-full pl-3 py-2 text-base font-normal hover:bg-[#F7E0C3]`}
                >
                  {navLink?.name}
                  {navLink?.tag && (
                    <span className="bg-[#10B697] text-[10px] px-[10px] py-[2px] text-white font-[400] rounded-[10px] ml-[12px]">
                      {navLink?.tag}
                    </span>
                  )}
                </Link>
              ))}
              <div className="dropdown dropdown-hover dropdown-right w-full hover:bg-[#F7E0C3] py-2">
                <Link
                  to="#"
                  className={`text-[#000] fill-current w-full pl-3  text-base font-normal`}
                >
                  Offers
                </Link>
                <ul
                  tabIndex={1}
                  className="dropdown-content !p-0 menu bg-[rgba(247,224,195,0.8)] flex justify-center flex-col gap-2 rounded-2xl w-[200px] absolute top-[50px] z-10"
                >
                  <Link
                    to="#"
                    className={`text-[#000] rounded-t-2xl fill-current w-full pl-3 py-2 text-base font-normal hover:bg-[#F7E0C3]`}
                  >
                    Niyo Global
                  </Link>
                  <Link
                    to="#"
                    className={`text-[#000] rounded-b-2xl fill-current w-full pl-3 py-2 text-base font-normal hover:bg-[#F7E0C3]`}
                  >
                    Niyox
                  </Link>
                </ul>
              </div>
              <Link
                to="#"
                className={`text-[#000] rounded-b-2xl fill-current w-full pl-3 py-2 text-base font-normal hover:bg-[#F7E0C3]`}
              >
                Testimoniol
              </Link>
            </ul>
          </div>

          <button
            className="bg-[#0E1226] text-[18px] font-medium normal-case no-underline fill-[#FFF] text-[#FFF] rounded-[30px] py-[8px] px-[24px] cursor-pointer"
            onClick={() => showQRModal()}
          >
            Download
          </button>
        </nav>
      </header>
    </div>
  );
}
