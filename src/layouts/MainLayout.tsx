import type { ReactNode } from 'react';
import { Header } from '../components/Header';

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#ccd5ae] text-stone-800 font-pica selection:bg-rose-100 relative flex flex-col items-center p-4 md:p-8">
            <Header />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
