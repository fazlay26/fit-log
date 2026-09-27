import React from 'react';

const LibarySkeleton = () => {
    return (
       <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
    
    <div className="relative w-full h-48 sm:h-52 bg-[#1a1a1a] animate-pulse" />

    <div className="p-5">
       
        <div className="flex flex-wrap gap-2 mb-4">
            <div className="h-6 w-16 bg-[#1f1f1f] rounded-full animate-pulse" />
            <div className="h-6 w-14 bg-[#1f1f1f] rounded-full animate-pulse" />
        </div>

       
        <div className="h-6 w-40 bg-[#1f1f1f] rounded animate-pulse mb-2" />

        
        <div className="h-4 w-24 bg-[#1f1f1f] rounded animate-pulse mb-5" />

       
        <div className="border-t border-white/10 pt-4 flex items-center gap-4">
            <div className="h-4 w-16 bg-[#1f1f1f] rounded animate-pulse" />
            <div className="h-4 w-20 bg-[#1f1f1f] rounded animate-pulse" />
            <div className="h-4 w-10 bg-[#1f1f1f] rounded animate-pulse" />
        </div>
    </div>
</div>
    );
};

export default LibarySkeleton;