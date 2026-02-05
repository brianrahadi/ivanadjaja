import { useState, useEffect } from 'react';
import { BentoItem } from '../BentoItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import photo1 from '../../assets/photo1.jpeg';
import photo2 from '../../assets/photo2.jpeg';
import photo3 from '../../assets/photo3.jpeg';
import photo4 from '../../assets/photo4.jpeg';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    delay?: number;
}

const PHOTOS = [
    {
        url: photo1,
        alt: 'Concert'
    },
    {
        url: photo2,
        alt: 'Hiking'
    },
    {
        url: photo3,
        alt: 'Labwork'
    },
    {
        url: photo4,
        alt: 'Volunteering @ Geneskool'
    }
];

export function PhotoCollageBlock({ colSpan, rowSpan, delay }: BlockProps) {
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
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} delay={delay} className="h-64 md:h-auto !p-0 relative group md:order-1">
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
