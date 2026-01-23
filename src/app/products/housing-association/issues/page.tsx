"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    Camera,
    AlertTriangle,
    CheckCircle,
    Clock,
    MapPin,
    Wrench
} from "lucide-react";

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
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function IssuesPage() {
    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">

            {/* Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/products/housing-association"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 text-sm font-bold tracking-widest uppercase hover:text-orange-600 transition-colors shadow-sm"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* HERO */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 pt-20">
                <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-l from-red-100/50 to-transparent rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: "2s" }} />

                <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white mb-10 shadow-2xl shadow-orange-500/30">
                                <Wrench className="w-10 h-10" />
                            </div>
                            <h1 className="text-7xl md:text-[8rem] font-serif font-medium tracking-tight leading-[0.9] mb-10 text-[#111]">
                                Fix it <br />
                                <span className="italic text-orange-500">Faster.</span>
                            </h1>
                            <p className="text-2xl text-slate-500 max-w-lg leading-relaxed mb-12 font-light">
                                From "Broken Lock" to "Fixed" in record time. Visual reporting that actually works.
                            </p>
                        </motion.div>
                    </div>

                    {/* 3D Map / Cards Scene */}
                    <div className="relative h-[800px] flex items-center justify-center order-1 lg:order-2 perspective-[2000px]">
                        {/* Map Base */}
                        <motion.div
                            initial={{ rotateX: 30, rotateZ: -10, scale: 0.8, opacity: 0 }}
                            animate={{ rotateX: 20, rotateZ: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="w-[800px] h-[600px] bg-[#111] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative border border-slate-800"
                        >
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-74.006,40.7128,12,0/800x600@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazl5bSJ9')] bg-cover opacity-50 grayscale" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                            {/* Map Markers */}
                            <div className="absolute top-1/3 left-1/3">
                                <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute" />
                                <div className="w-4 h-4 bg-orange-500 rounded-full relative border-2 border-white" />
                            </div>
                            <div className="absolute top-1/2 left-2/3">
                                <div className="w-4 h-4 bg-red-500 rounded-full relative border-2 border-white" />
                            </div>
                        </motion.div>

                        {/* Floating Issue Cards */}
                        <FloatingElement x="10%" y="20%" rotate={-5} delay={0.2} className="z-20">
                            <div className="p-5 bg-white rounded-3xl shadow-2xl border border-slate-100 w-64">
                                <div className="h-32 bg-slate-100 rounded-xl mb-4 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1565514020125-9a4d8b6f3b06?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="lock" />
                                </div>
                                <h4 className="font-bold text-lg mb-1 text-[#111]">Broken Lock</h4>
                                <div className="flex items-center gap-2 text-xs text-orange-500 font-bold uppercase tracking-wide">
                                    <AlertTriangle className="w-3 h-3" /> High Priority
                                </div>
                            </div>
                        </FloatingElement>

                        <FloatingElement x="60%" y="60%" rotate={5} delay={0.4} className="z-20">
                            <div className="p-5 bg-white rounded-3xl shadow-2xl border border-slate-100 w-72 flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-[#111]">Resolved!</h4>
                                    <p className="text-sm text-slate-500">Janitor marked "Entrance Light" as fixed.</p>
                                </div>
                            </div>
                        </FloatingElement>
                    </div>
                </div>
            </section>

            {/* LIFESTYLE BREAK */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto h-[500px] rounded-[3rem] overflow-hidden relative group shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Maintenance" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent mix-blend-multiply" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-20 max-w-lg text-white">
                        <h3 className="text-5xl font-serif mb-6">Empower your caretakers.</h3>
                        <p className="text-xl opacity-90 leading-relaxed">Give your vendors and janitors the digital tools they need to do their best work. </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
