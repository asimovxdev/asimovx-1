"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import WorkforceNavbar from "@/components/WorkforceNavbar";

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { setTheme } = useTheme();
    const pathname = usePathname();
    const isWorkforce = pathname === "/products/workforce" || pathname === "/products/restaurant-workforce";

    useEffect(() => {
        setTheme("light");
    }, [setTheme]);

    return (
        <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-violet-200 selection:text-violet-900">
            {isWorkforce ? <WorkforceNavbar /> : <Navbar />}
            <div className={isWorkforce ? "pt-0 pb-0" : "pt-20 pb-0"}>
                {children}
            </div>
        </div>
    );
}
