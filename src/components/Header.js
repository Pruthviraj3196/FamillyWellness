import React from "react";

const Header = () => {
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-[#DC143C]">Familly Wellness</h1>
        <p className="text-[#CD5C5C]">Massage Therapy</p>
      </div>
      <div className="bg-slate-400">
        <ul className="flex justify-around text-white font-bold p-3">
            <li className="hover:text-black bg-[#CD5C5C] p-2">Home</li>
            <li className="hover:text-black">About</li>
            <li className="hover:text-black">Services</li>
            <li className="hover:text-black">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
