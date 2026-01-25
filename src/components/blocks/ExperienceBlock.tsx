import { useState } from 'react';
import { BentoItem } from '../BentoItem';
import { Briefcase, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

const WORK_EXPERIENCE = [
    {
        role: 'Research Assistant',
        company: 'Beatty Lab @ UBC',
        period: 'May 2025 - Aug 2025',
        description: 'Investigated cell surface receptors for the phage-like gene transfer agent (RcGTA) in Rhodobacter capsulatus using FastCloning to generate knock-out mutants.'
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
    },
    {
        role: 'Student Research Assistant',
        company: 'Langara College',
        period: 'May 2022 - Aug 2022',
        description: 'Assisted with research on chaga mushroom (Inonotus obliquus), commonly used in traditional Chinese medicine'
    }
];

const VOLUNTEER_EXPERIENCE = [
    {
        role: 'Vice President of Technology',
        company: 'UBC-BCIT Biotechnology Student Association',
        period: 'Oct. 2022 - Now',
        description: 'Led the technology committee, overseeing the development and maintenance of the association\'s website and social media presence.'
    },
    {
        role: 'Geneskool Volunteer',
        company: 'Genome British Columbia',
        period: 'Dec. 2022 - Now',
        description: 'Assisted in the organization of the Geneskool event, a hands-on genetics workshop for high school students.'
    },
    {
        role: 'Chemistry Peer Tutor',
        company: 'Langara College',
        period: 'Jan. 2022 - Apr. 2022',
        description: 'Assisted students in understanding complex chemistry concepts through one-on-one tutoring.'
    }
];

type TabType = 'work' | 'volunteering';

export function ExperienceBlock({ colSpan = 2, rowSpan = 2 }: BlockProps) {
    const [activeTab, setActiveTab] = useState<TabType>('work');

    const experiences = activeTab === 'work' ? WORK_EXPERIENCE : VOLUNTEER_EXPERIENCE;

    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="flex flex-col p-6 md:order-2">
            <div className="flex items-center justify-between mb-6">
                <div className="flex bg-stone-100 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveTab('work')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
                            activeTab === 'work'
                                ? "bg-white text-stone-800 shadow-sm"
                                : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                        )}
                    >
                        <Briefcase size={14} />
                        Work
                    </button>
                    <button
                        onClick={() => setActiveTab('volunteering')}
                        className={cn(
                            "flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300",
                            activeTab === 'volunteering'
                                ? "bg-white text-stone-800 shadow-sm"
                                : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                        )}
                    >
                        <Heart size={14} />
                        Volunteering
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 items-start group animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className={cn(
                            "mt-1.5 w-2 h-2 rounded-full transition-colors shrink-0",
                            activeTab === 'work' ? "bg-emerald-200 group-hover:bg-emerald-400" : "bg-rose-200 group-hover:bg-rose-400"
                        )} />
                        <div>
                            <h4 className="font-semibold text-stone-800 leading-snug">{exp.role}</h4>
                            <div className="text-sm text-stone-500 font-medium mb-1">{exp.company} • {exp.period}</div>
                            <p className="text-sm text-stone-400 leading-relaxed max-w-prose">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </BentoItem>
    );
}
