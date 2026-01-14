"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const letterVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96] as any
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] as any
            }
        }
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black gap-10"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] as any }}
                        className="relative w-32 h-32 md:w-40 md:h-40"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Loading..."
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    <div className="flex flex-col items-center gap-6">
                        <motion.div className="flex text-3xl md:text-5xl font-bold tracking-[0.3em] text-white">
                            {['A', 'S', 'I', 'M', 'O', 'V'].map((letter, i) => (
                                <motion.span key={i} variants={letterVariants}>
                                    {letter}
                                </motion.span>
                            ))}
                            <motion.span variants={letterVariants} className="text-[#9033FF]">
                                X
                            </motion.span>
                        </motion.div>

                        {/* Elegant Progress Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            className="h-[2px] bg-gradient-to-r from-transparent via-[#9033FF] to-transparent"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
