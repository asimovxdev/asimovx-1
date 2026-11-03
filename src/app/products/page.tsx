"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Building2,
    Utensils,
    Shield,
    Users,
    Clock,
    DollarSign
} from "lucide-react";
import Footer from "@/components/Footer";

const PRODUCTS = [
    {
        id: "workforce",
        title: "Next-Gen Workforce",
        subtitle: "Restaurant & Hospitality Workforce Platform",
        badge: "New Flagship SaaS",
        description:
            "A cloud-based, multi-tenant workforce management platform engineered specifically for the restaurant and hospitality sector. Streamlines department scheduling, live GPS time-tracking, timesheet reconciliation, and deterministic Swedish payroll export.",
        image: "/images/workforce/hero.jpg",
        href: "/products/workforce",
        tags: ["Multi-Tenant SaaS", "Sweden (SEK)", "Overnight Shifts", "Fortnox & Visma"],
        features: [
            "Weekly Department Scheduling (Kitchen, Bar, FOH, Cleaning)",
            "Overnight shifts (18:00–02:00) with date rollover",
            "Immutable raw attendance audit & digital punch clock",
            "Timesheet reconciliation with deviation flags & OB rates",
            "Labour cost % tracking against daily restaurant sales"
        ]
    },
    {
        id: "housing-association",
        title: "BrfNext",
        subtitle: "Digital Workspace for BRF Boards & Residents",
        badge: "Ecosystem Solution",
        description:
            "Built specifically for Swedish housing associations (BRF) to replace administrative chaos with a centralized digital workspace. Streamlines board management, issue tracking, common resource bookings, and resident communications.",
        image: "/images/brf/laptop.png",
        href: "/products/housing-association",
        tags: ["BRF Living Index", "BankID Ready", "Booking Engine", "Board Governance"],
        features: [
            "Centralized communication between board and residents",
            "Maintenance and facility issue tracking pipeline",
            "Resource booking (laundry, guest rooms, parking)",
            "Digital document archive with permanent board continuity",
            "Mobile-optimized resident portal"
        ]
    }
];

export default function ProductsPage() {
    return (
        <div className="bg-[#F9F8F6] text-[#111] font-sans selection:bg-[#EBE5D5] selection:text-[#111] min-h-screen">
            {/* Subtle Grain Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.35] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Header Ambient */}
            <div className="relative z-10 pt-20 pb-20 max-w-[1400px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111] text-white text-xs font-mono uppercase tracking-[0.2em] mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    AsimovX Product Ecosystem
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-serif font-medium text-[#111] tracking-tight mb-8"
                >
                    Engineered for <br />
                    <span className="italic">Operational Excellence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Explore our vertical SaaS platforms built to modernize specialized industry operations across Sweden and international markets.
                </motion.p>
            </div>

            {/* Products Showcase Cards */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-36 space-y-16">
                {PRODUCTS.map((prod) => (
                    <motion.div
                        key={prod.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-[2.5rem] border border-black/10 bg-white shadow-xl overflow-hidden p-8 sm:p-14 transition-all hover:shadow-2xl"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Content */}
                            <div className="lg:col-span-6 space-y-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs font-mono uppercase tracking-widest px-3.5 py-1 rounded-full bg-black text-white">
                                        {prod.badge}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">{prod.subtitle}</span>
                                </div>

                                <h2 className="text-4xl sm:text-6xl font-serif font-medium text-[#111] tracking-tight">
                                    {prod.title}
                                </h2>

                                <p className="text-slate-600 text-lg leading-relaxed font-light">
                                    {prod.description}
                                </p>

                                {/* Features Checklist */}
                                <div className="space-y-3 pt-2">
                                    {prod.features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-base text-slate-700">
                                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                            </div>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {prod.tags.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-[#F9F8F6] border border-black/5 text-xs font-mono text-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action */}
                                <div className="pt-6">
                                    <Link
                                        href={prod.href}
                                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#111] text-white font-bold text-base hover:scale-105 transition-all group"
                                    >
                                        <span>Explore {prod.title}</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Image Visual */}
                            <div className="lg:col-span-6">
                                <Link href={prod.href} className="block relative rounded-2xl overflow-hidden border border-black/10 group shadow-xl">
                                    <Image
                                        src={prod.image}
                                        alt={prod.title}
                                        width={1280}
                                        height={720}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 text-xs text-black font-semibold flex items-center gap-2">
                                        <span>Open Product Page</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
