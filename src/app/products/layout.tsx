"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { setTheme } = useTheme();

    // Force light theme for product pages as requested ("whitish ...not dark tone")
    useEffect(() => {
        setTheme("light");
        // Optional: Revert to dark or system when leaving, but that might be complex to handle cleanly here without context.
        // For now, we enforce light when this layout mounts.
        return () => {
            // We could reset to dark, but user might have manually toggled. 
            // Let's stick to just setting it to light on entry.
        };
    }, [setTheme]);

    return (
        <div className="min-h-screen bg-neutral-50 text-slate-900 selection:bg-blue-500 selection:text-white">
            {/* We might want a different navigation or header here since the main one is transparent/dark optimized */}
            {/* For now, we'll let the main Navbar persist but content will be light */}
            <div className="pt-24 pb-20">
                {children}
            </div>
        </div>
    );
}
