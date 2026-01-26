import type { ReactNode } from 'react';
import { Header } from '../components/Header';

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#ccd5ae] text-stone-800 font-pica selection:bg-rose-100 relative flex flex-col items-center p-4">
            <Header />
            <div className="w-full">
                {children}
            </div>

            <footer className="mt-12 mb-2 text-center text-stone-500 text-sm font-pica opacity-60 hover:opacity-100 transition-opacity">
                <a href="https://brianrahadi.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    built with &lt;3 by brianrahadi
                </a>
            </footer>
        </div>
    );
}
