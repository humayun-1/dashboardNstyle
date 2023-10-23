import React from "react";
import logo from "../../assets/logo.png";
import dashboard_icon from "../../assets/Frame(5).png";
import calender_icon from "../../assets/Frame(6).png";
import sales_icon from "../../assets/bytesize_tag.png";
import employee_icon from "../../assets/expenses1.png";
import expenses_icon from "../../assets/female-nurse-svgrepo-com1.png";
import customers_icon from "../../assets/Frame(7).png";
import products_icon from "../../assets/icon-park-solid_perfume.png";
import hrm_icon from "../../assets/hr-manager1.png";
import crm_icon from "../../assets/crm-crm-svgrepo-com1.png";
import automation_icon from "../../assets/circular-arrows1.png";
import marketing_icon from "../../assets/la_bullhorn.png";
import reports_icon from "../../assets/Frame(8).png";
import myAccount_icon from "../../assets/Frame(9).png";
import colseMenu_icon from "../../assets/Group49133.png";
const SideMenu = ({openMenu, setOpenMenu}) => {
  return (
    <div className={`sideMenu z-50 sm:w-96 w-80 px-8 fixed bg-white h-screen overflow-y-scroll transition-all ${openMenu ? 'left-0' : '-left-[200%]'}`}>
      <div className=" pt-4 flex items-center justify-between ">
        <img src={logo} className="w-[180px] cursor-pointer" alt="logo img" />
        <img src={colseMenu_icon} className="cursor-pointer" alt="" onClick={()=>setOpenMenu(!openMenu)}/>
      </div>
      <div className="menubox  pt-5">
        <ul className="space-y-[2px]">
          <li className="flex items-center gap-5 cursor-pointer rounded-xl bg-[#101928] text-white p-3">
            <img src={dashboard_icon} alt="Dashboard" className="w-7" />
            <span className="text-xl">Dashboard</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={calender_icon} alt="Calender" className="w-7" />
            <span className="text-xl">Calender</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={sales_icon} alt="Sales" className="w-7" />
            <span className="text-xl">Sales</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={expenses_icon} alt="Expenses" className="w-7" />
            <span className="text-xl">Expenses</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={employee_icon} alt="Employee" className="w-7" />
            <span className="text-xl">Employee</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={customers_icon} alt="Customers" className="w-7" />
            <span className="text-xl">Customers</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={products_icon} alt="Products" className="w-7" />
            <span className="text-xl">Products</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={hrm_icon} alt="HRM" className="w-7" />
            <span className="text-xl">HRM</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={crm_icon} alt="CRM" className="w-7" />
            <span className="text-xl">CRM</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={automation_icon} alt="Automation" className="w-7" />
            <span className="text-xl">Automation</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={marketing_icon} alt="Marketing" className="w-7" />
            <span className="text-xl">Marketing</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={reports_icon} alt="Reports" className="w-7" />
            <span className="text-xl">Reports</span>
          </li>
          <li className="flex items-center gap-5 cursor-pointer rounded-xl p-3 hover:bg-slate-100">
            <img src={myAccount_icon} alt="My Account" className="w-7" />
            <span className="text-xl">My Account</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
