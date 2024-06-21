import React from 'react'

const Find = () => {
  return (
    <div className='w-full h-[389px]  bg-black mb-10 mt-[3rem]'>
      <div className='w-[900px] mx-auto pt-10'>
      <div className='text-gray-200 text-4xl '>Find Hotels by locations</div>
      <div className='text-gray-400 text-xl mt-2'>your lodge according to your destiny..</div>
    </div>
  
    <div className=" flex justify-center items-center mt-[5rem]">
        <div className="relative"> 
            <div className="absolute ">
                 <i className="fa fa-search text-white z-20 hover:text-white"></i>
            </div>
          <input type="text" className="h-14 w-[55rem] pl-10 rounded-full text-white bg-black z-0 border-2 border-white focus:shadow focus:outline-none" placeholder="Where you want your lodge?"/>
            <div className="absolute top-0 right-0">
                
                <button className="h-14 w-[10rem] text-black rounded-full bg-white hover:bg-gray-200">Find</button>
                
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Find