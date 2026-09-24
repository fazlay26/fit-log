import Image from 'next/image';
import logo from '@/assets/logo.png';
import { oswald, inter } from '@/fonts/fonts';

const Footer = () => {
    return (
        <footer className={`${inter.className} w-full bg-[#0a0a0a] border-t border-white/10`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">

                    {/* Left: Logo + Brand */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt='footer logo'
                            width={24}
                            height={24}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <span className={`${oswald.className} text-white text-base sm:text-lg font-semibold tracking-widest uppercase`}>
                            Fitlog
                        </span>
                    </div>

                    {/* Right: Copyright */}
                    <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;