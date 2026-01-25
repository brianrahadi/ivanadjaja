import { BentoItem } from '../BentoItem';
import { LocateIcon, MapPin } from 'lucide-react';

import IvanaImg from '../../assets/ivana.webp';
interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function ProfileBlock({ colSpan = 2, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col p-8 bg-[#fefae0] border border-[#EDEBE8] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start mb-6">
                <div className="h-24 w-24 rounded-full bg-stone-200 overflow-hidden border-2 border-white shadow-sm">
                    {/* Placeholder for avatar image */}
                    <img
                        src={IvanaImg}
                        // src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=150&auto=format&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Visual toggle per design reference, but non-functional for now as requested */}
                <div className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-sm font-medium bg-white transition-colors cursor-default select-none">
                    {/* <MapPin size={14} className="mr-1" /> */}
                    Vancouver, BC
                </div>
            </div>

            <div className="">
                <div className="">
                    Hello! I'm Ivana, a UBC-BCIT Biotechnology student with interests in biotechnology research and development. Outside of school, I enjoy painting my nails, reading books, and hiking with my friends.
                </div>
            </div>
        </BentoItem>
    );
}
