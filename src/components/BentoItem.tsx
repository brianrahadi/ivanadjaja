import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function BentoItem({ children, className, colSpan = 1, rowSpan = 1 }: BentoItemProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-white border border-[#EDEBE8] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] transition-all duration-300",
                // Mobile first: default to full width (handled by grid cols), but here we control spans on different breakpoints
                "col-span-1", // Default mobile

                // Desktop (md) spans
                colSpan === 1 && "md:col-span-1",
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                colSpan === 4 && "md:col-span-4",

                rowSpan === 2 && "md:row-span-2",
                rowSpan === 3 && "md:row-span-3",
                rowSpan === 4 && "md:row-span-4",
                className
            )}
        >
            {children}
        </div>
    );
}
