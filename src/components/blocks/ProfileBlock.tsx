import { BentoItem } from '../BentoItem';
import { InteractiveMark } from '../InteractiveMark';
import IvanaImg from '../../assets/ivana.webp';
import MemojiImg from '../../assets/memoji.png';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    delay?: number;
}

export function ProfileBlock({ colSpan, rowSpan, delay }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} delay={delay} className="flex flex-col md:flex-row p-0 md:p-0 !bg-transparent !shadow-none md:!bg-[#fefae0] md:!shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:hover:!shadow-[0_8px_16px_rgba(0,0,0,0.12)] md:rounded-3xl overflow-visible md:overflow-hidden">
            {/* Image Section */}
            <div className="flex justify-center items-center mb-6 md:mb-0 md:w-1/3 md:h-full md:relative perspective-1000 group/image">
                <div className="relative h-48 w-48 md:w-full md:h-full transition-transform duration-700 transform-style-3d group-hover/image:rotate-y-180">
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center md:bg-[#fefae0]">
                        <img
                            src={IvanaImg}
                            alt="Profile"
                            className="w-full h-full md:ml-4 md:w-48 md:h-48 object-cover rounded-full shadow-lg md:shadow-none"
                        />
                    </div>
                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center md:bg-[#fefae0]">
                        <img
                            src={MemojiImg}
                            alt="Profile Memoji"
                            className="w-full h-full md:ml-4 md:w-48 md:h-48 object-cover rounded-full shadow-lg md:shadow-none"
                        />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 md:p-8 md:flex md:flex-col md:justify-center">
                <div className="max-w-md mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold">Hello there!</h2>
                    <div className="prose prose-stone leading-relaxed">
                        I'm Ivana, a UBC-BCIT Biotechnology student interested in
                        <InteractiveMark content={
                            <span>
                                I'm fascinated by structural biology and protein engineering, specifically looking at how we can design novel therapeutics.
                            </span>
                        }>
                            biotech R&D
                        </InteractiveMark>. Outside of school, I enjoy{' '}
                        <InteractiveMark content={
                            <span>
                                It's my creative outlet! I love experimenting with different polish finishes, nail art designs, and colors. Check out my <a href="https://www.instagram.com/ivysmanis" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">nail art insta</a>!
                            </span>
                        }>
                            painting my nails
                        </InteractiveMark>,
                        <InteractiveMark content={
                            <span>
                                I like dystopian and historical fictions. Some of my favorites include The Poppy War trilogy and The Hunger Games series.
                            </span>
                        }>
                            reading fictions
                        </InteractiveMark>, and struggling to keep up hiking with my friends.
                    </div>
                </div>
            </div>
        </BentoItem>
    );
}
