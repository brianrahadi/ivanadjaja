import { BentoItem } from '../BentoItem';
import { FileText, Linkedin, MailIcon } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function SocialsBlock({ colSpan = 1, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col justify-center items-center gap-4 bg-[#fefae0] !p-0">
            <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                <a href="#" className="flex items-center justify-center bg-[#faedcd] rounded-2xl border border-[#E7E5E4] hover:scale-105 transition-transform text-stone-600 shadow-sm hover:shadow-md hover:text-stone-900">
                    <FileText size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ivana-djaja/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#0077b5] text-white rounded-2xl hover:scale-105 transition-transform shadow-sm">
                    <Linkedin size={24} />
                </a>
                <a href="#" className="flex items-center justify-center bg-[#d4a373] rounded-2xl hover:scale-105 transition-transform col-span-2 shadow-sm">
                    <MailIcon size={24} />
                </a>
            </div>
        </BentoItem>
    );
}
