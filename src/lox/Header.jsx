import React from "react";

const Header = () => {
  return (
    <div className="container bg-emerald-900 flex items-center justify-between h-[70px]">
      <h1 className="text-white text-[25px] font-semibold">GoTrip_Bro!</h1>
      <div className="flex gap-3 items-center">
        <button className="px-4 py-[5px] rounded-lg bg-white">About</button>
        <i class="fa-solid fa-bars-staggered text-white text-[23px]"></i>
      </div>
    </div>
  );
};

export default Header;
