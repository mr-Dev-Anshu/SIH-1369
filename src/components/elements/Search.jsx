import React, { useEffect } from "react";
  

import {useState} from 'react';
const Search = () => {

  const [search , setSearch] = useState("");
     
  function handleSearch (){
     setSearch(e=>{
         search=e.target.value;
     })
  }
  useEffect(()=>{
     console.log(search);
  },[search]);

  return (
    <div className="pt-12 p-4">
      <div>
        <p className=" font-bold text-4xl text-slate-600 font-serif">
          Search projects of your choice
        </p>
        <p className=" text-xl tracking-wide pt-2">
          Projects in multiple categories available.
        </p>
      </div>
      <div>
        <input
          className="outline outline-slate-200 w-full h-12 rounded-xl mt-4 p-4 text-xl "
          type="text"
          placeholder="Type name of project"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Search;
