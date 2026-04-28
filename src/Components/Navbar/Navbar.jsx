import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
const Navbar = () => {
    return (
        <div>
            <div class="px-10 py-4 flex navbar bg-base-100 shadow-sm">
                        <div class="flex-1">
                              <a class="btn btn-ghost text-2xl font-semibold text-green-primary"><span className='text-2xl font-extrabold text-black'>Keen</span>Keeper</a>
                        </div>
          <div>
                  <ul class="flex gap-2   menu menu-horizontal px-1">
                      <li className='flex items-center gap-1 text-gray bg-green-primary px-4 py-3 rounded-md'><RiHome2Line /><a>Home</a></li>
                       <li className='flex items-center gap-1 text-gray'><FaRegClock /><a>Timeline</a></li>
                        <li className='flex items-center gap-1 text-gray'><ImStatsDots /><a>Stats</a></li>
      
                     </ul>
             </div>
</div>
        </div>
    );
};

export default Navbar;