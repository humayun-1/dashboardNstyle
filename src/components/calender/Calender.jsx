import React from "react";
const style = "text-center calendar-cell sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center hover:bg-blue-600 hover:rounded-full hover:text-white hover:cursor-pointer"
const daysStyle = "text-center text-gray-600 sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center "
const Calender = () => {
  return (
    <div className="bg-[#f9f9f9] sm:p-10 p-5 rounded-2xl shadow-sm xl:w-[48%] lg:w-[45%] w-full ">
      <div className="flex items-center mb-10 justify-between">
        <h2 className="text-xl font-semibold ">July 2023</h2>
        <div className="flex items-center gap-10">
          <span className="p-4 px-5 rounded-xl bg-white hover:bg-slate-200 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </span>
          <span className="p-4 px-5 rounded-xl bg-white hover:bg-slate-200 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 sm:gap-6 gap-4">
        <div className={daysStyle}>Sun</div>
        <div className={daysStyle}>Mon</div>
        <div className={daysStyle}>Tue</div>
        <div className={daysStyle}>Wed</div>
        <div className={daysStyle}>Thu</div>
        <div className={daysStyle}>Fri</div>
        <div className={daysStyle}>Sat</div>

        <div className={style}>1</div>
        <div className={style}>2</div>
        <div className={style}>3</div>
        <div className={style}>4</div>
        <div className={style}>5</div>
        <div className={style}>6</div>
        <div className={style}>7</div>
        <div className={style}>8</div>
        <div className={style}>9</div>
        <div className={style}>10</div>
        <div className={style}>11</div>
        <div className={style}>12</div>
        <div className={style}>13</div>
        <div className="text-center calendar-cel bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center  text-white">14</div>
        <div className={style}>15</div>
        <div className={style}>16</div>
        <div className={style}>17</div>
        <div className={style}>18</div>
        <div className={style}>19</div>
        <div className={style}>20</div>
        <div className={style}>21</div>
        <div className={style}>22</div>
        <div className={style}>23</div>
        <div className={style}>24</div>
        <div className={style}>25</div>
        <div className={style}>26</div>
        <div className={style}>27</div>
        <div className={style}>28</div>
        <div className={style}>29</div>
        <div className={style}>30</div>
      </div>
    </div>
  );
};

export default Calender;
