import React from 'react';
import logo from '../../assets/logo-xl.png'
import ins from '../../assets/instagram.png'
import fb from '../../assets/facebook.png'
import tw from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-green-primary px-10 py-6 md:px-60  md:py-22'>
            <div>
                      <div className='flex flex-col justify-center items-center  text-center space-y-6'>

                       <div className='flex flex-col justify-center items-center space-y-5 '>
                        <img src={logo} alt="" className='w-40  md:w-102'/>
                        <p className='text-white   md:text-[16px] font-normal'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                      </div>
                      <div className='pb-10 space-y-4'>
                        <p className='text-white'>Social Links</p>
                        <div className='flex  flex-row gap-2 items-center h-auto'>
                            <img src={ins} alt="" className='w-6 h-6'  />
                            <img src={fb} alt=""  className='w-6 h-6'/>
                            <img src={tw} alt=""  className='w-6 h-6'/>
                        </div>
                      </div>




                      </div>
                        <hr className='text-[#fafafa60] ' />

                        <div className='text-[#fafafa75] text-[16px] flex flex-col md:flex-row justify-between pt-5'>
                             <p className='pb-5 md:pb-0'> &copy; 2026 KeenKeeper. All rights reserved.</p>

                             <ul className='flex flex-col text-center  md:flex-row gap-5 ' >
                                <li>Privacy Policy </li>
                                <li>  Terms of Service </li>
                                <li>Cookies</li>
                             </ul>
                        </div>



            </div>
        </div>
    );
};

export default Footer;