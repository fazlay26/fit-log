import React from 'react';
import Image from 'next/image';
import { oswald, inter } from '@/fonts/fonts';
import { iLibary } from '@/types/LibaryType';
import { IoCalendarNumber } from 'react-icons/io5';
import { FaRegSave } from 'react-icons/fa';

interface ParamsProps {
    params: Promise<{ id: string }>;
}

const LibaryDetailPage = async ({ params }: ParamsProps) => {
    const { id } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

    const data: iLibary = await res.json();

    // টেবিলের জন্য ডেটা অ্যারে
    const specs = [
        { label: 'Equipment', value: data.equipment },
        { label: 'Difficulty', value: data.difficulty },
        { label: 'Sets', value: data.sets },
        { label: 'Reps', value: data.reps },
        { label: 'Duration', value: `${data.duration} min` },
        { label: 'Calories', value: `${data.caloriesBurned} kcal` },
        { label: 'Rating', value: data.rating },
    ];

    return (
        <section className={`${inter.className} w-full px-4 sm:px-6 py-8 sm:py-12`}>
            <div className="max-w-7xl mx-auto">

                {/* ---------- Main Card ---------- */}
                <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* ---------- Left: Image ---------- */}
                        <div className="w-full">
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#1a1a1a]">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* ---------- Right: Details ---------- */}
                        <div className="w-full">

                            {/* Title */}
                            <h1 className={`${oswald.className} text-white text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight`}>
                                {data.name}
                            </h1>

                            {/* Description */}
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-3 mb-5">
                                {data.description}
                            </p>

                            {/* Muscle Group Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {data.muscleGroups.map((group, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#c8ff00] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                                    >
                                        {group}
                                    </span>
                                ))}
                            </div>

                            {/* Specs Table */}
                            <div className="bg-[#141414] border border-white/10 rounded-xl overflow-hidden mb-6">
                                {specs.map((spec, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center justify-between px-4 sm:px-5 py-3 text-sm ${idx !== specs.length - 1 ? 'border-b border-white/5' : ''
                                            } `}
                                    >
                                        <span className="text-gray-500 uppercase text-xs tracking-wider font-medium">
                                            {spec.label}
                                        </span>
                                        <span className="text-white font-medium">
                                            {spec.value}
                                        </span>
                                        
                                    </div>
                                ))}
                            </div>

                            {/* Instructions */}
                            <div className="mb-8">
                                <h3 className={`${oswald.className} text-white text-lg font-bold uppercase tracking-wider mb-3`}>
                                    Instructions
                                </h3>
                                <ol className="space-y-2 list-none">
                                    {data.instructions.map((step, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                                            <span className="text-gray-500 font-medium shrink-0">
                                                {idx + 1}.
                                            </span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex items-center justify-center gap-2 bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md">
                                    <IoCalendarNumber />
                                    Add to today's plan
                                </button>

                                <button className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/40 transition-colors text-white text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-md">
                                    <FaRegSave />
                                    Save for later
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LibaryDetailPage;