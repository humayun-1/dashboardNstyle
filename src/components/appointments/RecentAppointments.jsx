import React from "react";
import product_img from "../../assets/hand_img.png";
const RecentAppointments = () => {
  const Appointments = [
    {
      img: product_img,
      name: "jone snow",
      date: "1 May 2023",
      service: "Health Care",
      earning: "100$",
      sales: 10,
      employee: "Asif Ali",
    },
    {
      img: product_img,
      name: "Aris Stack",
      date: "2 May 2023",
      service: "Skin Care",
      earning: "920$",
      sales: 10,
      employee: "Imran Kahn",
    },
    {
      img: product_img,
      name: "Sansa Stack",
      date: "3 May 2023",
      service: "Hair Care",
      earning: "300$",
      sales: 12,
      employee: "Nawaz Shraif",
    },
    {
      img: product_img,
      name: "Ned Stack",
      date: "4 May 2023",
      service: "Body Care",
      earning: "1000$",
      sales: 13,
      employee: "Fazal Ul Rahman",
    },
    {
      img: product_img,
      name: "Joffri",
      date: "5 May 2023",
      service: "Any Care",
      earning: "330$",
      sales: 10,
      employee: "Asim Monir",
    },
  ];
  return (
    <div className="rounded-3xl bg-white lg:p-10 p-5 w-full space-y-10 lg:overflow-hidden overflow-x-scroll">
      <h3 className="sm:text-3xl text-2xl font-medium">Recent Appointments</h3>
      <div className="overflow-y-hidden-hidden min-w-[600px]">
        <div className="flex items-center justify-between py-3 lg:px-5 px-3 rounded-xl bg-[#F6F6F6]">
          <span className="flex-[2] lg:flex-1">Services</span>
          <span className="flex-1 flex items-center justify-center">
            Employee
          </span>
          <span className="flex-1 flex items-center justify-center">Sales</span>
          <span className="flex-1 flex items-center justify-center">
            Earning
          </span>
        </div>
        {Appointments.map((data, index) => {
          const isLastElement = index === Appointments.length - 1;
          return (
            <div
              id={index}
              className={`flex items-center justify-between lg:py-3 py-1 lg:px-5 px-0 ${
                isLastElement ? "pb-0" : " border-b border-slate-400"
              }`}
            >
              <div className="flex-[2] lg:flex-1 flex items-center drop-shadow py-5 gap-5">
                <img
                  src={data.img}
                  alt="appointment img"
                  className="sm:w-20 sm:h-20 w-14 h-14 rounded-2xl drop-shadow shadow object-cover"
                />
                <div className="space-y-2">
                  <h5 className="font-semibold sm:text-xl text-base drop-shadow">
                    {data?.name}
                  </h5>
                  <span className="text-slate-600 sm:text-base text-sm drop-shadow-lg">
                    {data?.service}
                  </span>
                </div>
              </div>
              <span className="flex-1 flex items-center justify-center">
                {data?.employee}
              </span>
              <span className="flex-1 flex items-center justify-center">
                {data?.sales}
              </span>
              <div className="flex-1 flex items-center justify-center">
                <span className="px-3 py-2 bg-[#F2F7F7] text-[#5679FF] rounded-md">
                  {data.earning}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentAppointments;
