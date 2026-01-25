import { useState, useEffect } from 'react';
import { BentoItem } from '../BentoItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

const PHOTOS = [
    {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
        alt: 'Nature landscape'
    },
    {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop',
        alt: 'Office workspace'
    },
    {
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
        alt: 'Tech setup'
    }
];

export function PhotoCollageBlock({ colSpan = 1, rowSpan = 1 }: BlockProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
    };

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextPhoto, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="!p-0 relative group md:order-1">
            <div className="w-full h-full relative">
                {PHOTOS.map((photo, index) => (
                    <img
                        key={photo.url}
                        src={photo.url}
                        alt={photo.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}

                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                        className="p-1.5 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 text-white transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                        className="p-1.5 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 text-white transition-colors"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {PHOTOS.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </BentoItem>
    );
}
