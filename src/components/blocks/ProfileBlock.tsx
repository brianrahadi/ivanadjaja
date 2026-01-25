import { BentoItem } from '../BentoItem';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function ProfileBlock({ colSpan = 2, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col p-8 bg-white border border-[#EDEBE8] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start mb-6">
                <div className="h-24 w-24 rounded-full bg-stone-200 overflow-hidden border-2 border-white shadow-sm">
                    {/* Placeholder for avatar image */}
                    <img
                        // src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=150&auto=format&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Visual toggle per design reference, but non-functional for now as requested */}
                <div className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-sm font-medium hover:bg-stone-50 transition-colors cursor-default select-none">
                    Vancouver, BC
                </div>
            </div>

            <div className="">
                <div className="">
                    Hello! I'm Ivana, a UBC-BCIT Biotechnology student with interests in biotechnology research and development. Outside of school, I enjoy painting my nails, reading books, and hiking with my friends.
                </div>
            </div>

            {/* <div className="mt-auto flex justify-end gap-3">
                <a href="#" className="p-3 rounded-full bg-stone-100/50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-all hover:scale-105">
                    <FileText size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-stone-100/50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-all hover:scale-105">
                    <Github size={20} />
                </a>
                <a href="#" className="p-3 rounded-full bg-stone-100/50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-all hover:scale-105">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:hello@example.com" className="p-3 rounded-full bg-stone-100/50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-all hover:scale-105">
                    <Mail size={20} />
                </a>
            </div> */}
        </BentoItem>
    );
}
