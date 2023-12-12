import React from "react";
import info from "../assets/info.jpg";
import { HashLink } from "react-router-hash-link";

const CardThree = () => {
  return (
    <div className="mt-12 p-4 flex w-full">
      <div className="h-fit p-4 shadow-xl rounded-xl mt-8 flex flex-col justify-left gap-8">
        <div className="w-[20%]">
          <img className=" rounded-md" src={info} alt="" />
        </div>
        <div className="flex flex-col h-full w-[60%] tracking-wide">
          <p className="text-2xl font-semibold font-serif text-slate-600">
            College Specific Projects
          </p>
          <p className="mt-2">explore colleges and their projects.</p>
          <HashLink to={"/explore"}>
            <button className="h-12 w-48 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
              Explore !
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
