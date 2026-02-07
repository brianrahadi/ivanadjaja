import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { BentoItem } from '../BentoItem';
import { RefreshCcw } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    delay?: number;
}

const ROWS = 8;
const COLS = 12;

// 5 available colors for well-plate
const COLORS = [
    { name: 'Pink', value: '#EC4899', bg: 'bg-pink-500' },
    { name: 'Blue', value: '#3B82F6', bg: 'bg-blue-500' },
    { name: 'Green', value: '#22C55E', bg: 'bg-green-500' },
    { name: 'Yellow', value: '#EAB308', bg: 'bg-yellow-500' },
    { name: 'Purple', value: '#A855F7', bg: 'bg-purple-500' },
];

export function PlayBlock({ colSpan, rowSpan, delay }: BlockProps) {
    const [selectedColor, setSelectedColor] = useState<number>(0);

    // Real-time subscription to all wells
    const wellsMap = useQuery(api.wells.getAll) ?? {};

    // Mutations for updating wells
    const setWell = useMutation(api.wells.setWell);
    const clearAllWells = useMutation(api.wells.clearAll);

    const handleWellClick = async (row: number, col: number) => {
        await setWell({ row, col, colorIndex: selectedColor });
    };

    const handleClearAll = async () => {
        await clearAllWells();
    };

    // Get well color from the real-time map
    const getWellColor = (row: number, col: number): number | null => {
        const key = `${row}-${col}`;
        return key in wellsMap ? wellsMap[key] : null;
    };

    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} delay={delay} className="h-64 md:h-auto flex flex-col relative !p-3 bg-[#F8F8F8] border-gray-200 overflow-hidden group md:order-3">
            {/* Color Palette & Controls */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex gap-1.5">
                    {COLORS.map((color, idx) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(idx)}
                            className={`w-5 h-5 rounded-full transition-all shadow-sm border-2 ${selectedColor === idx
                                ? 'border-gray-800 scale-110'
                                : 'border-transparent hover:scale-105'
                                }`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
                <button
                    onClick={handleClearAll}
                    className="p-1.5 rounded-full bg-white/60 hover:bg-white text-gray-600 transition-all shadow-sm"
                    title="Clear all"
                >
                    <RefreshCcw size={14} />
                </button>
            </div>

            {/* Well Plate Grid */}
            <div className="flex-1 flex items-center justify-center">
                <div
                    className="grid gap-[3px] p-2 bg-white rounded-lg shadow-inner border border-gray-200"
                    style={{
                        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                    }}
                >
                    {Array.from({ length: ROWS }).map((_, rowIdx) =>
                        Array.from({ length: COLS }).map((_, colIdx) => {
                            const wellColor = getWellColor(rowIdx, colIdx);
                            return (
                                <button
                                    key={`${rowIdx}-${colIdx}`}
                                    onClick={() => handleWellClick(rowIdx, colIdx)}
                                    className={`
                                        w-4 h-4 md:w-5 md:h-5 rounded-full 
                                        border border-gray-300
                                        transition-all duration-150
                                        hover:scale-110 hover:shadow-md
                                        ${wellColor === null ? 'bg-gray-100' : ''}
                                    `}
                                    style={{
                                        backgroundColor: wellColor !== null ? COLORS[wellColor].value : undefined,
                                    }}
                                />
                            );
                        })
                    )}
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-2 left-3 pointer-events-none">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                    Well Plate
                </span>
            </div>
        </BentoItem>
    );
}
