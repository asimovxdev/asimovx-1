"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    CalendarDays,
    Clock,
    DollarSign,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    FileSpreadsheet,
    Lock,
    ChevronRight,
    Maximize2,
    Database,
    UserCheck,
    Sliders,
    Layers,
    Globe,
} from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

export default function NextGenWorkforcePage() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [selectedPreviewImg, setSelectedPreviewImg] = useState<string | null>(null);
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="bg-white text-[#0A0A0A] min-h-screen selection:bg-violet-200 selection:text-violet-900" style={{ fontFamily: "'Plus Jakarta Sans', var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif" }}>

            {/* =========================================================== */}
            {/* HERO — Photorealistic Sky BG + 3D Rotated Multi-Screen Display */}
            {/* EXACT MATCH to uploaded reference (media_1793692041153_24cfec2e.png) */}
            {/* =========================================================== */}
            <section className="relative overflow-hidden pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-28">
                
                {/* 1. PHOTOREALISTIC SKY BACKGROUND (Soft, lowered opacity for an ethereal, subtle look) */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <img 
                        src="/images/workforce/sky-bg.jpg"
                        alt="Sky Background"
                        className="w-full h-full object-cover object-top opacity-40 md:opacity-45"
                    />
                    {/* Subtle transparent overlay ensuring text contrast, then fading to pure white at bottom */}
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.95) 85%, #ffffff 100%)"
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                    {/* Clean Editorial Kicker (No container box, no blinking dot) */}
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="flex items-center justify-center gap-2.5 mb-6"
                    >
                        <span className="text-[11px] font-mono uppercase tracking-[0.22em] font-semibold text-[#7C3AED]">
                            Next-Gen Workforce
                        </span>
                        <span className="text-slate-300 font-light text-xs">/</span>
                        <span className="text-[11px] font-medium tracking-wider uppercase text-slate-500">
                            Restaurant Workforce Platform
                        </span>
                    </motion.div>

                    {/* High-End Display Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.9rem] font-extrabold tracking-[-0.04em] text-[#0A0D14] leading-[1.04] mb-6 max-w-4xl mx-auto"
                    >
                        Cloud-based SaaS workforce management{" "}
                        <br className="hidden sm:inline" />
                        <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] pr-1">
                            for restaurants.
                        </span>
                    </motion.h1>

                    {/* Concise, Punchy Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-base sm:text-lg lg:text-[1.15rem] text-[#475467] font-normal leading-[1.65] max-w-2xl mx-auto mb-10 text-balance"
                    >
                        Streamline department scheduling, live digital attendance, timesheet reconciliation, and Swedish payroll export—built specifically for restaurants.
                    </motion.p>

                    {/* Premium CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center mb-16"
                    >
                        {/* Primary Button: Vibrant Violet Pill with Glow & Shimmer (Exact original dimensions restored) */}
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="relative group px-9 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] text-white font-semibold text-[15px] tracking-tight transition-all duration-300 shadow-[0_14px_32px_-6px_rgba(124,58,237,0.55),0_4px_12px_rgba(124,58,237,0.3)] hover:shadow-[0_18px_40px_-4px_rgba(124,58,237,0.65)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                            <span className="relative z-10">Start your free trial</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* =============================================================== */}
                    {/* 3D ROTATED DUAL SCREEN SHOWCASE (Ref Image Exact Match)          */}
                    {/* admin.jpeg in the foreground 3D rotated + secondary screen peek */}
                    {/* =============================================================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 45, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="relative max-w-5xl mx-auto pt-2 sm:pt-4"
                        style={{ perspective: "1300px" }}
                    >
                        {/* Soft ambient violet shadow pool under the 3D screens */}
                        <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-[70px] sm:h-[90px] bg-[#6D28D9]/25 blur-[50px] sm:blur-[70px] rounded-full pointer-events-none" />

                        <div className="relative flex items-center justify-center">

                            {/* BACK SCREEN (Left Peeking 3D Screen — Live Restaurant Dashboard) */}
                            <div
                                style={{
                                    transform: "rotateX(14deg) rotateY(-14deg) rotateZ(-3deg) translateZ(-40px)",
                                    transformStyle: "preserve-3d"
                                }}
                                className="hidden md:block absolute -left-12 lg:-left-20 top-4 lg:top-8 w-[72%] rounded-[28px] bg-[#0c0d10] p-3 pb-0 border border-slate-700/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45)] ring-1 ring-white/10 opacity-90 transition-transform duration-700 hover:scale-[1.01] hover:opacity-100 z-0 cursor-pointer"
                                onClick={() => setSelectedPreviewImg('/images/workforce/rest.jpeg')}
                            >
                                {/* Header */}
                                <div className="h-6 bg-[#16181d] rounded-t-[18px] flex items-center justify-between px-3 border-b border-black/40">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <span className="text-[8px] font-mono text-slate-400">app.asimovx.se</span>
                                </div>
                                <div className="relative overflow-hidden rounded-b-[18px]">
                                    <img
                                        src="/images/workforce/rest.jpeg"
                                        alt="Restaurant Live Platform"
                                        className="w-full h-[320px] lg:h-[400px] object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.06] pointer-events-none" />
                                </div>
                            </div>

                            {/* MAIN FOREGROUND 3D SCREEN — admin.jpeg (Responsive 3D: subtle tilt on mobile for crystal clarity, full dynamic tilt on desktop) */}
                            <div
                                className="relative z-10 w-full md:w-[88%] lg:w-[92%] rounded-2xl sm:rounded-[36px] bg-[#0c0d10] p-1.5 sm:p-3.5 pb-0 border border-slate-700/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.45),0_15px_30px_-10px_rgba(109,40,217,0.30)] md:shadow-[0_45px_120px_-15px_rgba(15,23,42,0.45),0_25px_60px_-15px_rgba(109,40,217,0.30)] ring-1 ring-white/20 transition-transform duration-700 hover:scale-[1.01] [transform:rotateX(4deg)_rotateY(-2deg)_rotateZ(0.4deg)] md:[transform:rotateX(12deg)_rotateY(-5deg)_rotateZ(0.8deg)] [transform-style:preserve-3d]"
                            >
                                {/* Tablet Header Bar with Camera Dot */}
                                <div className="relative h-6 sm:h-8 bg-[#16181d] rounded-t-[14px] sm:rounded-t-[28px] flex items-center justify-between px-2.5 sm:px-4 border-b border-black/50">
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f] inline-block" />
                                    </div>

                                    {/* Center Camera Notch Dot */}
                                    <div className="hidden xs:flex absolute left-1/2 -translate-x-1/2 top-1.5 sm:top-2 items-center justify-center">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#050507] ring-1 ring-white/20" />
                                    </div>

                                    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-mono text-slate-300">
                                        <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#A78BFA]" />
                                        <span className="truncate max-w-[125px] sm:max-w-none">admin.asimovx.se</span>
                                    </div>
                                </div>

                                {/* Main Screen Content: admin.jpeg */}
                                <div
                                    onClick={() => setSelectedPreviewImg('/images/workforce/admin.jpeg')}
                                    className="relative bg-slate-950 overflow-hidden cursor-pointer group rounded-b-[14px] sm:rounded-b-[28px]"
                                >
                                    <img
                                        src="/images/workforce/admin.jpeg"
                                        alt="Next-Gen Workforce Administration Control Center"
                                        className="w-full h-auto max-h-[500px] object-cover object-top block transition-transform duration-700 group-hover:scale-[1.015]"
                                    />

                                    {/* Glass reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />

                                    {/* Expand Trigger */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold text-slate-900 shadow-2xl flex items-center gap-2">
                                            <Maximize2 className="w-3.5 h-3.5 text-[#7C3AED]" />
                                            <span>Click to inspect high-resolution dashboard</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* Trust pill strip — clean responsive grid on mobile, sleek inline bar on desktop */}
                <div className="relative z-10 border-t border-[#DDD6FE]/60 bg-white/85 backdrop-blur-md mt-12 sm:mt-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
                        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-2 sm:gap-6 lg:gap-8 text-[11px] sm:text-xs text-slate-600 font-medium">
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-0 rounded-xl bg-violet-50/50 md:bg-transparent border border-violet-100/70 md:border-0 text-center">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                                <span>Market: <strong className="text-slate-800">Sweden (SEK)</strong></span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-0 rounded-xl bg-violet-50/50 md:bg-transparent border border-violet-100/70 md:border-0 text-center">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED] shrink-0" />
                                <span>TZ: <strong className="text-slate-800">Stockholm</strong></span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-0 rounded-xl bg-violet-50/50 md:bg-transparent border border-violet-100/70 md:border-0 text-center col-span-2 md:col-auto">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6D28D9] shrink-0" />
                                <span>Security: <strong className="text-slate-800">Isolated Multi-Tenant</strong></span>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-0 rounded-xl bg-violet-50/50 md:bg-transparent border border-violet-100/70 md:border-0 text-center col-span-2 md:col-auto">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#5B21B6] shrink-0" />
                                <span>Languages: <strong className="text-slate-800">English & Swedish</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================== */}
            {/* SECTION 2 — "The Data Challenge" equivalent                  */}
            {/* Left: Giant bold heading. Right: description copy + cards     */}
            {/* MATCHES: Ref image 2 "The Data Challenge Every Business Faces" */}
            {/* =========================================================== */}
            <section className="py-20 md:py-28 bg-white border-t border-slate-100">
                <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

                    {/* Two-column: big heading LEFT, description RIGHT */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
                        <div>
                            <h2 className="font-extrabold tracking-[-0.035em] text-[#0A0D14] leading-[1.05]"
                                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                                Purpose-Built for Hospitality Realities.
                            </h2>
                        </div>
                        <div className="lg:pt-2">
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                                Restaurants typically face high staff turnover, complex shift patterns (including overnight shifts), split shifts, varying wage rates, and strict compliance requirements.
                            </p>
                            <p className="text-sm font-bold text-[#5B21B6]">
                                Next-Gen Workforce solves these by:
                            </p>
                        </div>
                    </div>

                    {/* 3-column screenshot cards — matching ref image 2 row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card: Live Restaurant Platform */}
                        <div className="rounded-2xl border border-[#EDE9FE] bg-white overflow-hidden shadow-[0_4px_18px_-4px_rgba(109,40,217,0.1)] hover:shadow-[0_12px_32px_-6px_rgba(109,40,217,0.18)] hover:border-[#C4B5FD] transition-all group">
                            <div
                                onClick={() => setSelectedPreviewImg('/images/workforce/rest.jpeg')}
                                className="relative overflow-hidden cursor-pointer border-b border-[#EDE9FE] bg-[#FAF9FF] h-[160px] xs:h-[180px]"
                            >
                                <img
                                    src="/images/workforce/rest.jpeg"
                                    alt="Live Restaurant Platform"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Live Restaurant Operations</p>
                                <h3 className="font-bold text-slate-900 text-sm leading-snug">Restaurant Workforce Platform</h3>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Multi-department operational workspace connecting Front-of-House, Bar, and Kitchen.</p>
                            </div>
                        </div>

                        {/* Card: Scheduling screenshot — center highlighted like ref */}
                        <div className="rounded-2xl border-2 border-[#7C3AED] bg-white overflow-hidden shadow-[0_8px_32px_-6px_rgba(109,40,217,0.25)] group">
                            <div
                                onClick={() => setSelectedPreviewImg('/images/workforce/sheduling.jpeg')}
                                className="relative overflow-hidden cursor-pointer border-b border-[#EDE9FE] bg-[#F5F3FF] h-[160px] xs:h-[180px]"
                            >
                                <img
                                    src="/images/workforce/sheduling.jpeg"
                                    alt="Weekly Scheduling Grid"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-2.5 right-2.5 bg-[#7C3AED] text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                                    Core Feature
                                </div>
                            </div>
                            <div className="p-4 sm:p-5">
                                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Weekly Scheduling</p>
                                <h3 className="font-bold text-slate-900 text-sm leading-snug">Department Scheduling Grid</h3>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Weekly rosters across Kitchen, Bar, Service, Cleaning — with full overnight shift support.</p>
                            </div>
                        </div>

                        {/* Card: Employee portal screenshot */}
                        <div className="rounded-2xl border border-[#EDE9FE] bg-white overflow-hidden shadow-[0_4px_18px_-4px_rgba(109,40,217,0.1)] hover:shadow-[0_12px_32px_-6px_rgba(109,40,217,0.18)] hover:border-[#C4B5FD] transition-all group">
                            <div
                                onClick={() => setSelectedPreviewImg('/images/workforce/emp.jpeg')}
                                className="relative overflow-hidden cursor-pointer border-b border-[#EDE9FE] bg-[#FAF9FF] h-[160px] xs:h-[180px]"
                            >
                                <img
                                    src="/images/workforce/emp.jpeg"
                                    alt="Employee Mobile Self-Service Portal"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Employee Portal</p>
                                <h3 className="font-bold text-slate-900 text-sm leading-snug">Mobile Self-Service Portal</h3>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">View schedules, clock in/out, log breaks, request leave and set availability — from any device.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================================== */}
            {/* SECTION 3 — INTERACTIVE WORKFLOW GOVERNANCE PIPELINE        */}
            {/* Dynamic, animated, high-end multi-tier architecture showcase */}
            {/* =========================================================== */}
            <section id="roles" className="py-24 md:py-32 bg-gradient-to-b from-[#FAF9FF] via-[#FFFFFF] to-[#FAF9FF] border-t border-slate-100 relative overflow-hidden">
                
                {/* Ambient glow blobs */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#DDD6FE]/20 blur-[130px] rounded-full pointer-events-none -z-0" />

                <div className="max-w-[1300px] mx-auto px-6 lg:px-10 relative z-10">

                    {/* Centered heading block */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DDD6FE] shadow-sm mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#5B21B6]">
                                4-Tier Security & Control
                            </span>
                        </div>
                        <h2 className="font-extrabold tracking-[-0.035em] text-[#0A0D14] leading-[1.05] mb-4"
                            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                            Role-Based Workflow Governance.
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed">
                            Structured separation of duties ensuring operational control across every organizational layer.
                        </p>
                    </div>

                    {/* Mobile Quick-Step Segmented Bar (Mobile phones only; iPad & Desktop show full grid) */}
                    <div className="md:hidden flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-[#DDD6FE] shadow-sm mb-6 overflow-x-auto no-scrollbar">
                        {[
                            { num: "01", name: "Super Admin" },
                            { num: "02", name: "Owner" },
                            { num: "03", name: "Manager" },
                            { num: "04", name: "Employee" }
                        ].map((step, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`flex-1 min-w-[76px] py-2 px-1.5 rounded-xl text-center text-[10px] font-mono font-bold transition-all ${
                                    activeStep === idx
                                        ? "bg-[#7C3AED] text-white shadow-md shadow-violet-500/25"
                                        : "text-slate-600 hover:bg-[#F5F3FF]"
                                }`}
                            >
                                <span className="block text-[9px] opacity-80">{step.num}</span>
                                <span className="truncate block">{step.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* CONNECTED INTERACTIVE PIPELINE CARDS */}
                    <div className="relative mb-8 sm:mb-12">
                        
                        {/* Glowing connector beam behind the cards (desktop) */}
                        <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#7C3AED]/20 via-[#8B5CF6]/40 to-[#4C1D95]/20 pointer-events-none z-0">
                            <div 
                                className="h-full bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent w-32 animate-pulse"
                                style={{ transform: `translateX(${activeStep * 100}%)`, transition: "transform 0.5s ease" }}
                            />
                        </div>

                        {/* 4 Interactive Step Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
                            {[
                                {
                                    step: "Step 1",
                                    stepNum: "01",
                                    role: "Platform Super Admin",
                                    desc: "Platform-level management, tenant onboarding, tenant lifecycle & hard deletion.",
                                    tag: "Full Platform Access",
                                    icon: Globe,
                                    badge: "Root Control",
                                    accent: "#7C3AED",
                                    gradient: "from-[#7C3AED] to-[#5B21B6]"
                                },
                                {
                                    step: "Step 2",
                                    stepNum: "02",
                                    role: "Restaurant Admin / Owner",
                                    desc: "Organization settings, locations, departments, employment contracts, and salary configs.",
                                    tag: "Org Management",
                                    icon: Layers,
                                    badge: "Org Entity",
                                    accent: "#6D28D9",
                                    gradient: "from-[#6D28D9] to-[#4C1D95]"
                                },
                                {
                                    step: "Step 3",
                                    stepNum: "03",
                                    role: "Manager",
                                    desc: "Weekly schedule planning, approving leave/availability, handling attendance exceptions, timesheet approvals.",
                                    tag: "Schedule & Approvals",
                                    icon: CalendarDays,
                                    badge: "Shift Roster",
                                    accent: "#8B5CF6",
                                    gradient: "from-[#8B5CF6] to-[#6D28D9]"
                                },
                                {
                                    step: "Step 4",
                                    stepNum: "04",
                                    role: "Employee",
                                    desc: "Mobile-friendly portal to view schedules, clock in/out, log breaks, request leave, and set availability.",
                                    tag: "Self-Service",
                                    icon: UserCheck,
                                    badge: "Mobile Portal",
                                    accent: "#4C1D95",
                                    gradient: "from-[#4C1D95] to-[#3B0764]"
                                },
                            ].map((item, i) => {
                                const isActive = activeStep === i;
                                const IconComponent = item.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        onMouseEnter={() => setActiveStep(i)}
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                                            isActive
                                                ? "bg-gradient-to-b from-white via-[#FAF9FF] to-white border-2 border-[#7C3AED] shadow-[0_16px_36px_-10px_rgba(124,58,237,0.22)] ring-4 ring-[#7C3AED]/10 -translate-y-1 sm:-translate-y-2"
                                                : "bg-white/90 backdrop-blur-sm border border-[#EDE9FE] shadow-[0_4px_20px_-4px_rgba(109,40,217,0.06)] hover:border-[#C4B5FD] hover:shadow-[0_12px_32px_-6px_rgba(109,40,217,0.12)]"
                                        }`}
                                    >
                                        {/* Active card indicator glow */}
                                        {isActive && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent rounded-full" />
                                        )}

                                        <div>
                                            {/* Header with Step Node & Icon */}
                                            <div className="flex items-center justify-between mb-4 sm:mb-5">
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs text-white shadow-sm bg-gradient-to-br ${item.gradient}`}>
                                                        {item.stepNum}
                                                    </span>
                                                    <span className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${
                                                        isActive 
                                                            ? "bg-[#F5F3FF] border-[#DDD6FE] text-[#6D28D9]" 
                                                            : "bg-slate-50 border-slate-200 text-slate-500"
                                                    }`}>
                                                        {item.step}
                                                    </span>
                                                </div>

                                                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors ${
                                                    isActive 
                                                        ? "bg-[#7C3AED] text-white shadow-md shadow-violet-500/30" 
                                                        : "bg-[#F5F3FF] text-[#7C3AED] border border-[#EDE9FE]"
                                                }`}>
                                                    <IconComponent className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Title & Description */}
                                            <h3 className={`font-bold text-sm sm:text-base leading-snug mb-2 sm:mb-2.5 transition-colors ${
                                                isActive ? "text-[#5B21B6]" : "text-[#0A0D14]"
                                            }`}>
                                                {item.role}
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Tag Bar */}
                                        <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-6 border-t border-[#F5F3FF] flex items-center justify-between">
                                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-semibold text-[#6D28D9]">
                                                <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? "text-[#7C3AED]" : "text-[#A78BFA]"}`} />
                                                <span>{item.tag}</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-400 font-medium">
                                                {item.badge}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* LIVE WORKFLOW INSPECTOR CONSOLE (Animated dynamic deep-dive panel) */}
                    <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#DDD6FE]/80 shadow-[0_16px_50px_-12px_rgba(109,40,217,0.12)] p-4 sm:p-6 md:p-8 relative overflow-hidden">
                        
                        {/* Top glowing ambient accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#4C1D95]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            >
                                {/* Left Column: Role Details */}
                                <div className="lg:col-span-5 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-[#6D28D9] font-mono text-xs font-bold">
                                            Stage 0{activeStep + 1} Authority
                                        </span>
                                        <span className="text-xs font-mono text-slate-400">
                                            Level-Gated Clearance
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-[#0A0D14] tracking-tight">
                                        {[
                                            "Platform Super Admin",
                                            "Restaurant Admin / Owner",
                                            "Manager",
                                            "Employee"
                                        ][activeStep]}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                                        {[
                                            "Platform-level management, tenant onboarding, tenant lifecycle & hard deletion.",
                                            "Organization settings, locations, departments, employment contracts, and salary configs.",
                                            "Weekly schedule planning, approving leave/availability, handling attendance exceptions, timesheet approvals.",
                                            "Mobile-friendly portal to view schedules, clock in/out, log breaks, request leave, and set availability."
                                        ][activeStep]}
                                    </p>
                                </div>

                                {/* Right Column: Pipeline Cascade Flow */}
                                <div className="lg:col-span-7">
                                    <div className="p-5 rounded-2xl bg-[#FAF9FF] border border-[#EDE9FE] space-y-3">
                                        <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-500 pb-2 border-b border-[#EDE9FE]">
                                            <span className="text-[#6D28D9] flex items-center gap-1.5">
                                                <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
                                                Enforced Responsibilities
                                            </span>
                                            <span>Tenant Isolation Level</span>
                                        </div>

                                        {/* 3 Checkpoint Execution Items */}
                                        <div className="space-y-2.5 pt-1">
                                            {[
                                                [
                                                    "Tenant onboarding and dedicated namespace isolation provisioning",
                                                    "Platform-wide organization lifecycle & hard deletion control",
                                                    "Global multi-tenant infrastructure & audit governance"
                                                ],
                                                [
                                                    "Organization hierarchy setup (locations, departments, roles)",
                                                    "Employment contracts, salary rules, and Swedish OB rates",
                                                    "Deterministic payroll export configuration (CSV & Excel)"
                                                ],
                                                [
                                                    "Weekly department scheduling grid (Kitchen, Bar, Service, Cleaning)",
                                                    "Overnight shift rollover support & deviation flag handling",
                                                    "Timesheet reconciliation, manager sign-off, and break calculations"
                                                ],
                                                [
                                                    "Mobile self-service portal for schedule viewing and shift updates",
                                                    "Geo-verified digital punch clock (clock-in, breaks, clock-out)",
                                                    "Leave requests (vacation, sick, parental) & availability submissions"
                                                ]
                                            ][activeStep].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-xs text-slate-700">
                                                    <div className="w-5 h-5 rounded-full bg-white border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED] shadow-sm shrink-0">
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>

                </div>
            </section>


            {/* =========================================================== */}
            {/* SECTION 4 — "Eliminate Mistakes" Large Screenshot Cards     */}
            {/* MATCHES: HubTub's bottom section with big image cards        */}
            {/* =========================================================== */}
            <section className="py-20 md:py-28 bg-white border-t border-slate-100">
                <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

                    <div className="text-center max-w-2xl mx-auto mb-5">
                        <h2 className="font-extrabold tracking-[-0.035em] text-[#0A0D14] leading-[1.05] mb-4"
                            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                            Eliminate Workforce Administration Mistakes.
                        </h2>
                        <p className="text-base text-slate-600">
                            Eliminate manual shift errors, payroll miscalculations, and attendance discrepancies with platform-enforced automation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

                        {/* Left large card: Scheduling screenshot */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 24 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl sm:rounded-3xl bg-[#FAF9FF] border border-[#DDD6FE] overflow-hidden shadow-[0_6px_28px_-6px_rgba(109,40,217,0.12)] hover:shadow-[0_14px_40px_-8px_rgba(109,40,217,0.2)] transition-all"
                        >
                            <div
                                onClick={() => setSelectedPreviewImg('/images/workforce/sheduling.jpeg')}
                                className="relative cursor-pointer group overflow-hidden h-[180px] xs:h-[220px] sm:h-[260px]"
                            >
                                <img
                                    src="/images/workforce/sheduling.jpeg"
                                    alt="Weekly Department Scheduling Grid"
                                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-600"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/30 via-transparent to-transparent" />
                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#DDD6FE] text-[9px] sm:text-[10px] font-mono font-bold text-[#5B21B6] flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                                    <span>Weekly Scheduling Grid</span>
                                </div>
                            </div>
                            <div className="p-5 sm:p-7">
                                <h3 className="text-base sm:text-lg font-extrabold text-[#0A0A0A] mb-2 sm:mb-2.5">Weekly Department-Based Scheduling</h3>
                                <ul className="space-y-2 text-[11px] sm:text-xs text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span>Drag-and-drop or grid scheduling grouped by department (Kitchen, Bar, Service, Cleaning, etc.).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span>Support for overnight shifts (e.g., 18:00 to 02:00) spanning midnight.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span>Draft, Published, and Archived workflow states with audit tracking.</span>
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                                    {["Kitchen", "Bar", "Service", "Cleaning"].map(t => (
                                        <span key={t} className="px-2.5 py-1 rounded-md bg-white border border-[#DDD6FE] text-[10px] font-mono text-[#5B21B6] font-semibold">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right large card: Administration screenshot */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 24 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="rounded-2xl sm:rounded-3xl bg-[#FAF9FF] border border-[#DDD6FE] overflow-hidden shadow-[0_6px_28px_-6px_rgba(109,40,217,0.12)] hover:shadow-[0_14px_40px_-8px_rgba(109,40,217,0.2)] transition-all"
                        >
                            <div
                                onClick={() => setSelectedPreviewImg('/images/workforce/admin.jpeg')}
                                className="relative cursor-pointer group overflow-hidden h-[180px] xs:h-[220px] sm:h-[260px]"
                            >
                                <img
                                    src="/images/workforce/admin.jpeg"
                                    alt="Administration Control Center"
                                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-600"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/30 via-transparent to-transparent" />
                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#DDD6FE] text-[9px] sm:text-[10px] font-mono font-bold text-[#5B21B6] flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                                    <span>Administration Control</span>
                                </div>
                            </div>
                            <div className="p-5 sm:p-7">
                                <h3 className="text-base sm:text-lg font-extrabold text-[#0A0A0A] mb-2 sm:mb-2.5">Timesheet Reconciliation & Payroll Export</h3>
                                <ul className="space-y-2 text-[11px] sm:text-xs text-slate-600">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span>Side-by-side comparison of planned vs. actual minutes, unpaid break deductions, and calculated payable time.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span>Deterministic salary calculations (hourly wages, supplements/OB rates, fixed salaries).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span>Payroll-ready export generation (CSV/Excel) for Swedish payroll systems.</span>
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                                    {["CSV Export", "Excel Ready", "OB Rates", "Fortnox & Visma"].map(t => (
                                        <span key={t} className="px-2.5 py-1 rounded-md bg-white border border-[#DDD6FE] text-[10px] font-mono text-[#5B21B6] font-semibold">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* =========================================================== */}
            {/* SECTION 5 — "All the Tools You Need" equivalent               */}
            {/* Centered heading + 3-col feature tool cards                  */}
            {/* MATCHES: Ref image 2 "All the Tools" section                 */}
            {/* =========================================================== */}
            <section id="features" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-100">
                <div className="max-w-[1300px] mx-auto px-6 lg:px-10">

                    <div className="text-center max-w-2xl mx-auto mb-5">
                        <h2 className="font-extrabold tracking-[-0.035em] text-[#0A0D14] leading-[1.05]"
                            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                            All the Tools You Need for Powerful Workforce Management
                        </h2>
                        <p className="text-base text-slate-600 mt-4">
                            Get the best value with comprehensive workforce orchestration. Whether you need basic features or a fully automated solution, we&apos;ve got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">

                        {/* Tool Card 1: Digital Time & Attendance */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                            className="rounded-2xl bg-white border border-[#EDE9FE] overflow-hidden shadow-[0_4px_16px_-4px_rgba(109,40,217,0.08)] hover:border-[#A78BFA] hover:shadow-[0_12px_32px_-8px_rgba(109,40,217,0.18)] transition-all flex flex-col"
                        >
                            <div className="p-3.5 sm:p-4 pb-0">
                                <div
                                    onClick={() => setSelectedPreviewImg('/images/workforce/emp.jpeg')}
                                    className="relative overflow-hidden rounded-xl cursor-pointer group bg-[#FAF9FF] border border-[#EDE9FE] h-[130px] sm:h-[140px]"
                                >
                                    <img
                                        src="/images/workforce/emp.jpeg"
                                        alt="Digital Time & Attendance"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 flex flex-col gap-2.5 sm:gap-3 flex-1">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED]">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Digital Time & Attendance</h3>
                                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                                    Live clock-in, break start/end, and clock-out tracking. Strict preservation of raw attendance alongside scheduled shifts — scheduled shifts are never overwritten.
                                </p>
                                <div className="pt-3 sm:pt-4 border-t border-[#F5F3FF] text-[11px] sm:text-xs font-bold text-[#5B21B6] flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-[#7C3AED]" />
                                    <span>No Overwrites · Raw Preservation</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tool Card 2: Availability & Leave */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.08 }}
                            className="rounded-2xl bg-white border-2 border-[#7C3AED] overflow-hidden shadow-[0_8px_28px_-6px_rgba(109,40,217,0.25)] flex flex-col"
                        >
                            <div className="p-3.5 sm:p-4 pb-0">
                                <div
                                    onClick={() => setSelectedPreviewImg('/images/workforce/rest.jpeg')}
                                    className="relative overflow-hidden rounded-xl cursor-pointer group bg-[#F5F3FF] border border-[#DDD6FE] h-[130px] sm:h-[140px]"
                                >
                                    <img
                                        src="/images/workforce/rest.jpeg"
                                        alt="Availability & Leave Management"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-[#7C3AED] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">Most Used</div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 flex flex-col gap-2.5 sm:gap-3 flex-1">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED]">
                                    <UserCheck className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Availability & Leave Management</h3>
                                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                                    Employee availability submissions (preferred/unavailable dates and times). Formal leave requests (vacation, sick leave, parental leave) with approval pipelines.
                                </p>
                                <div className="pt-3 sm:pt-4 border-t border-[#EDE9FE] flex flex-wrap gap-1.5">
                                    {["Vacation", "Sick Leave", "Parental Leave"].map(t => (
                                        <span key={t} className="px-2 py-0.5 rounded bg-[#F5F3FF] border border-[#DDD6FE] text-[9px] font-mono text-[#5B21B6] font-bold">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Tool Card 3: Multi-Tenant Security with Radar */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.16 }}
                            className="rounded-2xl bg-white border border-[#EDE9FE] overflow-hidden shadow-[0_4px_16px_-4px_rgba(109,40,217,0.08)] hover:border-[#A78BFA] hover:shadow-[0_12px_32px_-8px_rgba(109,40,217,0.18)] transition-all flex flex-col"
                        >
                            <div className="p-3.5 sm:p-4 pb-0">
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] border border-[#6D28D9] flex items-center justify-center h-[130px] sm:h-[140px]">
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
                                        style={{ transformStyle: "preserve-3d", transform: "rotateX(30deg)" }}
                                    >
                                        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#A78BFA]/50" />
                                        <div className="absolute w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#C4B5FD]/30 border-dashed" />
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                            className="absolute inset-0"
                                        >
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#A78BFA] ring-2 ring-[#DDD6FE]/50 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                                        </motion.div>
                                        <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                                            <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2.5 right-2.5 text-[9px] font-mono font-bold text-white/70">Strict Tenant Isolation</div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 flex flex-col gap-2.5 sm:gap-3 flex-1">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED]">
                                    <Lock className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Multi-Tenant Security & Localization</h3>
                                <p className="text-xs text-slate-600 leading-relaxed flex-1">
                                    Strict backend-enforced tenant isolation. Built-in multi-language support (Swedish sv and English en).
                                </p>
                                <div className="pt-3 sm:pt-4 border-t border-[#F5F3FF] text-[11px] sm:text-xs font-bold text-[#5B21B6] flex items-center justify-between">
                                    <span>Swedish & English</span>
                                    <span className="text-[#6D28D9]">Strict Isolation</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* =========================================================== */}
            {/* SECTION 6 — "Trusted by Industry Leaders" equivalent         */}
            {/* MATCHES: Ref image 2 bottom CTA section                      */}
            {/* =========================================================== */}
            <section className="py-20 md:py-28 bg-white border-t border-slate-100">
                <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                        <div>
                            <h2 className="font-extrabold tracking-[-0.035em] text-[#0A0D14] leading-[1.05] mb-4"
                                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                                Streamline your restaurant workforce today.
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed mb-8">
                                Experience automated weekly department scheduling, digital attendance, timesheet reconciliation, and Swedish payroll export.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setIsDemoModalOpen(true)}
                                    className="px-8 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm transition-all shadow-[0_10px_28px_-6px_rgba(124,58,237,0.45)] hover:scale-[1.02]"
                                >
                                    Start your free trial
                                </button>
                                <Link
                                    href="/contact"
                                    className="px-8 py-3.5 rounded-full border border-[#DDD6FE] bg-white text-[#0A0A0A] font-bold text-sm hover:bg-[#F5F3FF] hover:border-[#A78BFA] transition-all"
                                >
                                    Talk to our team
                                </Link>
                            </div>
                        </div>

                        {/* Specification info cards */}
                        <div className="space-y-3 sm:space-y-4">
                            {[
                                { label: "Initial Market", value: "Sweden (SEK) — Timezone: Europe/Stockholm — Multi-language: English & Swedish", icon: <Globe className="w-4 h-4" /> },
                                { label: "Core Product Architecture", value: "Platform → Organization (Tenant) → Location → Department → Employee. Multi-tenant modular monolith with backend-enforced tenant isolation.", icon: <Layers className="w-4 h-4" /> },
                                { label: "Specification Reference", value: "Detailed in the Master PRD and AGENTS.md. Production hospitality spec.", icon: <CheckCircle2 className="w-4 h-4" /> },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#EDE9FE] bg-[#FAF9FF]">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#7C3AED] shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7C3AED] mb-1">{item.label}</p>
                                        <p className="text-xs text-slate-700 leading-relaxed">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            {/* Lightbox Modal */}
            {selectedPreviewImg && (
                <div
                    onClick={() => setSelectedPreviewImg(null)}
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 cursor-pointer"
                >
                    <div
                        className="max-w-6xl max-h-[90vh] overflow-auto rounded-2xl sm:rounded-3xl bg-white p-1.5 sm:p-2 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <img src={selectedPreviewImg} alt="Preview" className="w-full h-auto rounded-xl sm:rounded-2xl" />
                    </div>
                </div>
            )}

            <BookDemoModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
                productName="Next-Gen Workforce"
                productDescription="See how Next-Gen Workforce automates scheduling, timesheets, and Swedish payroll export for your restaurant."
                organizationLabel="Restaurant / Group Name"
                organizationPlaceholder="e.g. Stockholm Bistro Group or Gamla Stan Krog"
            />

            {/* Minimal Product Page Footer */}
            <footer className="py-8 bg-white border-t border-slate-100 text-xs text-slate-500">
                <div className="max-w-[1300px] mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-[11px] text-slate-400">
                        © {new Date().getFullYear()} AsimovX Technologies. Next-Gen Workforce.
                    </p>
                    <div className="flex items-center gap-6 font-medium text-slate-500">
                        <Link href="/products" className="hover:text-[#7C3AED] transition-colors">Products</Link>
                        <Link href="/contact" className="hover:text-[#7C3AED] transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
