import { BentoItem } from '../BentoItem';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function AboutBlock({ colSpan = 2, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="p-6 md:p-8">
            <div className="h-full flex flex-col justify-center">
                <h3 className="text-xs md:text-sm font-semibold text-stone-500 uppercase tracking-widest mb-2">About Me</h3>
                <p className="text-base md:text-lg font-medium leading-snug text-stone-800">
                    Building digital products with a focus on <span className="text-emerald-600">simplicity</span> and <span className="text-rose-500">purpose</span>.
                    I turn complex problems into elegant solutions.
                </p>
            </div>
        </BentoItem>
    );
}
