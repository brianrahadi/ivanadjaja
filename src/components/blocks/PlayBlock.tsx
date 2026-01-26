import { useState, useEffect, useCallback, useRef } from 'react';
import { BentoItem } from '../BentoItem';
import { RefreshCcw, Pause, Play } from 'lucide-react';

interface BlockProps {
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2 | 3 | 4;
    delay?: number;
}

const ROWS = 20;
const COLS = 20;
const DENSITY = 0.3;

const OPERATIONS = [
    [0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]
];

export function PlayBlock({ colSpan, rowSpan, delay }: BlockProps) {
    const [grid, setGrid] = useState<number[][]>([]);
    const [running, setRunning] = useState(true);
    const runningRef = useRef(running);
    runningRef.current = running;

    // const generateEmptyGrid = () => {
    //     const rows = [];
    //     for (let i = 0; i < ROWS; i++) {
    //         rows.push(Array.from(Array(COLS), () => 0));
    //     }
    //     return rows;
    // };

    const generateRandomGrid = () => {
        const rows = [];
        for (let i = 0; i < ROWS; i++) {
            rows.push(Array.from(Array(COLS), () => Math.random() > (1 - DENSITY) ? 1 : 0));
        }
        return rows;
    };

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        setGrid((g) => {
            const newGrid = g.map(arr => [...arr]);

            for (let i = 0; i < ROWS; i++) {
                for (let k = 0; k < COLS; k++) {
                    let neighbors = 0;
                    OPERATIONS.forEach(([x, y]) => {
                        const newI = i + x;
                        const newK = k + y;
                        if (newI >= 0 && newI < ROWS && newK >= 0 && newK < COLS) {
                            neighbors += g[newI][newK];
                        }
                    });

                    if (neighbors < 2 || neighbors > 3) {
                        newGrid[i][k] = 0;
                    } else if (g[i][k] === 0 && neighbors === 3) {
                        newGrid[i][k] = 1;
                    }
                }
            }
            return newGrid;
        });

        setTimeout(runSimulation, 200);
    }, []);

    useEffect(() => {
        setGrid(generateRandomGrid());
    }, []);

    useEffect(() => {
        if (running) {
            runningRef.current = true;
            runSimulation();
        } else {
            runningRef.current = false;
        }
    }, [running, runSimulation]);

    const handleGridClick = (i: number, k: number) => {
        const newGrid = grid.map(arr => [...arr]);
        newGrid[i][k] = grid[i][k] ? 0 : 1;
        setGrid(newGrid);
    };

    return (
        <BentoItem colSpan={colSpan} rowSpan={rowSpan} delay={delay} className="h-64 md:h-auto flex flex-col relative !p-0 bg-[#E8F3E8] border-[#D1FAE5] overflow-hidden group md:order-3">
            {/* Controls */}
            <div className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={() => setRunning(!running)}
                    className="p-1.5 rounded-full bg-white/60 hover:bg-white text-emerald-800 transition-all shadow-sm"
                >
                    {running ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                    onClick={() => setGrid(generateRandomGrid())}
                    className="p-1.5 rounded-full bg-white/60 hover:bg-white text-emerald-800 transition-all shadow-sm"
                >
                    <RefreshCcw size={14} />
                </button>
            </div>

            <div
                className="w-full h-full grid gap-[1px]"
                style={{
                    gridTemplateColumns: `repeat(${COLS}, 1fr)`
                }}
            >
                {grid.map((rows, i) =>
                    rows.map((_col, k) => (
                        <div
                            key={`${i}-${k}`}
                            onClick={() => handleGridClick(i, k)}
                            className={`
                                w-full h-full transition-colors duration-300
                                ${grid[i][k] ? 'bg-emerald-400' : 'bg-transparent hover:bg-emerald-200/50'}
                            `}
                        />
                    ))
                )}
            </div>

            {/* Label */}
            <div className="absolute bottom-3 left-4 pointer-events-none">
                <span className="text-xs font-bold text-emerald-800/50 tracking-widest uppercase">
                    Game of Life
                </span>
            </div>
        </BentoItem>
    );
}
