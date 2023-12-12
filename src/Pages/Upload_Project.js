import React, { useEffect } from "react";
import { useState } from "react";
import ProjectDataService from '../services/Projects-services';
export default function Upload_Project() {
  const [url, setUrl] = useState("");
  const [formData , setFormData] = useState({});
   function handleChange (e){
         setFormData({
          ...formData,
            [e.target.id]:e.target.value
          })
          setUrl(e.target.value);
   }
    const handleSubmit = async(e)=>{
           e.preventDefault();
           const newRecord = formData;
           console.log(newRecord);
           try{
               await ProjectDataService.addProject(newRecord);
               console.log("Project Added!!");
           }catch(e){
               console.log("project  Didn't added !!!");
           }
      }
  return (
      <form onSubmit={handleSubmit}>
    <div className="flex justify-center ">
      <div className="flex justify-center w-4/6">
        <div className="mt-12 flex flex-col gap-4 w-full   ">
          <div className="font-bold text-xl flex justify-center   ">
            Upload Your Project Here{" "}
          </div>
          <input
            className="border p-3 rounded-lg  placeholder-black placeholder-opacity-75 border-b border-gray-500 focus:outline-none w-full"
            type="text"
            id="project-name"
            placeholder="Enter the Project Name "
            onChange={handleChange}
          />
          <input
            className="border p-3 rounded-lg  placeholder-black placeholder-opacity-75 border-b border-gray-500 focus:outline-none w-full"
            type="text"
            id="team-name"
            placeholder="Enter the  TeamName  "
            onChange={handleChange}
          />
          <input
            className={`border p-3 rounded-lg  placeholder-black placeholder-opacity-75 border-b border-gray-500 focus:outline-none w-full ${url.length>0?`border-blue-600`:`text-black`}`}
            type="text"
            id="git-link"
            placeholder="Project Github Link  "
            onChange={handleChange}
          />
          <button className="bg-blue-400 py-2 px-3 " type="submit">Submit</button>
        </div>
      </div>
    </div>
      </form>
  );
}
