import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
const Navbar = () => {
    return (
        <div>
            <div class="px-10 py-4 flex flex-col md:flex-row navbar space-y-3 bg-base-100 shadow-sm">
                        <div class="flex-1 w-6/12 mx-auto  ">
                              <a class="btn btn-ghost text-2xl   font-semibold text-green-primary"><span className='text-2xl font-extrabold text-black'>Keen</span>Keeper</a>
                        </div>
          <div>
                  <ul class="flex flex-col w-6/12 mx-auto   md:flex-row md:w-full   gap-2   menu menu-horizontal px-1">
                      <li className='flex items-center gap-1 text-gray bg-green-primary px-4 py-3 rounded-md'><RiHome2Line /><a>Home</a></li>
                       <li className='flex items-center gap-1 text-gray px-4 py-3'><FaRegClock /><a>Timeline</a></li>
                        <li className='flex items-center gap-1 text-gray px-4 py-3'><ImStatsDots /><a>Stats</a></li>
      
                     </ul>
             </div>
</div>
        </div>
    );
};

export default Navbar;