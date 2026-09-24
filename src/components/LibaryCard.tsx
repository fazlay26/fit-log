import Image from 'next/image';
import React from 'react';
import { oswald, inter } from '@/fonts/fonts';
import { iLibary } from '@/types/LibaryType';
import Link from 'next/link';

interface LibaryDataProps {
    libaryData: iLibary
}

const LibaryCard = ({ libaryData }: LibaryDataProps) => {
    return (
        <Link href={`/${libaryData.id}`}
            key={libaryData.id}
            className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#c8ff00]/40 transition-colors group"
        >
            
            <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                <Image
                    src={libaryData.image}
                    alt={libaryData.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            
            <div className="p-5">
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {libaryData.muscleGroups.map((group, index) => (
                        <span
                            key={index}
                            className="bg-[#c8ff00] text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                
                <h3 className={`${oswald.className} text-white text-lg sm:text-xl font-bold uppercase tracking-tight mb-1`}>
                    {libaryData.name}
                </h3>

               
                <p className="text-gray-500 text-xs sm:text-sm mb-5">
                    {libaryData.equipment}
                </p>

                
                <div className="border-t border-white/10 pt-4 flex items-center gap-4 text-xs sm:text-sm text-gray-400">
                   
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{libaryData.duration} min</span>
                    </div>

                   
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                        <span>{libaryData.caloriesBurned} kcal</span>
                    </div>

                
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span>{libaryData.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibaryCard;