import React from "react";
import openMenu_icon from "../../assets/Group49134.png";
import ellipse from "../../assets/Ellipse4.png";
import coustomer from "../../assets/customer-service2.png";
import notification from "../../assets/Frame.png";
const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="flex items-center">
      <div className="flex-1 min-w-[40px]">
        <img
          src={openMenu_icon}
          className="w-9 cursor-pointer"
          alt="open Menu icon"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
      <div className="lg:flex-1 md:flex-[3] flex items-center justify-between md:pl-40">
        <div className="flex gap-5 items-center">
          <img
            src={ellipse}
            className="w-[72px] drop-shadow-xl sm:mx-0 mx-2"
            alt=""
          />
          <div className="sm:block hidden">
            <h5 className="text-xl font-bold">Bella Famina</h5>
            <p className="text-lg">Joined2 months ago</p>
          </div>
        </div>
        <div className="flex items-center md:gap-5 gap-2">
          <img
            src={coustomer}
            alt="coustomer img"
            className="w-12 cursor-pointer"
          />
          <div className="relative w-9 h-9 cursor-pointer">
            <span className="absolute w-3 h-3 bg-[#2d55f6] rounded-full right-1 top-1 z-10"></span>
            <img
              src={notification}
              alt="notification"
              className="object-cover absolute left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
