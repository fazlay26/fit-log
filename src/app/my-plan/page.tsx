'use client'
import { exerciseContext } from '@/context/ExerciceProvider';
import Image from 'next/image';
import React, { Suspense, useContext, useState } from 'react';
import { oswald } from '@/fonts/fonts';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaArrowRight, FaFire } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';
import { cssTransition, toast } from 'react-toastify';

const MyPlanPlage = () => {
    const [completedIds, setCompletedIds] = useState<number[]>([]);
    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

    const { planExercise, saved, setPlanExercise, setSaved } = useContext(exerciseContext);
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const totalDuration = planExercise.reduce(
        (sum, PE) => sum + Number(PE.duration),
        0
    );
    const totalCaloriesPlan = planExercise.reduce(
        (sum, PE) => sum + Number(PE.caloriesBurned),
        0
    );
    const totalDurationSaved = saved.reduce(
        (sum, PE) => sum + Number(PE.duration),
        0
    );
    const totalCaloriesSaved = saved.reduce(
        (sum, PE) => sum + Number(PE.caloriesBurned),
        0
    );
    const SlideDown = cssTransition({
        enter: 'toast-enter',
        exit: 'Toastify__bounce-exit--top-right',
    });
    const sortedPlanExercise = [...planExercise].sort((a, b) => {
        if (sortBy === 'duration') return b.duration - a.duration;
        if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
        return b.rating - a.rating;
    });
    const sortedSaved = [...saved].sort((a, b) => {
        if (sortBy === 'duration') return b.duration - b.duration;
        if (sortBy === 'calories') return b.caloriesBurned - b.caloriesBurned;
        return b.rating - b.rating;
    });


    return (
        <Suspense fallback={<p>loading Data.....</p>}>
            <div className='w-full px-4 sm:px-6 py-6 sm:py-10'>
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 sm:p-8 mb-6">
                        
                        <h1 className={`${oswald.className} text-white text-2xl sm:text-3xl font-bold uppercase tracking-wider`}>
                            My Plan
                        </h1>
                        <p className="text-gray-500 text-sm mt-1 mb-6">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>

                       
                        <div className="grid grid-cols-3 gap-4 sm:gap-6">
                            
                            <div className="bg-[#141414] border border-white/10 rounded-xl p-4 sm:p-5">
                                <p className="text-gray-500 text-xs sm:text-sm mb-1">Exercises</p>
                                <p className={`${oswald.className} text-[#c8ff00] text-3xl sm:text-4xl font-bold`}>
                                    {activeTab === 'today' ? planExercise.length : saved.length}
                                </p>
                            </div>

                            
                            <div className="bg-[#141414] border border-white/10 rounded-xl p-4 sm:p-5">
                                <p className="text-gray-500 text-xs sm:text-sm mb-1">Minutes</p>
                                <p className={`${oswald.className} text-white text-3xl sm:text-4xl font-bold`}>
                                    {activeTab === 'today' ? totalDuration : totalDurationSaved}
                                </p>
                            </div>

                            
                            <div className="bg-[#141414] border border-white/10 rounded-xl p-4 sm:p-5">
                                <p className="text-gray-500 text-xs sm:text-sm mb-1">Calories</p>
                                <p className={`${oswald.className} text-white text-3xl sm:text-4xl font-bold`}>
                                    {activeTab === 'today' ? totalCaloriesPlan : totalCaloriesSaved}
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 sm:p-6">

                      
                        <div className="flex items-center justify-between mb-6">
                            <div role="tablist" className="tabs tabs-box bg-[#141414] border border-white/10 rounded-xl p-1">
                                <input
                                    type="radio"
                                    name="my_tabs_2"
                                    role="tab"
                                    className="tab text-gray-400 checked:bg-[#1f1f1f] checked:text-white font-medium text-sm px-5"
                                    aria-label="Today's Plan"
                                    checked={activeTab === 'today'}
                                    onChange={() => setActiveTab('today')}
                                />
                                <input
                                    type="radio"
                                    name="my_tabs_2"
                                    role="tab"
                                    className="tab text-gray-400 checked:bg-[#1f1f1f] checked:text-white font-medium text-sm px-5"
                                    aria-label="Saved"
                                    checked={activeTab === 'saved'}
                                    onChange={() => setActiveTab('saved')}
                                />
                            </div>

                           
                            <div className="hidden sm:flex items-center gap-3">
                                <span className="text-gray-500 text-sm">Sort By</span>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')} className="bg-[#141414] border border-white/10 text-white text-sm rounded-lg px-3 py-1.5 outline-none">
                                    <option value="duration">Duration</option>
                                    <option value="calories">Calories</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>

                       
                        {activeTab === 'today' && (
                            <div>
                                {planExercise.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center text-center py-10">
                                        <h2 className={`${oswald.className} text-white text-2xl font-bold uppercase tracking-wider mb-2`}>
                                            Nothing here yet
                                        </h2>
                                        <p className="text-gray-500 text-sm mb-5">
                                            Browse the library and add a lift to get today moving.
                                        </p>

                                        <Link href={'/'}>
                                            <button className="flex items-center justify-center gap-1.5 bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                                                <FaArrowRight className="text-sm" />
                                                <span>Browse Workouts</span>
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <Suspense fallback={<p>loading data.........</p>}>
                                        <div className="space-y-4">
                                            {sortedPlanExercise.map((exercise, idnex) => (
                                                <div
                                                    key={idnex}
                                                    className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-white/20 transition-colors"
                                                >
                                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                                        <Image
                                                            src={exercise.image}
                                                            alt={exercise.name}
                                                            fill
                                                            sizes="64px"
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <h3 className={`${oswald.className} text-white text-base font-bold uppercase tracking-tight`}>
                                                            {exercise.name}
                                                        </h3>
                                                        <p className="text-gray-500 text-xs mt-0.5">
                                                            {exercise.equipment}
                                                        </p>
                                                        <div className="flex items-center flex-wrap gap-3 text-xs text-gray-400 mt-2">
                                                            <span className='inline-flex items-center gap-1'><MdOutlineWatchLater className='text-[#c8ff00]' /> {exercise.duration} min</span>
                                                            <span className='inline-flex items-center gap-1'><FaFire className='text-[#c8ff00]' /> {exercise.caloriesBurned} kcal</span>
                                                            <span className='inline-flex items-center gap-1'><CiStar className='text-[#c8ff00]' />{exercise.rating}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                                                        <Link href={`/${exercise.id}`}>
                                                            <button className="flex-1 sm:flex-none border border-white/20 hover:border-white/40 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap">
                                                                View Details
                                                            </button>
                                                        </Link>
                                                        <button onClick={() => {
                                                            if (completedIds.includes(exercise.id)) return;
                                                            setCompletedIds([...completedIds, exercise.id]);
                                                            toast.success('Marked as done!');
                                                        }}
                                                            disabled={completedIds.includes(exercise.id)}
                                                            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap ${completedIds.includes(exercise.id)
                                                                ? 'bg-[#1f1f1f] text-gray-500 border border-white/10 cursor-not-allowed'
                                                                : 'bg-[#c8ff00] hover:bg-[#d4ff33] text-black'
                                                                }`}>
                                                            {
                                                                completedIds.includes(exercise.id) ? <span>Worktout Done</span> : <span>✓ Mark as Done</span>
                                                            }
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setPlanExercise(planExercise.filter((item) => item.id !== exercise.id));
                                                                toast.success('Removed from Todays Plan', {
                                                                    position: "top-right",
                                                                    autoClose: 5000,
                                                                    hideProgressBar: false,
                                                                    closeOnClick: false,
                                                                    pauseOnHover: true,
                                                                    draggable: true,
                                                                    progress: undefined,
                                                                    theme: "dark",
                                                                    transition: SlideDown,
                                                                });
                                                            }

                                                            }
                                                            aria-label="Remove"
                                                            className="text-gray-500 hover:text-white transition-colors p-1"
                                                        >
                                                            ✕
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Suspense>
                                )}
                            </div>
                        )}

                       
                        {activeTab === 'saved' && (
                            <div>
                                {saved.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center text-center py-10">
                                        <h2 className={`${oswald.className} text-white text-2xl font-bold uppercase tracking-wider mb-2`}>
                                            Nothing here yet
                                        </h2>
                                        <p className="text-gray-500 text-sm mb-5">
                                            Browse the library and add a lift to get today moving.
                                        </p>

                                        <Link href={'/'}>
                                            <button className="flex items-center justify-center gap-1.5 bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                                                <FaArrowRight className="text-sm" />
                                                <span>Browse Workouts</span>
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {sortedSaved.map((save) => (
                                            <div
                                                key={save.id}
                                                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-white/20 transition-colors"
                                            >
                                                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                                    <Image
                                                        src={save.image}
                                                        alt={save.name}
                                                        fill
                                                        sizes="64px"
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className={`${oswald.className} text-white text-base font-bold uppercase tracking-tight`}>
                                                        {save.name}
                                                    </h3>
                                                    <p className="text-gray-500 text-xs mt-0.5">
                                                        {save.equipment}
                                                    </p>
                                                    <div className="flex items-center flex-wrap gap-3 text-xs text-gray-400 mt-2">
                                                        <span className='inline-flex items-center gap-1'> <MdOutlineWatchLater className='text-[#c8ff00]' /> {save.duration} min</span>
                                                        <span className='inline-flex items-center gap-1'> <FaFire className='text-[#c8ff00]' /> {save.caloriesBurned} kcal</span>
                                                        <span className='inline-flex items-center gap-1'><CiStar className='text-[#c8ff00]' /> {save.rating}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                                                    <Link href={`/${save.id}`}>
                                                        <button className="flex-1 sm:flex-none border border-white/20 hover:border-white/40 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap">
                                                            View Details
                                                        </button>
                                                    </Link>
                                                    <button onClick={() => {
                                                        if (completedIds.includes(save.id)) return;
                                                        setCompletedIds([...completedIds, save.id]);
                                                        toast.success('Marked as done!');
                                                    }}
                                                        disabled={completedIds.includes(save.id)}
                                                        className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap ${completedIds.includes(save.id)
                                                            ? 'bg-[#1f1f1f] text-gray-500 border border-white/10 cursor-not-allowed'
                                                            : 'bg-[#c8ff00] hover:bg-[#d4ff33] text-black'
                                                            }`}>
                                                        {
                                                            completedIds.includes(save.id) ? <span>Worktout Done</span> : <span>✓ Mark as Done</span>
                                                        }
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setSaved(saved.filter((item) => item.id !== save.id));
                                                            toast.success('Removed from Saved Plan', {
                                                                position: "top-right",
                                                                autoClose: 5000,
                                                                hideProgressBar: false,
                                                                closeOnClick: false,
                                                                pauseOnHover: true,
                                                                draggable: true,
                                                                progress: undefined,
                                                                theme: "dark",
                                                                transition: SlideDown,
                                                            });
                                                        }}
                                                        aria-label="Remove"
                                                        className="text-gray-500 hover:text-white transition-colors p-1"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default MyPlanPlage;