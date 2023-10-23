import React from "react";
import product_img from "../../assets/hand_img.png";
const TopWidget = ({type}) => {
  let arr;
  switch (type) {
    case "products":
      arr = {
        mainTitle: "Top Products",
        data: [
          {
            img: product_img,
            name: "Menicure",
            totalNumber: "23 services",
          },
          {
            img: product_img,
            name: "Morain",
            totalNumber: "33 services",
          },
          {
            img: product_img,
            name: "Stack",
            totalNumber: "10 services",
          },
        ],
      };

      break;
    case "team":
     arr = {
        mainTitle: "Top Team Members",
        data: [
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTym1aCO2yUDc5Ga34pCpOpdTwXZrjsybNVdw&usqp=CAU",
            name: "Jon snow",
            totalNumber: "24 Appointments",
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNQoCR25ar100aLMwvi_47aLMb7UD6LPKscs0HNevaQ&s",
            name: "Sansa Stack",
            totalNumber: "19 Appointments",
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30kRURQyZM5Z1tEerJ9Sl4l4STXIXOW5cwJcwGAN5PnE4JwhgkAgtpbXfJbfiAlRHq6U&usqp=CAU",
            name: "Aria Stack",
            totalNumber: "14 Appointments",
          },
        ],
      };

      break;
    default:
      break;
  }
  return (
    <div className="xl:w-[48%] lg:w-[45%] w-full sm:p-10 p-4 rounded-3xl shadow-md "  >
      <div className="flex items-center justify-between">
        <h3 className="sm:text-xl text-base font-bold drop-shadow">{arr.mainTitle}</h3>
        <select name="" id="" className="bg-transparent focus:border-none p-2 drop-shadow-2xl outline-none">
          <option value="month"> This Month</option>
          <option value="week"> This Week</option>
          <option value="year"> This Year</option>
        </select>
      </div>
      <div className="space-y-3">
        {arr.data?.map((data, index) => {
          const isLastElement = index === arr.data.length - 1;
          return <div key={data.id} className={`flex items-center drop-shadow sm:p-5 p-2 ${ isLastElement ? 'pb-0' : ' border-b border-slate-400'} gap-5`}>
            <img
              src={data.img}
              alt="appointment img"
              className="sm:w-20 sm:h-20 w-14 h-14 rounded-2xl drop-shadow shadow object-cover"
            />
            <div className="space-y-2">
              <h5 className="font-semibold sm:text-xl text-sm drop-shadow">{data?.name}</h5>
              <span className="text-slate-600 drop-shadow-lg sm:text-base text-xs">{data?.totalNumber}</span>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default TopWidget;
