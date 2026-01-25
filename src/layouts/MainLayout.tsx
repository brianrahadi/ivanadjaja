import type { ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#ccd5ae] text-stone-800 font-sans selection:bg-rose-100 relative flex items-center justify-center p-8">
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
