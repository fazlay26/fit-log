import Image from 'next/image';
import logo from '@/assets/logo.png';
import { oswald, inter } from '@/fonts/fonts';

const Navbar = () => {
    return (
        <nav className={`${inter.className} w-full bg-[#0a0a0a] border-b border-white/10`}>
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 py-2">

               
                <div className="navbar-start">
                 
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white p-1 min-h-0 h-10 w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#111111] border border-white/10 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
                            <li><a className="text-[#c8ff00] font-medium">Workouts</a></li>
                            <li><a className="text-gray-300">My Plan</a></li>
                        </ul>
                    </div>

                   
                    <a className="flex items-center gap-2 ml-1 lg:ml-0 cursor-pointer">
                        <Image
                            src={logo}
                            alt='fit-log logo'
                            width={24}
                            height={24}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className={`${oswald.className} text-white text-base sm:text-lg font-semibold tracking-widest uppercase`}>
                            Fitlog
                        </span>
                    </a>
                </div>

               
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 text-sm">
                        <li className="text-[#c8ff00] font-medium cursor-pointer">
                            Workouts
                        </li>
                        <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            My Plan
                        </li>
                    </ul>
                </div>

                
                <div className="navbar-end">
                    <div className="flex items-center gap-3 sm:gap-6 text-sm">
                        {/* Plan */}
                        <div className="flex items-center gap-2 text-white cursor-pointer">
                            <span>Plan</span>
                            <span className="text-black text-xs px-2 py-1 border border-[#c8ff00] rounded-full bg-[#c8ff00]">
                                0
                            </span>
                        </div>

                      
                        <div className="flex items-center gap-2 text-gray-400 cursor-pointer">
                            <span>Saved</span>
                            <span className="text-white text-xs border border-[#2D313B] rounded-full px-2 py-1">
                                0
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;