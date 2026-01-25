import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]",
            "max-w-4xl mx-auto p-4",
            className
        )}>
            {children}
        </div>
    );
}
