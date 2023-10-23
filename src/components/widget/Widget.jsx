import React from "react";
import success from "../../assets/Vector1.png";
import lose from "../../assets/Vector3.png";
import sales_icon from "../../assets/Frame(1).png";
import employee_icon from "../../assets/Frame(7).png";
import expenses_icon from "../../assets/Frame(6).png";

const Widget = ({type}) => {
    let data;
    switch (type) {
        case "revenue":
            data={
                title:"Total Revenue",
                icon:sales_icon,
                number:"$1620",
                result:success,
                grow:true,

            }
            
            break;
            case "coustomers":
                data={
                    title:"Total Customers",
                    icon:employee_icon,
                    number:"60",
                    result:success,
                    grow:true,
                }
                
                break;
                case "appointments":
            data={
                title:"Total Appointments",
                icon:expenses_icon,
                number:"78",
                result:lose,
                grow:false
            }
            
            break;
    
        default:
            break;
    }
  return (
    <div className="flex items-center flex-1 justify-between rounded-xl gap-5 shadow p-8">
      <div className="left space-y-10">
        <img src={data?.icon} className="w-11" alt="  img" />
        <p className="font-semibold text-lg ">{data?.title}</p>
      </div>
      <div className="right space-y-10 flex items-end flex-col">
        <p className={ data?.grow == true ? "font-semibold text-4xl text-green-600" : "font-semibold text-4xl text-red-600" } >{data?.number}</p>
        <img src={data?.result} className="w-11" alt="img" />
      </div>
    </div>
  );
};

export default Widget;
