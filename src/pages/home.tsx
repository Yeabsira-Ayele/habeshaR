import { ArrowRight } from "lucide-react";
import {homePageData , LocationData , btnPrimary , btnSecondary} from "../Data/homePageData"
import {foodlist ,  categoryList} from "../Data/foodList"

function Home() {
  return(
    <section className=" min-h-screen "
>
     
      <div 
       style={{backgroundImage: `url(${homePageData.banner})`}} 
      className="bg-cover px-4 lg:px-20 bg-center text-white flex flex-col gap-4 justify-center items-start py-[10rem] ">
        <h1 className="text-6xl  md:text-8xl lg:text-50xl  font-[1000]">
          {homePageData.heading1[0]}
               <br/>
          {homePageData.heading1[1]}
        </h1>

        <p className="text-md text-gray-100">
          {homePageData.content[0]} 
                 <br/>
          {homePageData.content[1]}
        </p>

        <div className="flex gap-4 mt-4">

          <button className="bg-white hover:bg-gray-50 text-black font-semibold py-3 px-7 ">
            {btnPrimary.order}
          </button>

          <button className="bg-transparent border border-gray-100 hover:border-white text-white font-semibold py-3 px-7 ">
            {btnPrimary.menu}
          </button>
        </div>
      </div>
        {/* popular */}
      <div className="px-5  py-10 flex flex-col ">
        
        <h1 className="text-4xl md:text-7xl font-bold">{homePageData.heading2}</h1>
        <span className="self-end cursor-pointer flex items-center gap-2 text-gray-400 underline transition-colors duration-300 hover:text-black">
  {btnPrimary.allFood}
  <ArrowRight size={16} />
</span>
         {/* list of crates */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-4">
           {/* 1 */}
           {foodlist.map((food , index ) => (
             <div key={index} className=" flex flex-col  pb-4 max-w-[300px] border border-gray-200 hover:border-black  transition-all duration-300 ">
          <div className="">
             <img src={food.img} alt={food.nameEng} className="w-full h-full min-h-[150px] max-w-[300px] max-h-[150px]" />
          </div>
         
          
          <div className=" flex flex-col  pb-4 max-w-[300px] " >
             <div className="mx-4 mt-4 flex justify-between items-center">
              <h1 className="font-bold  text-lg">{food.nameAmh}</h1>
              <p className="font-semibold text-lg">{food.birr}</p>
             </div>
             <span className="mx-4 my-2 font-semibold text-[12px] text-gray-600">{food.nameEng}</span>
               <p className="mx-4 mb-4 font-semibold text-[12px] text-gray-600">{food.decription}</p>
               <button className="mx-4 text-[10px] md:text-[12px] border border-black text-black 
                                  hover:bg-black hover:text-white font-semibold 
                                  py-2 px-[2rem]">
                {food.btn}
               </button>
          </div>
          </div>

           ))}   
        </div>

       
       
      </div>

      {/* Categories */}
      <div className="px-5 bg-gray-100 py-14 flex flex-col gap-4">
        <h1 className="text-xl font-bold">Categories</h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {categoryList.map((category, index) => (
      <div
        key={index}
        className="relative h-[220px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        {/* Background image */}
        <div
          style={{ backgroundImage: `url(${category.img})` }}
          className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h2 className="font-bold text-xl">{category.am}</h2>
          <p className="text-sm text-gray-200">{category.en}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* Locations */}
<div className="bg-[#0B0B0B] text-white px-5 py-12 flex flex-col gap-8 max-w-7xl mx-auto">
  <div className="flex justify-between items-baseline">
    <div className="flex flex-col gap-2">
      <span className="text-[#555555] text-xs font-semibold tracking-wider uppercase">Find us near you</span>
      <h1 className="text-5xl font-black tracking-tight font-sans">OUR LOCATIONS</h1>
    </div>
    <a href="#" className="text-[#555555] text-sm hover:text-white transition-colors duration-200 hidden md:block">
      View all branches →
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {LocationData.map((location) => (
      <div 
        key={location.id} 
        className="border border-[#1A1A1A] bg-[#0E0E0E] px-6 py-8 flex flex-col gap-4 hover:border-[#333333] cursor-pointer transition-all duration-300 group"
      >
        <p className="text-[#333333] text-xs font-mono">{location.id}</p>
        <h2 className="text-3xl font-bold tracking-tight text-white">{location.name}</h2>
        <p className="text-[#666666] text-sm leading-relaxed">{location.address}</p>
        
        <div className="border-t border-[#222222] mt-4 pt-4 flex items-center justify-between">
          <p className="text-white font-bold tracking-wide">{location.phone}</p>
          <ArrowRight 
            className="text-[#333333] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
            size={14} 
          />
        </div>
      </div>
    ))}
  </div>
</div>

{/* order */}
<div className="flex bg-white flex-col  justify-center items-center py-30  text-black">
  <p className="text-gray-500 text-sm">READY TO EAT?</p>
  <h1 className="text-[4rem] md:text-[8rem] font-[1000]">HUNGERY?</h1>
  <button className="bg-black text-xl hover:bg-black/90 text-white font-semibold py-3 px-10 ">
            Order Your Food  Now
          </button>
</div>

    </section>
    
  )
}
export default Home
