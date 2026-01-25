import { BentoItem } from '../BentoItem';
import { Briefcase } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

const EXPERIENCES = [
    {
        role: 'Research Assistant',
        company: 'Beatty Lab @ UBC',
        period: 'May 2025 - Aug 2025',
        description: 'WLIURA award recipient. Investigated cell surface receptors for the phage-like gene transfer agent (RcGTA) in Rhodobacter capsulatus using FastCloning to generate knock-out mutants.'
    },
    {
        role: 'Protein Engineering Co-op',
        company: 'Zymeworks Inc.',
        period: 'May 2024 - Apr 2025',
        description: 'Evaluated developability of therapeutic antibody formats as part of a personal protein engineering project.'
    },
    {
        role: 'Environmental Microbiology Co-op',
        company: 'BC Centre for Disease Control',
        period: 'May 2023 - Sep 2023',
        description: 'Compared detection methods for Legionella pneumophila in cooling tower water samples.'
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
