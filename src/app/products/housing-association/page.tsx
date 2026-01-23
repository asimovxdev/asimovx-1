"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import {
    MessageSquare,
    ClipboardCheck,
    CalendarDays,
    FileText,
    ShieldCheck,
    ArrowRight,
    LayoutDashboard,
    MoveRight,
    Bell,
    CheckCircle2,
    TrendingUp,
    Users,
    Zap,
    Globe,
    Wifi,
    Activity,
    Layers,
    Search,
    Menu
} from "lucide-react";

// --- Components ---

function Marquee({ children, direction = 1, speed = 50 }: any) {
    return (
        <div className="flex overflow-hidden whitespace-nowrap mask-linear-fade">
            <motion.div
                className="flex gap-12 py-4"
                animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

function FloatingElement({ children, delay = 0, x = 0, y = 0, rotate = 0, scale = 1, className = "" }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: rotate - 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`absolute ${className}`}
            style={{ left: x, top: y, scale }}
        >
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

// --- DYNAMIC STICKY SCROLL ---

const STICKY_CONTENT = [
    {
        title: "Unified Command.",
        desc: "Bring your board, residents, and vendors into one shared reality. No more lost emails or WhatsApp threads.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", // Tech/Team
        overlayComponent: (
            <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] text-white shadow-2xl max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-200" />
                        ))}
                    </div>
                    <div className="font-bold text-lg">Board Members Active</div>
                </div>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-green-400"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Visual Clarity.",
        desc: "See exactly what's happening in your building. From broken lights to budget usage, visualize it all.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Data/Graph
        overlayComponent: (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-[2rem] text-white shadow-2xl">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="text-5xl font-serif font-medium">98.5%</div>
                        <div className="text-sm text-slate-400 uppercase tracking-widest mt-2">System Uptime</div>
                    </div>
                    <TrendingUp className="w-10 h-10 text-green-400" />
                </div>
                <div className="grid grid-cols-4 gap-2 h-24 items-end">
                    {[40, 70, 50, 90].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-blue-500 rounded-t-lg opacity-80"
                        />
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "Future Proof.",
        desc: "Built on modern infrastructure that grows with you. Secure, fast, and always online.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyber/Tech
        overlayComponent: (
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <div className="w-[300px] h-[300px] rounded-full border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                        <div className="w-[250px] h-[250px] rounded-full border border-dashed border-white/20" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] px-8 py-4 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl">
                        <ShieldCheck className="text-emerald-500 w-8 h-8" />
                        <span className="text-white font-bold tracking-widest text-lg">SECURE</span>
                    </div>
                </div>
            </div>
        )
    }
];

function ScrollTrigger({ onEnter, children }: { onEnter: () => void, children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) onEnter();
    }, [isInView, onEnter]);

    return (
        <div ref={ref} className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20">
            {children}
        </div>
    );
}

function StickyScrollSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#111] relative">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

                {/* VISUAL HALF (Sticky) */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0 order-2">
                    <div className="w-full h-full relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <img
                                    src={STICKY_CONTENT[activeIndex].img}
                                    className="w-full h-full object-cover opacity-60"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#111] via-transparent to-transparent" />

                                {/* Overlay Component */}
                                {STICKY_CONTENT[activeIndex].overlayComponent}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* TEXT HALF (Scrolling) */}
                <div className="w-full lg:w-1/2 order-1 relative z-10">
                    {STICKY_CONTENT.map((item, index) => (
                        <ScrollTrigger key={index} onEnter={() => setActiveIndex(index)}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className={`text-6xl md:text-8xl font-serif font-bold transition-colors duration-500 ${index === activeIndex ? 'text-white opacity-100' : 'text-slate-700 opacity-20'}`}>
                                    0{index + 1}
                                </span>
                                <div className={`h-px flex-1 transition-colors duration-500 ${index === activeIndex ? 'bg-white' : 'bg-slate-800'}`} />
                            </div>
                            <h3 className={`text-5xl md:text-8xl font-serif font-medium mb-8 leading-tight transition-colors duration-500 ${index === activeIndex ? 'text-white' : 'text-slate-600'}`}>
                                {item.title}
                            </h3>
                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl">
                                {item.desc}
                            </p>

                            {/* Mobile Only Image Show */}
                            <div className="lg:hidden mt-10 rounded-3xl overflow-hidden h-[400px] relative">
                                <img src={item.img} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-[#111]/20" />
                                <div className="absolute bottom-0 w-full">
                                    {item.overlayComponent}
                                </div>
                            </div>
                        </ScrollTrigger>
                    ))}
                </div>
            </div>
        </section>
    );
}

