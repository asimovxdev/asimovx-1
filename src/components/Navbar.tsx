"use client";

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        // Hide when scrolling down past 50px, reveal when scrolling up or back at top
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
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 }
                }}
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-5 transition-colors duration-300 bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-black/[0.07] dark:border-white/10"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 text-lg md:text-xl font-bold tracking-[0.2em] group cursor-pointer z-50">
                    <div className="relative w-8 h-8 md:w-9 md:h-9">
                        <NextImage src="/logo.svg" alt="Asimovx Logo" fill className="object-contain" />
                    </div>
                    <div className="text-slate-900 dark:text-white">
                        ASIMOV<span className="text-[#9033FF]">X</span> <span className="text-accent italic">.</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                    <div className="flex space-x-7 xl:space-x-10 text-[11px] font-bold tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400">
                        <Link 
                            href="/" 
                            className={`transition-colors ${pathname === '/' ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}
                        >
                            {t('navbar.home')}
                        </Link>

                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button className={`flex items-center gap-1 transition-colors ${isProductsActive ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}>
                                <span>PRODUCTS</span>
                                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                                <div className="bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-white/10 p-2.5 rounded-2xl shadow-xl min-w-[310px] backdrop-blur-xl">
                                    <Link
                                        href="/products/workforce"
                                        className={`block p-3 rounded-xl transition-all ${pathname === '/products/workforce' ? 'bg-slate-100 dark:bg-white/10' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                    >
                                        <div className="text-sm font-bold text-slate-900 dark:text-white mb-1 flex items-center justify-between gap-2">
                                            <span>Next-Gen Workforce</span>
                                            <span className="text-[9px] bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider">
                                                Restaurant SaaS
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-slate-500 dark:text-slate-400 normal-case tracking-normal">
                                            Workforce platform built specifically for restaurants & hospitality
                                        </div>
                                    </Link>

                                    <div className="h-px bg-slate-100 dark:bg-white/10 my-1" />

                                    <Link
                                        href="/products/housing-association"
                                        className={`block p-3 rounded-xl transition-all ${pathname === '/products/housing-association' ? 'bg-slate-100 dark:bg-white/10' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}
                                    >
                                        <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                                            BrfNext
                                        </div>
                                        <div className="text-[11px] text-slate-500 dark:text-slate-400 normal-case tracking-normal">
                                            Digital workspace for Swedish housing associations and residents
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link 
                            href="/about" 
                            className={`transition-colors ${pathname === '/about' ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}
                        >
                            {t('navbar.about')}
                        </Link>
                        
                        <Link 
                            href="/services" 
                            className={`transition-colors ${pathname === '/services' ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}
                        >
                            {t('navbar.services')}
                        </Link>
                        
                        <Link 
                            href="/portfolio" 
                            className={`transition-colors ${pathname === '/portfolio' ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}
                        >
                            {t('navbar.portfolio')}
                        </Link>
                        
                        <Link 
                            href="/careers" 
                            className={`transition-colors ${pathname === '/careers' ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}
                        >
                            {t('navbar.careers')}
                        </Link>
                        
                        <Link 
                            href="/blog" 
                            className={`transition-colors ${pathname === '/blog' ? 'text-black dark:text-white font-extrabold' : 'hover:text-black dark:hover:text-white'}`}
                        >
                            {t('navbar.blog')}
                        </Link>
                    </div>

                    {/* Right Action Cluster */}
                    <div className="flex gap-5 items-center border-l border-slate-200 dark:border-white/10 pl-5">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-xs font-bold tracking-widest uppercase transition-colors"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe className="w-3.5 h-3.5" />
                                <span>{language}</span>
                            </button>

                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="absolute right-0 top-full mt-3 w-36 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl z-50"
                                >
                                    {['EN', 'ES', 'SV', 'DA'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => {
                                                setLanguage(lang as any);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-xs font-bold tracking-widest hover:bg-slate-50 dark:hover:bg-white/10 transition-colors ${language === lang ? 'text-black dark:text-white bg-slate-100/60 dark:bg-white/5 font-extrabold' : 'text-slate-500 dark:text-slate-400'}`}
                                        >
                                            {lang === 'EN' ? 'English' : lang === 'ES' ? 'Español' : lang === 'SV' ? 'Svenska' : 'Dansk'}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Contact Button */}
                        <Link href="/contact">
                            <button className="px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm">
                                {t('navbar.contact')}
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Hamburger */}
                <button
                    className="lg:hidden text-slate-900 dark:text-white z-50 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </div>
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white/98 dark:bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-7 px-6"
                    >
                        <div className="flex flex-col items-center gap-6 text-lg font-bold tracking-[0.18em] uppercase text-slate-900 dark:text-white">
                            <Link 
                                href="/products/workforce" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="hover:text-accent transition-colors flex items-center gap-2"
                            >
                                <span>Next-Gen Workforce</span>
                                <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full lowercase tracking-normal font-mono">new</span>
                            </Link>
                            <Link href="/products/housing-association" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">BrfNext</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.about')}</Link>
                            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.services')}</Link>
                            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.portfolio')}</Link>
                            <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.careers')}</Link>
                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.blog')}</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.contact')}</Link>
                        </div>

                        <div className="w-12 h-[1px] bg-slate-200 dark:bg-white/10 my-2" />

                        <div className="flex items-center gap-4 text-xs font-bold tracking-widest">
                            {['EN', 'ES', 'SV', 'DA'].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => {
                                        setLanguage(lang as any);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`px-2 py-1 rounded ${language === lang ? 'text-black dark:text-white bg-slate-100 dark:bg-white/10 font-black' : 'text-slate-400'}`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
