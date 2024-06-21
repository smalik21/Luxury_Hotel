"use client";
import React, {useState} from 'react'


const page = () => {
    const [isHiddenDivVisible, setIsHiddenDivVisible] = useState(false);

    const toggleHiddenDiv = () => {
        setIsHiddenDivVisible(!isHiddenDivVisible);
    };
  return (
    <>
    <div className='m-auto'>
    {isHiddenDivVisible && (
                <div>
                    <div onClick={toggleHiddenDiv} className='m-auto absolute w-[4rem] h-[4rem] bg-white rounded-full mt-[7rem] ml-[48rem] p-2'></div>
                <div className=' absolute h-[13rem] w-[30rem] rounded-3xl bg-white ml-[35rem] mt-[15rem] border-2 border-black'>
                               <input type="text" id="input-group-1" className=" m-auto mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[25rem] ps-10 p-2.5 " placeholder="Enter your email"/>
                               <button type="button" className="mt-5 text-white w-[25rem] ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Continue</button>
                                <div className=' absolute mt-2 ml-[12rem] '>Back to login</div>
                </div>
                <div className='absolute bg-white rounded-3xl h-[3rem] w-[15rem] ml-[80rem] mt-[5rem] pl-7 pt-3'>Reset link to your email.   </div>
                </div>
            )}
    </div>
    <div className={isHiddenDivVisible ? 'flex h-screen w-screen ' : 'flex h-screen w-screen'}>
    
        <div className='w-2/5 '>
        <div className='h-screen flex items-center justify-center mx-[4rem]'>
            <div>
            <div className='text-center text-3xl mb-3'>LuxuryHotelConcierge</div>
            <div className='text-center text-gray-400 text-md'>Discover the epitome of luxury and comfort at our world-renowned hotels..</div>
            <div className='text-center text-3xl my-5'>Sign In</div>
           <div className='mx-10'>
            <div className="relative mb-4 justify-center items-center">
            <div className=" inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg> */}
            </div>
            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[25rem] ps-10 p-2.5 " placeholder="Enter your email"/>
            </div>
            
            </div>
            
   
            <button type="button" className="text-white w-[25rem] ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Continue</button>
            <div onClick={toggleHiddenDiv} className='text-gray-700 text-sm mb-2 ml-[11.2rem]'>Forgot password?</div>


            <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='text-gray-700 text-sm mb-2 ml-[12.8rem]'>Signin with</div>
            <button type="button" className="text-white w-[25rem] ml-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Google</button>

            </div>
        </div>

        {/* <div className=' mb-0'>By signing up, you agree to our Terms of Service & Privacy policy</div> */}
        
        </div>
       
            <img className='object-fill w-3/5' src="/sign.png"/>
       
        
    </div>
    </>
  )
}

export default page