import { iLibary } from '@/types/LibaryType';
import { oswald, inter } from '@/fonts/fonts';
import React from 'react';
import LibaryCard from './LibaryCard';

const getLibary = async (): Promise<iLibary[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const Libary = async () => {
    const libaryDatas = await getLibary();

    return (
        <section className={`${inter.className} w-full px-4 sm:px-6 py-8 sm:py-12`}>
            <div className="max-w-7xl mx-auto">

              
                <div className="mb-8 sm:mb-10">
                    <h2 className={`${oswald.className} text-white text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight`}>
                        The Library
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base mt-2">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {libaryDatas.map((libaryData: iLibary) => (
                       <LibaryCard key={libaryData.id} libaryData={libaryData}></LibaryCard>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Libary;