import React, { useState } from "react";
import girl_appoint_img from "../../assets/girl_img.png";
import person_appoint_img from "../../assets/Frame(9).png";
import chevron_down from "../../assets/bx_chevron-down.png";
const Appointments = () => {
    const [showAll, setShowAll] = useState(false)
  const AppointmentsData = [
    {
      id: 1,
      img: "../../assets/girl_img.png",
      time: "10:00 AM - 11:00AM",
      name: "Jone Dev",
      with: "Fabiha Arshad",
      date: "13",
      month: "July",
    },
    {
      id: 2,
      img: "../../assets/hand_img.png",
      time: "12:00 PM - 01:00PM",
      name: "Jain Maino",
      with: "Fabiha Arshad",
      date: "14",
      month: "July",
    },
    {
      id: 3,
      img: "../../assets/girl_img.png",
      time: "03:00 PM - 04:00PM",
      name: "Astro Boy",
      with: "Fabiha Arshad",
      date: "15",
      month: "July",
    },
    {
      id: 4,
      img: "../../assets/girl_img.png",
      time: "03:00 PM - 04:00PM",
      name: "Astro Boy",
      with: "Fabiha Arshad",
      date: "15",
      month: "July",
    },
    {
      id: 5,
      img: "../../assets/girl_img.png",
      time: "03:00 PM - 04:00PM",
      name: "Astro Boy",
      with: "Fabiha Arshad",
      date: "15",
      month: "July",
    },  {
        id: 6,
        img: "../../assets/girl_img.png",
        time: "03:00 PM - 04:00PM",
        name: "Astro Boy",
        with: "Fabiha Arshad",
        date: "15",
        month: "July",
      },
      {
        id: 7,
        img: "../../assets/girl_img.png",
        time: "03:00 PM - 04:00PM",
        name: "Astro Boy",
        with: "Fabiha Arshad",
        date: "15",
        month: "July",
      },  {
        id: 8,
        img: "../../assets/girl_img.png",
        time: "03:00 PM - 04:00PM",
        name: "Astro Boy",
        with: "Fabiha Arshad",
        date: "15",
        month: "July",
      },
      {
        id: 9,
        img: "../../assets/girl_img.png",
        time: "03:00 PM - 04:00PM",
        name: "Astro Boy",
        with: "Fabiha Arshad",
        date: "15",
        month: "July",
      },
  ];
  return (
    <div className="xl:w-[48%] lg:w-[45%] w-full space-y-5">
      <h3 className="text-lg font-bold">Today's Appointments</h3>
      <div className={showAll ? 'space-y-3 overflow-x-hidden overflow-y-scroll transition-all sm:h-[430px] h-96 ' : 'space-y-3 overflow-hidden transition-all  sm:h-[400px] h-80'}>
        {showAll ? AppointmentsData.splice(0,AppointmentsData.length).map((data) => {
          return (
            <div
              key={data.id}
              className="flex items-center justify-between w-full bg-[#101928] sm:p-4 p-2  rounded-2xl text-white"
            >
              <div className="flex items-center sm:gap-10 gap-3">
                <img
                  src={girl_appoint_img}
                  alt="appointment img"
                  className="sm:w-20 sm:h-20 w-14 h-14 rounded-2xl"
                />
                <div className="sm:space-y-2 space-y-1">
                  <p className="font-light sm:text-sm text-[10px] text-slate-400">
                    {data?.time}
                  </p>
                  <h5 className="font-semibold sm:text-xl text-base">{data?.name}</h5>
                  <div className="font-light flex items-center text-sm gap-2 text-slate-400">
                    <img
                      src={person_appoint_img}
                      className="w-3 invert"
                      alt="person img"
                    />
                    <span className="sm:text-sm text-xs">{data?.with}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between flex-col gap-2 pr-6">
                <h3 className=" text-4xl font-bold">{data?.date}</h3>
                <h3 className="text-sm font-light">{data?.month}</h3>
              </div>
            </div>
          );
        }) : AppointmentsData.splice(0,3).map((data) => {
            return (
              <div
                key={data.id}
                className="flex items-center justify-between w-full bg-[#101928] sm:p-4 p-2  rounded-2xl text-white"
              >
                <div className="flex items-center sm:gap-10 gap-3">
                  <img
                    src={girl_appoint_img}
                    alt="appointment img"
                    className="sm:w-20 sm:h-20 w-14 h-14 rounded-2xl"
                  />
                  <div className="sm:space-y-2 space-y-1">
                    <p className="font-light sm:text-sm text-xs text-slate-400">
                      {data?.time}
                    </p>
                    <h5 className="font-semibold sm:text-xl text-base">{data?.name}</h5>
                    <div className="font-light flex items-center text-sm gap-2 text-slate-400">
                      <img
                        src={person_appoint_img}
                        className="w-3 invert"
                        alt="person img"
                      />
                      <span className="sm:text-sm text-xs">{data?.with}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-col gap-2 pr-6">
                  <h3 className=" text-4xl font-bold">{data?.date}</h3>
                  <h3 className="text-sm font-light">{data?.month}</h3>
                </div>
              </div>
            );
          })}
      </div>
        <img src={chevron_down} className={showAll ? "m-auto cursor-pointer rotate-180 transition-all" : "m-auto cursor-pointer p-2 transition-all"} alt="chevron_down" onClick={()=>setShowAll(!showAll)}/>
    </div>
  );
};

export default Appointments;