const SUITE_FEATURES = [
    {
        title: "Communication",
        desc: "Reach everyone instantly.",
        href: "/products/housing-association/communication",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        icon: MessageSquare,
        color: "bg-blue-50"
    },
    {
        title: "Issues",
        desc: "Fix things faster.",
        href: "/products/housing-association/issues",
        img: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
        icon: ClipboardCheck,
        color: "bg-orange-50"
    },
    {
        title: "Archives",
        desc: "Safe storage.",
        href: "/products/housing-association/documents",
        img: "https://images.unsplash.com/photo-1568028476727-0742d82299db?q=80&w=2070&auto=format&fit=crop",
        icon: FileText,
        color: "bg-emerald-50"
    },
    {
        title: "Booking",
        desc: "Resource management.",
        href: "/products/housing-association/booking",
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
        icon: CalendarDays,
        color: "bg-violet-50"
    },
    {
        title: "Board",
        desc: "Operational command.",
        href: "/products/housing-association/board",
        img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
        icon: LayoutDashboard,
        color: "bg-rose-50"
    },
    {
        title: "Residents",
        desc: "Self-service portal.",
        href: "/products/housing-association/resident-portal",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2531&auto=format&fit=crop",
        icon: ShieldCheck,
        color: "bg-cyan-50"
    }
];

