import { BentoItem } from '../BentoItem';
import IvanaImg from '../../assets/ivana.webp';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function ProfileBlock({ colSpan = 2, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col md:flex-row p-4 md:p-0 bg-[#fefae0] overflow-hidden">
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
                <div className="prose prose-stone">
                    I'm Ivana, a UBC-BCIT Biotechnology student with interests in biological research and development. Outside of school, I enjoy painting my nails, reading books, and hiking with my friends.
                </div>
            </div>
        </BentoItem>
    );
}
