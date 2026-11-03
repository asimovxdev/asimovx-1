"use client";

import React, { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkforceNavbar() {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 50 && !isMobileMenuOpen) {
            setIsHidden(true);
            setIsLangOpen(false);
        } else if (latest < previous || latest <= 50) {
            setIsHidden(false);
        }
    });

    const isProductsActive = pathname?.startsWith('/products');

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-120%", opacity: 0 }
                }}
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-4 sm:px-8 pointer-events-none"
            >
                {/* Floating Frosted Glass Navbar Island */}
                <div className="max-w-[1360px] mx-auto rounded-full bg-white/80 backdrop-blur-xl border border-[#DDD6FE]/80 shadow-[0_8px_32px_rgba(109,40,217,0.08)] py-2.5 sm:py-3 px-5 sm:px-8 flex items-center justify-between pointer-events-auto">

                    {/* Logo (Same AsimovX Logo) */}
                    <Link href="/" className="flex items-center gap-2.5 group cursor-pointer z-50">
                        <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                            <NextImage src="/logo.svg" alt="Asimovx Logo" fill className="object-contain" />
                        </div>
                        <div className="text-sm sm:text-base font-bold tracking-[0.18em] text-slate-950">
                            ASIMOV<span className="text-[#7C3AED]">X</span> <span className="text-[#7C3AED] italic">.</span>
                        </div>
                    </Link>

                    {/* Desktop Menu (Same original site navigation items) */}
                    <div className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11px] font-bold tracking-[0.16em] uppercase text-slate-600">
                        <Link
                            href="/"
                            className={`transition-colors ${pathname === '/' ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}
                        >
                            {t('navbar.home')}
                        </Link>

                        {/* Products Dropdown (Same exact items: Next-Gen Workforce & BrfNext) */}
                        <div className="relative group">
                            <button className={`flex items-center gap-1 transition-colors ${isProductsActive ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}>
                                <span>{t('navbar.products') || "PRODUCTS"}</span>
                                <ChevronDown className="w-3 h-3 text-[#A78BFA] transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                                <div className="bg-white/95 border border-[#DDD6FE] p-2.5 rounded-2xl shadow-xl min-w-[310px] backdrop-blur-xl">
                                    <Link
                                        href="/products/workforce"
                                        className={`block p-3 rounded-xl transition-all ${pathname === '/products/workforce' ? 'bg-[#F5F3FF]' : 'hover:bg-[#F5F3FF]/70'}`}
                                    >
                                        <div className="text-sm font-bold text-slate-900 mb-1 flex items-center justify-between gap-2">
                                            <span>Next-Gen Workforce</span>
                                            <span className="text-[9px] bg-violet-100 text-[#6D28D9] border border-[#DDD6FE] px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider">
                                                Restaurant SaaS
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-slate-500 normal-case tracking-normal">
                                            Workforce platform built specifically for restaurants & hospitality
                                        </div>
                                    </Link>

                                    <div className="h-px bg-slate-100 my-1" />

                                    <Link
                                        href="/products/housing-association"
                                        className={`block p-3 rounded-xl transition-all ${pathname === '/products/housing-association' ? 'bg-[#F5F3FF]' : 'hover:bg-[#F5F3FF]/70'}`}
                                    >
                                        <div className="text-sm font-bold text-slate-900 mb-1">
                                            BrfNext
                                        </div>
                                        <div className="text-[11px] text-slate-500 normal-case tracking-normal">
                                            Digital workspace for Swedish housing associations and residents
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className={`transition-colors ${pathname === '/about' ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}
                        >
                            {t('navbar.about')}
                        </Link>

                        <Link
                            href="/services"
                            className={`transition-colors ${pathname === '/services' ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}
                        >
                            {t('navbar.services')}
                        </Link>

                        <Link
                            href="/portfolio"
                            className={`transition-colors ${pathname === '/portfolio' ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}
                        >
                            {t('navbar.portfolio')}
                        </Link>

                        <Link
                            href="/careers"
                            className={`transition-colors ${pathname === '/careers' ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}
                        >
                            {t('navbar.careers')}
                        </Link>

                        <Link
                            href="/blog"
                            className={`transition-colors ${pathname === '/blog' ? 'text-[#7C3AED] font-extrabold' : 'hover:text-[#7C3AED]'}`}
                        >
                            {t('navbar.blog')}
                        </Link>
                    </div>

                    {/* Right Action Cluster (Language Switcher + Contact) */}
                    <div className="flex items-center gap-3 sm:gap-4 pl-3 sm:pl-4 border-l border-slate-200">
                        
                        {/* Language Selector (Same exact EN, ES, SV, DA items) */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-1.5 text-slate-700 hover:text-[#7C3AED] text-xs font-bold tracking-widest uppercase transition-colors"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe className="w-3.5 h-3.5 text-[#7C3AED]" />
                                <span>{language}</span>
                            </button>

                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="absolute right-0 top-full mt-3 w-36 bg-white/95 border border-[#DDD6FE] rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl z-50 p-1"
                                >
                                    {['EN', 'ES', 'SV', 'DA'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => {
                                                setLanguage(lang as any);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold tracking-widest transition-colors ${
                                                language === lang 
                                                    ? 'text-[#6D28D9] bg-[#F5F3FF] font-extrabold' 
                                                    : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                        >
                                            {lang === 'EN' ? 'English' : lang === 'ES' ? 'Español' : lang === 'SV' ? 'Svenska' : 'Dansk'}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Contact CTA Button (Same original action in floating violet style) */}
                        <Link href="/contact">
                            <button className="px-5 py-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[10px] font-bold tracking-[0.18em] uppercase transition-all shadow-[0_6px_18px_-3px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.98]">
                                {t('navbar.contact')}
                            </button>
                        </Link>

                        {/* Mobile Menu Hamburger */}
                        <button
                            className="lg:hidden text-slate-900 p-1.5 rounded-lg hover:bg-[#F5F3FF] transition-colors ml-1"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#7C3AED]" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Overlay (Same exact items) */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden mt-3 max-w-sm mx-auto rounded-3xl bg-white/95 backdrop-blur-xl border border-[#DDD6FE] p-6 shadow-2xl space-y-4 pointer-events-auto"
                        >
                            <nav className="flex flex-col space-y-2 text-xs font-bold tracking-[0.16em] uppercase text-slate-700">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-xl hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
                                >
                                    {t('navbar.home')}
                                </Link>

                                <div className="space-y-1.5 pl-3 border-l-2 border-[#DDD6FE] my-1">
                                    <span className="text-[10px] text-[#7C3AED] font-bold block mb-1">PRODUCTS</span>
                                    <Link
                                        href="/products/workforce"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-2 py-1.5 text-xs normal-case font-bold text-[#6D28D9] hover:bg-[#F5F3FF] rounded-lg"
                                    >
                                        Next-Gen Workforce
                                    </Link>
                                    <Link
                                        href="/products/housing-association"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-2 py-1.5 text-xs normal-case font-bold text-slate-700 hover:bg-[#F5F3FF] rounded-lg"
                                    >
                                        BrfNext
                                    </Link>
                                </div>

                                <Link
                                    href="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-xl hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
                                >
                                    {t('navbar.about')}
                                </Link>

                                <Link
                                    href="/services"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-xl hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
                                >
                                    {t('navbar.services')}
                                </Link>

                                <Link
                                    href="/portfolio"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-xl hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
                                >
                                    {t('navbar.portfolio')}
                                </Link>

                                <Link
                                    href="/careers"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-xl hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
                                >
                                    {t('navbar.careers')}
                                </Link>

                                <Link
                                    href="/blog"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded-xl hover:bg-[#F5F3FF] hover:text-[#7C3AED] transition-colors"
                                >
                                    {t('navbar.blog')}
                                </Link>
                            </nav>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-xs font-mono font-bold">
                                    {['EN', 'ES', 'SV', 'DA'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => setLanguage(lang as any)}
                                            className={`px-2.5 py-1 rounded-full ${language === lang ? "bg-[#7C3AED] text-white" : "text-slate-600"}`}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>

                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-2 rounded-full bg-[#7C3AED] text-white text-[10px] font-bold tracking-wider uppercase"
                                >
                                    {t('navbar.contact')}
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}
