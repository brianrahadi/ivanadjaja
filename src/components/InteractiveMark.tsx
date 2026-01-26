import { useState, useRef, useEffect, type ReactNode } from 'react';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

interface InteractiveMarkProps {
    children: ReactNode;
    content: ReactNode;
    className?: string;
}

export function InteractiveMark({ children, content, className }: InteractiveMarkProps) {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300); // 300ms delay to allow moving to popover if there's a gap
    };

    return (
        <span
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span
                className={cn(
                    "cursor-help rounded-md bg-stone-200/50 px-1 py-0.5 hover:bg-stone-300/50 transition-colors border-b-2 border-stone-300 hover:border-stone-400 decoration-0",
                    isOpen && "bg-stone-300/70 border-stone-500",
                    className
                )}
            >
                {children}
            </span>

            {isOpen && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-white rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200 border border-stone-100"
                >
                    <div className="relative">
                        <div className="text-sm text-stone-600 leading-relaxed max-h-48 overflow-y-auto">
                            {content}
                        </div>
                        {/* Arrow */}
                        <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white drop-shadow-sm filter" />
                    </div>
                </div>
            )}
        </span>
    );
}
