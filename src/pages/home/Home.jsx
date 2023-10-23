import Navbar from "../../components/navbar/Navbar";
import calender_icon from "../../assets/Frame(6).png";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/charts/Chart";
import Calender from "../../components/calender/Calender";
import SideMenu from "../../components/sideMenu/SideMenu";
import Appointments from "../../components/appointments/Appointments";
import TopWidget from "../../components/widget/TopWidget";
import RecentAppointments from "../../components/appointments/RecentAppointments";
import { useState } from "react";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="homeContainer drop-shadow-lg md:p-[52px] sm:p-10 p-4 w-full">
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div className="flex items-center sm:justify-between justify-center py-16 flex-wrap gap-10 sm:text-left text-center">
            <h2 className="text-3xl font-semibold drop-shadow-xl leading-normal">
              <span className="font-light">Good Morning,</span>{" "}
              <br className="block md:hidden" />
              Bella Famina
            </h2>
            <button className="bg-[#101928] text-white flex items-center gap-4 px-4 py-2 rounded-lg">
              <span className="">
                <img
                  src={calender_icon}
                  className="invert w-7"
                  alt="calender"
                />
              </span>
              New Appointment
            </button>
          </div>
          <div className="widget_container flex justify-between lg:gap-14 md:gap-8 gap-5 flex-wrap">
            <Widget type="revenue" />
            <Widget type="coustomers" />
            <Widget type="appointments" />
          </div>
          <div className="charts py-4">
            <div className="flex items-center justify-between py-20 flex-wrap gap-5">
              <h3 className="text-xl font-bold">Revenue</h3>
              <div className="flex items-center flex-wrap md:gap-10 gap-3">
                <div className="flex items-center md:gap-3 gap-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="">Sales</span>
                </div>
                <div className="flex items-center md:gap-3 gap-1">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="">Appointments</span>
                </div>
                <div className="">
                  <select
                    name=""
                    id=""
                    className="bg-transparent focus:border-none p-2 outline-none"
                  >
                    <option value="12"> Last 12 Month</option>
                    <option value="12"> Last 24 Month</option>
                    <option value="12"> Last 36 Month</option>
                  </select>
                </div>
              </div>
            </div>
            <Chart />
          </div>
          <div className="flex justify-between flex-wrap pt-10 gap-10">
            <Calender />
            <Appointments />
            <TopWidget type="products" />
            <TopWidget type="team" />
            <RecentAppointments />
        </div>
      </div>
    </>
  );
};

export default Home;
