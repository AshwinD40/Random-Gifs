import {  useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  function Tag() {

      const [tag, setTag] = useState("");
      const {gif , loading ,fetchData} = useGif();

    
    function changeHandler(event){
    setTag(event.target.value);
    }

   return (
   <div className=" w-1/2  bg-blue-600  rounded-lg border border-black flex flex-col text-center items-center gap-y-5 mt-[15px] ">
      <h1 className="mt-[15px] text-2xl font-bold underline">RANDOM {tag} GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt="gif"/>)
      }

      
      <input
        onChange={changeHandler}
        value={tag}
        className=" mb-[15px] w-10/12 bg-slate-300 rounded-lg py-1 text-xl text-center "
        />


      <button
        className=" mb-[15px] w-10/12 bg-slate-300 rounded-lg py-1 text-xl font-bold "
      onClick={() => fetchData(tag) }>
        Generate
      </button>

   </div>
  )
}

export default Tag;