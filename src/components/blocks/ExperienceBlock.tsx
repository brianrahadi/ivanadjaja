import { BentoItem } from '../BentoItem';
import { Briefcase } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

const EXPERIENCES = [
    {
        role: 'Biotechnology Student',
        company: 'UBC-BCIT',
        period: '2023 - Present',
        description: 'Joint Honours in Biotechnology'
    },
    {
        role: 'Research Assistant',
        company: 'BioLabs Inc.',
        period: 'Summer 2024',
        description: 'Assisted in genetic sequencing projects.'
    }
];

export function ExperienceBlock({ colSpan = 2, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col p-6">
            <div className="flex items-center gap-2 mb-4 text-stone-400">
                <Briefcase size={18} />
                <span className="text-xs font-bold tracking-widest uppercase">Experience</span>
            </div>

            <div className="flex flex-col gap-4">
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-200 group-hover:bg-emerald-400 transition-colors shrink-0" />
                        <div>
                            <h4 className="font-semibold text-stone-800 leading-snug">{exp.role}</h4>
                            <div className="text-sm text-stone-500 font-medium">{exp.company} • {exp.period}</div>
                            {/* <p className="text-sm text-stone-400 mt-1">{exp.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </BentoItem>
    );
}
