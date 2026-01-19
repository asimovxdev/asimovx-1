"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

// Dummy portfolio data using generated artifacts
const PROJECTS = [
    {
        title: "4dots",
        category: "Custom Customization & Printing",
        image: "/images/portfolio/4dotss.jpg",
        description: "A comprehensive customization and printing service offering personalized letterheads, booklets, and canvas prints.",
        link: "https://4dots.in"
    },
    {
        title: "Kontrast",
        category: "Restaurant & Hospitality",
        image: "/images/portfolio/kontrast.jpg",
        description: "A premium Northern Indian dining experience in Malmö, Sweden, featuring authentic Punjabi cuisine.",
        link: "https://www.kontrastrestaurang.se/"
    },
    {
        title: "SecondskinStyle B2B",
        category: "E-Commerce & Sportswear",
        image: "/images/portfolio/secondskin.jpg",
        description: "Performance-driven sportswear engineered for athletes, emphasizing technical design and sustainable manufacturing.",
        link: "https://business.secondskinstyle.com/"
    },
    {
        title: "SecondskinStyle",
        category: "Consumer Sportswear",
        image: "/images/portfolio/secondskinstyle.jpg",
        description: "Premium athletic apparel brand focused on comfort, durability, and style for the modern athlete.",
        link: "https://secondskinstyle.com/"
    },
    {
        title: "PipeTechs",
        category: "Pipeline Technology",
        image: "/images/portfolio/pipelines.jpg",
        description: "Advanced pipeline leak detection systems using acoustic technology for liquid, gas, and sub-sea applications.",
        link: "https://www.pipetechs.com/"
    },
    {
        title: "Growers Direct",
        category: "Agriculture & Retail",
        image: "/images/portfolio/growerdirect.jpg",
        description: "Family-run nursery offering a wide range of plants, pottery, and expert gardening advice.",
        link: "https://www.growersdirect.co.nz/"
    },
    {
        title: "Timax-NL",
        category: "Construction Consulting",
        image: "/images/portfolio/timax.jpg",
        description: "Dutch consulting firm specializing in building regulations, energy performance, and sustainable construction.",
        link: "https://www.timax.nl/"
    },
    {
        title: "Sicci",
        category: "Chamber of Commerce",
        image: "/images/portfolio/sicci.jpg",
        description: "Singapore Indian Chamber of Commerce and Industry, supporting business growth and advocacy since 1924.",
        link: "https://sicci.com/"
    },
    {
        title: "I C A I",
        category: "Professional Organization",
        image: "/images/portfolio/icai.jpg",
        description: "Singapore Chapter of the Institute of Chartered Accountants of India, fostering professional development.",
        link: "https://icai.org.sg/"
    },
    {
        title: "Chet's Shoes",
        category: "E-Commerce & Retail",
        image: "/images/portfolio/boots.jpg",
        description: "Family-owned footwear business offering premium work boots, safety shoes, and personalized service since 1947.",
        link: "https://chetsshoes.com/"
    },
    {
        title: "Personal Finance Sweden",
        category: "Financial Education",
        image: "/images/portfolio/personalfinance.jpg",
        description: "Empowering expats and NRIs in Sweden with knowledge on investing, taxes, and family finance.",
        link: "https://www.personalfinancesweden.com/"
    }
];

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            <section className="pt-44 pb-20 px-6 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6 block">
                        {t('portfolio.tagline')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                        {t('portfolio.title').split(" ")[0]} <br /> <span className="accent-gradient italic">{t('portfolio.title').split(" ").slice(1).join(" ")}</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl">
                        {t('portfolio.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl border border-white/10 group-hover:border-accent/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="px-6 py-3 border border-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
                                    >
                                        {t('portfolio.view_case_study')}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                                <span className="text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded">{project.category}</span>
                            </div>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
