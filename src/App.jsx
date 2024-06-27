import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return( 
    
  <div className=" relative w-full h-full flex flex-col background overflow-hidden items-center"> 
    <h1 className=" w-11/12 bg-white rounded-lg text-center mt-[40px] font-bold  content-center  px-10 py-2 text-4xl " >RANDOM GIFS</h1>
    <div className="  w-full flex flex-col items-center gap-y-10 mt-[30px]">
      <Random/>
      <Tag/>
    </div>
  
  </div>
  )
}
