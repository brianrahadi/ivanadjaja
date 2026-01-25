import { BentoItem } from '../BentoItem';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function SocialsBlock({ colSpan = 1, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col justify-center items-center gap-4 bg-[#d4a373] !p-0">
            <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                <a href="#" className="flex items-center justify-center bg-white rounded-2xl border border-[#E7E5E4] hover:scale-105 transition-transform text-stone-600 shadow-sm hover:shadow-md hover:text-stone-900">
                    <Github size={24} />
                </a>
                <a href="#" className="flex items-center justify-center bg-[#0077b5] text-white rounded-2xl hover:scale-105 transition-transform shadow-sm">
                    <Linkedin size={24} />
                </a>
                <a href="#" className="flex items-center justify-center bg-black text-white rounded-2xl hover:scale-105 transition-transform col-span-2 shadow-sm">
                    <Twitter size={24} />
                </a>
            </div>
        </BentoItem>
    );
}
