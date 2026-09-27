import { inter, oswald } from '@/fonts/fonts';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <section className={`${inter.className} min-h-[80vh] w-full flex items-center justify-center px-4 sm:px-6 py-16`}>
            <div className="max-w-lg w-full text-center">

                {/* Big 404 */}
                <h1 className={`${oswald.className} text-[#c8ff00] text-7xl sm:text-9xl font-bold uppercase tracking-wider leading-none`}>
                    404
                </h1>

                {/* Title */}
                <h2 className={`${oswald.className} text-white text-2xl sm:text-3xl font-bold uppercase tracking-wider mt-4 mb-3`}>
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                    This lift doesn't exist. The page you're looking for may have been moved, deleted, or never logged.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="w-full sm:w-auto bg-[#c8ff00] hover:bg-[#d4ff33] transition-colors text-black text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-full"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href=""
                        className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-full transition-colors"
                    >
                        Browse Library
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default NotFound;