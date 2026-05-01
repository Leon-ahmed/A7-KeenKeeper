import { Link, NavLink } from 'react-router-dom'
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
const Navbar = () => {
        const navLinkClass = ({ isActive }) =>
                `flex items-center gap-1 px-4 py-3 rounded-md transition-colors duration-200 ${
                        isActive
                                ? 'bg-green-primary text-white shadow-sm'
                                : 'text-gray hover:bg-slate-100 hover:text-[#244D3F]'
                }`

    return (
        <div>
            <div class="px-10 py-4 flex flex-col md:flex-row navbar space-y-3 bg-base-100 shadow-sm">
                        <div class="flex-1 w-6/12 mx-auto  ">
                              <Link to="/" className="btn btn-ghost text-2xl   font-semibold text-green-primary"><span className='text-2xl font-extrabold text-black'>Keen</span>Keeper</Link>
                        </div>
          <div>
                  <ul class="flex flex-col w-6/12 mx-auto   md:flex-row md:w-full   gap-2   menu menu-horizontal px-1">
                                            <li>
                                                <NavLink to="/" end className={navLinkClass}>
                                                    <RiHome2Line />
                                                    <span>Home</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/timeline" className={navLinkClass}>
                                                    <FaRegClock />
                                                    <span>Timeline</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/stats" className={navLinkClass}>
                                                    <ImStatsDots />
                                                    <span>Stats</span>
                                                </NavLink>
                                            </li>
      
                     </ul>
             </div>
</div>
        </div>
    );
};

export default Navbar;