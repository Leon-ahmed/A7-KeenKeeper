import React from 'react';
import { FaPlus } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className='bg-[#F8FAFC] pt-20 flex flex-col items-center text-center justify-center '>
            <div className='space-y-4'>
                <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-[#64748B] pb-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
            <div className='flex justify-center items-center pb-10'> <button className='  btn bg-green-primary text-white flex justify-center items-center rounded-md px-2 py-2 gap-1'><FaPlus />Add a Friend</button></div>
            </div>

          
            
        </div>
    );
};

export default Banner;