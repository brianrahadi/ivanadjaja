import { BentoItem } from '../BentoItem';
import { FileText, Linkedin, MailIcon } from 'lucide-react';
import GoodreadsSVG from '../../assets/goodreads.svg';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    delay?: number;
}

export function SocialsBlock({ colSpan, rowSpan, delay }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} delay={delay} className="h-64 md:h-auto flex flex-col justify-center items-center gap-4 bg-[#fefae0] !p-0">
            <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
                <a href="#" className="border border-[#E7E5E4] flex items-center justify-center bg-white rounded-2xl hover:scale-105 transition-transform text-stone-600 shadow-sm hover:shadow-md hover:text-stone-900">
                    <FileText size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ivana-djaja/" target="_blank" rel="noopener noreferrer" className="border border-[#E7E5E4] flex items-center justify-center bg-[#0077b5] text-white rounded-2xl hover:scale-105 transition-transform shadow-sm">
                    <Linkedin size={24} />
                </a>
                <a href="mailto:ivana.angelica0@gmail.com" className="border border-[#E7E5E4] flex items-center justify-center bg-[#d4a373] rounded-2xl hover:scale-105 transition-transform shadow-sm">
                    <MailIcon size={24} />
                </a>
                <a href="https://www.goodreads.com/user/show/142153228-ivy" target="_blank" rel="noopener noreferrer" className="border border-[#E7E5E4] flex items-center justify-center bg-[#faedcd] rounded-2xl hover:scale-105 transition-transform shadow-sm">
                    <img src={GoodreadsSVG} alt="Goodreads" width={84} />
                </a>
            </div>
        </BentoItem>
    );
}
