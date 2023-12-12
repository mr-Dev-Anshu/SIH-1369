import React from "react";
import i1 from "./assets/home-illustration.svg";
import Search from "./elements/Search";
import ProjectCards from "./elements/ProjectCards";
import InfoCard from "./elements/InfoCard";
import CardThree from "./elements/CardThree";
const Home = () => {
  return (
    <div className="pl-40 pr-40 ">
      <div className=" w-full pt-12 h-full flex justify-between">
        <div className=" p-4 flex justify-center items-center  w-[50%]">
          <div className="flex flex-col">
            <p className=" text-4xl font-serif leading-relaxed font-bold text-slate-600">
              Empower Your Ideas, <br /> Elevate Your Projects: Seamless
              Uploading,
              <br />
              Limitless Possibilities!
            </p>
            <p className=" text-xl tracking-wide select-none mt-4">
              Showcase your
              <span className=" text-green-500"> projects</span> to all the
              enthusiasts out there.
            </p>
            <input
              className="outline outline-2 text-xl font-semibold outline-slate-200 w-full mt-10 h-12 p-5 rounded-xl"
              placeholder="Enter your mobile number"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            <p className="pl-4 pt-1">We will send OTP for validation.</p>
            <button className="bg-slate-800 w-full mt-10 h-12 p-5 flex justify-center items-center font-semibold rounded-xl text-white hover:bg-blue-700 duration-100">
              Join for free
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={i1} alt="" />
        </div>
      </div>
      <Search />
      <ProjectCards />
      <InfoCard />
      <CardThree />
    </div>
  );
};

export default Home;
