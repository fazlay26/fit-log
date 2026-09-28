import React from 'react';

const MyPlanSkeleton = () => {
    return (
        <div className='w-full px-4 sm:px-6 py-6 sm:py-10'>
    <div className="max-w-7xl mx-auto">

      
        <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 sm:p-8 mb-6">
        
            <div className="h-8 w-40 bg-[#1f1f1f] rounded animate-pulse mb-3" />
            
            <div className="h-4 w-72 bg-[#1f1f1f] rounded animate-pulse mb-6" />

            
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-[#141414] border border-white/10 rounded-xl p-4 sm:p-5"
                    >
                        <div className="h-4 w-20 bg-[#1f1f1f] rounded animate-pulse mb-3" />
                        <div className="h-9 w-16 bg-[#1f1f1f] rounded animate-pulse" />
                    </div>
                ))}
            </div>
        </div>

        
        <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 sm:p-6">

            
            <div className="flex items-center justify-between mb-6">
               
                <div className="bg-[#141414] border border-white/10 rounded-xl p-1 flex gap-1">
                    <div className="h-9 w-28 bg-[#1f1f1f] rounded-lg animate-pulse" />
                    <div className="h-9 w-20 bg-[#1f1f1f] rounded-lg animate-pulse" />
                </div>

                
                <div className="hidden sm:flex items-center gap-3">
                    <div className="h-4 w-14 bg-[#1f1f1f] rounded animate-pulse" />
                    <div className="h-9 w-28 bg-[#1f1f1f] rounded-lg animate-pulse" />
                </div>
            </div>

            
            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                       
                        <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] animate-pulse shrink-0" />

                       
                        <div className="flex-1 min-w-0 w-full">
                            <div className="h-5 w-40 bg-[#1f1f1f] rounded animate-pulse mb-2" />
                            <div className="h-3 w-24 bg-[#1f1f1f] rounded animate-pulse mb-3" />
                            <div className="flex items-center gap-3">
                                <div className="h-3 w-16 bg-[#1f1f1f] rounded animate-pulse" />
                                <div className="h-3 w-20 bg-[#1f1f1f] rounded animate-pulse" />
                                <div className="h-3 w-10 bg-[#1f1f1f] rounded animate-pulse" />
                            </div>
                        </div>

                       
                        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                            <div className="h-9 w-28 bg-[#1f1f1f] rounded-full animate-pulse" />
                            <div className="h-9 w-32 bg-[#1f1f1f] rounded-full animate-pulse" />
                            <div className="h-6 w-6 bg-[#1f1f1f] rounded animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
</div>
    );
};

export default MyPlanSkeleton;