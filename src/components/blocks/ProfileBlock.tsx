import { BentoItem } from '../BentoItem';
import { InteractiveMark } from '../InteractiveMark';
import IvanaImg from '../../assets/ivana.webp';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    delay?: number;
}

export function ProfileBlock({ colSpan, rowSpan, delay }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} delay={delay} className="flex flex-row p-4 md:p-0 bg-[#fefae0] overflow-hidden">
            {/* Image Section */}
            <div className="flex justify-between items-start mb-4 md:w-1/3 md:h-full md:relative">
                <div className="h-24 w-24 rounded-2xl overflow-hidden md:rounded-none md:border-none md:w-full md:h-full md:absolute md:inset-0">
                    <img
                        src={IvanaImg}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full md:rounded-none"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 md:p-8 md:flex md:flex-col md:justify-center">
                <h2 className="text-xl md:text-2xl font-bold">Hello there!</h2>
                <div className="prose prose-stone leading-relaxed">
                    I'm Ivana, a UBC-BCIT Biotechnology student interested in
                    <InteractiveMark content={
                        <span>
                            I'm fascinated by structural biology and protein engineering, specifically looking at how we can design novel therapeutics.
                        </span>
                    }>
                        biology research and development
                    </InteractiveMark>. Outside of school, I enjoy{' '}
                    <InteractiveMark content={
                        <span>
                            It's my creative outlet! I love experimenting with different polish finishes, nail art designs, and colors. Check my <a href="https://www.instagram.com/ivysmanis" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Instagram</a>!
                        </span>
                    }>
                        painting my nails
                    </InteractiveMark>,
                    <InteractiveMark content={
                        <span>
                            I like dystopian and historical fiction. Some of my favorites include The Poppy War trilogy by R.F. Kuang and The Hunger Games series by Suzanne Collins.
                        </span>
                    }>
                        reading books
                    </InteractiveMark>, and hiking with my friends.
                </div>
            </div>
        </BentoItem>
    );
}
