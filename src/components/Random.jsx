import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random() {

  const {gif , loading , fetchData} = useGif();

  return (
   <div className=" w-1/2  bg-green-600  rounded-lg border border-black flex flex-col text-center items-center gap-y-5 mt-[15px] ">
      <h1 className="mt-[15px] text-2xl font-bold underline">A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <button
          className=" mb-[15px] w-10/12 bg-slate-300 rounded-lg py-1 text-xl font-bold "
          onClick={() => fetchData()}>

        Generate

      </button>

   </div>
  )
}

export default Random;