function LivingIndex() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring for the cursor follower
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <section className="py-40 bg-[#F9F8F6] relative z-20 overflow-hidden cursor-default">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-24 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">The Suite</h2>
                    <p className="text-xl md:text-2xl font-light text-[#111]">Everything in its right place.</p>
                </div>

                <div className="flex flex-col">
                    {SUITE_FEATURES.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className="group relative border-t border-slate-200 py-16 flex items-start justify-between transition-all duration-500 hover:border-slate-900"
                        >
                            <div className="flex items-center gap-8">
                                <span className={`text-xl font-bold uppercase tracking-widest transition-colors duration-500 ${activeIndex === index ? 'text-[#111]' : 'text-slate-300'}`}>0{index + 1}</span>

                                <span className={`text-6xl md:text-8xl font-serif font-medium transition-colors duration-500 ${activeIndex !== null && activeIndex !== index ? 'text-slate-200 blur-[2px]' : 'text-[#111]'}`}>
                                    {item.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className={`text-lg md:text-xl font-light tracking-wide transition-colors duration-500 ${activeIndex !== null && activeIndex !== index ? 'text-slate-200' : 'text-slate-500 group-hover:text-[#111]'}`}>
                                    {item.desc}
                                </span>
                                <item.icon className={`w-8 h-8 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                            </div>
                        </Link>
                    ))}
                    <div className="border-t border-slate-200" />
                </div>
            </div>

            {/* Floating Reveal Image */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                            left: springX,
                            top: springY,
                            translateX: "-50%",
                            translateY: "-50%"
                        }}
                        className="fixed z-50 pointer-events-none w-[400px] h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <img
                            src={SUITE_FEATURES[activeIndex].img}
                            className="w-full h-full object-cover"
                            alt="Feature Preview"
                        />
                        <div className="absolute inset-0 bg-black/10" />

                        {/* Floating Caption on Image */}
                        <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-3">
                            {/* @ts-ignore */}
                            {React.createElement(SUITE_FEATURES[activeIndex].icon, { className: "w-5 h-5 text-white" })}
                            <span className="text-white font-bold tracking-widest text-sm uppercase">{SUITE_FEATURES[activeIndex].title}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default function HousingAssociationProductPage() {

    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-[#EBE5D5] selection:text-[#111]">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[120vh] pt-32 pb-20 overflow-hidden flex flex-col items-center">

                {/* Subtle Grain Texture */}
                <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                {/* Marquee Background Top */}
                <div className="absolute top-32 w-full opacity-5 pointer-events-none rotate-[-2deg] scale-110">
                    <Marquee speed={40}>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter">System Online</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter text-transparent stroke-2 stroke-black" style={{ WebkitTextStroke: "2px black" }}>Secure</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter">Connected</span>
                        <span className="text-[8rem] font-bold uppercase tracking-tighter text-transparent stroke-2 stroke-black" style={{ WebkitTextStroke: "2px black" }}>Live</span>
                    </Marquee>
                </div>

                <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full">
                    <div className="text-center max-w-5xl mx-auto mb-32 mt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center mb-8"
                        >
                            <div className="flex items-center gap-6 px-8 py-3 bg-[#111] text-white rounded-full">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">AsimovX Ecosystem</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-8xl md:text-[10rem] leading-[0.8] font-serif font-medium text-[#111] tracking-tight mb-12"
                        >
                            Board work, <br />
                            <span className="italic opacity-40">perfected.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-3xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            A premium digital layer for your building. <br />
                            <span className="text-[#111]">Beautiful. Automated. Effortless.</span>
                        </motion.p>
                    </div>

                    {/* 3D Main Scene - DENSE */}
                    <div className="relative w-full h-[800px] perspective-[2000px] flex items-center justify-center">

                        {/* Floating Widget Clouds */}
                        <FloatingElement x="15%" y="10%" delay={0.2} rotate={-10}>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Wifi className="w-5 h-5" /></div>
                                <div>
                                    <div className="font-bold text-sm">Network Status</div>
                                    <div className="text-xs text-green-500 font-bold uppercase">Optimal</div>
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="10%" y="40%" delay={0.4} rotate={5}>
                            <div className="bg-[#111] text-white p-6 rounded-[2rem] shadow-xl w-48">
                                <Activity className="w-8 h-8 mb-4 text-green-400" />
                                <div className="text-3xl font-bold font-serif">42ms</div>
                                <div className="text-xs opacity-50 uppercase tracking-widest">Latency</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="80%" y="15%" delay={0.3} rotate={10}>
                            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />)}
                                </div>
                                <div className="text-xs font-bold uppercase text-slate-400">3 Users Live</div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="75%" y="60%" delay={0.5} rotate={-5}>
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3 mb-3 border-b border-slate-50 pb-3">
                                    <Bell className="w-5 h-5 text-red-500" />
                                    <span className="font-bold text-sm">New Alert</span>
                                </div>
                                <p className="text-sm text-slate-500">Water pressure warning detected in Building A.</p>
                            </div>
                        </FloatingElement>

                        {/* Main Dashboard UI - Tilted */}
                        <motion.div
                            initial={{ rotateX: 25, rotateY: 0, scale: 0.9, opacity: 0 }}
                            animate={{ rotateX: 20, rotateY: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-[1000px] h-[700px] bg-[#FDFDFD] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-[#E5E5E5] relative z-10 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="h-20 border-b border-[#F0F0F0] flex items-center px-10 justify-between">
                                <div className="flex items-center gap-4">
                                    <Menu className="w-6 h-6 text-slate-300" />
                                    <div className="h-4 w-32 bg-slate-100 rounded-full" />
                                </div>
                                <div className="flex gap-4">
                                    <Search className="w-6 h-6 text-slate-300" />
                                    <div className="w-10 h-10 rounded-full bg-slate-100" />
                                </div>
                            </div>

                            {/* Grid Content */}
                            <div className="p-10 grid grid-cols-12 gap-8 bg-[#FAFAFA] h-full">
                                <div className="col-span-3 space-y-4 border-r border-[#EEEEEE] pr-8">
                                    <div className="h-10 w-full bg-[#111] rounded-xl" />
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 w-full bg-white rounded-xl border border-slate-100" />)}
                                </div>
                                <div className="col-span-9 grid grid-cols-2 gap-8 content-start">
                                    <div className="col-span-2 h-64 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <div className="text-4xl font-serif font-medium text-[#111]">$24,500</div>
                                                <div className="text-sm text-slate-400 uppercase tracking-widest mt-1">Monthly Revenue</div>
                                            </div>
                                            <div className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold">+12%</div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-32 flex items-end px-8 gap-4">
                                            {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((h, i) => (
                                                <div key={i} className="flex-1 bg-[#111] opacity-10 rounded-t-lg hover:opacity-100 transition-opacity" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-48 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Users className="w-8 h-8" /></div>
                                        <div className="font-bold text-xl">Residents</div>
                                    </div>
                                    <div className="h-48 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center"><ClipboardCheck className="w-8 h-8" /></div>
                                        <div className="font-bold text-xl">Open Tasks</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- STICKY SCROLL SECTION --- */}
            <StickyScrollSection />

            {/* --- LIVING INDEX --- */}
            <LivingIndex />

            {/* --- BIG CTA --- */}
            <section className="py-40 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-7xl md:text-9xl font-serif text-[#111] mb-12 tracking-tight">
                        Ready to <br /> <span className="italic">Elevate?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-[#111] text-white rounded-full text-xl font-bold tracking-wide hover:scale-105 transition-transform">
                            Book a Demo
                        </button>
                        <button className="px-12 py-6 bg-white border border-slate-200 text-[#111] rounded-full text-xl font-bold tracking-wide hover:bg-slate-50 transition-colors">
                            View Pricing
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
