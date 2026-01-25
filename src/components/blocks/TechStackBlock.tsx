import { BentoItem } from '../BentoItem';
import { Code2, Database, Globe, Layers } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
}

export function TechStackBlock({ colSpan = 1, rowSpan = 1 }: BlockProps) {
    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="bg-[#ECFDF5] border-[#D1FAE5]">
            <div className="h-full flex flex-col justify-between p-2">
                <Layers className="text-emerald-400" />
                <div>
                    <h4 className="font-bold text-lg text-emerald-900">Stack</h4>
                    <div className="flex gap-3 mt-2 text-emerald-600/80">
                        <Code2 size={20} />
                        <Database size={20} />
                        <Globe size={20} />
                    </div>
                </div>
            </div>
        </BentoItem>
    )
}
