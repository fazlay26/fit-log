import React from 'react';
import banner from '@/assets/banner.png';
import { oswald, inter } from '@/fonts/fonts';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className={`${inter.className} w-full px-4 sm:px-6 py-6 sm:py-10`}>
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-[#15171D] border border-white/10 rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-6 sm:p-10 lg:p-14">

                        
                        <div className="w-full md:w-3/5 lg:w-1/2 text-left">
                          
                            <p className={`${oswald.className} text-[#c8ff00] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4`}>
                                Workout Library
                            </p>

                           
                            <h2 className={`${oswald.className} text-white text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] tracking-tight mb-5`}>
                                Train with intent. Log every set.
                            </h2>

                           
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                                into today's plan, and watch the week's work add up.
                            </p>

                           
                            <button className="bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md">
                                Browse Workouts
                            </button>
                        </div>

                     
                        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end">
                            <Image
                                src={banner}
                                alt='banner image'
                                width={500}
                                height={500}
                                priority
                                className="w-64 sm:w-80 md:w-full max-w-md h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;