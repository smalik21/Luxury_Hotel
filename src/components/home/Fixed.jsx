import React from 'react'
import { FaMessage } from "react-icons/fa6";
import Link from 'next/link';

const Fixed = () => {
  return (
    <Link href="/contact"><div className=' md:h-[4rem] md:w-[4rem] bottom-5 right-5 rounded-full  fixed bg-black md:text-3xl text-white p-[1.1rem]'><FaMessage /></div></Link>
  )
}

export default Fixed