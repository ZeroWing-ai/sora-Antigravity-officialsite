'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { works } from '../lib/data';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// カテゴリごとに作品をグループ化
const categories = Array.from(new Set(works.map((w) => w.category)));

export default function Works() {
    return (
        <section id="works" className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        作品
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        これまでに制作した作品の一部をご紹介します。
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category) => (
                        <CategoryCarousel key={category} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CategoryCarousel({ category }: { category: string }) {
    const categoryWorks = works.filter((w) => w.category === category);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 自動再生 (4秒ごと)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % categoryWorks.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [categoryWorks.length]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % categoryWorks.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + categoryWorks.length) % categoryWorks.length);
    };

    const currentWork = categoryWorks[currentIndex];

    return (
        <div className="relative">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 border-l-4 border-purple-500 pl-4">
                {category}
            </h3>

            <div className="relative bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 aspect-[16/9] md:aspect-[21/9]">
                <AnimatePresence mode="wait">
                    <motion.a
                        key={currentIndex}
                        href={currentWork.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col md:flex-row group cursor-pointer"
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-full relative overflow-hidden">
                            <img
                                src={currentWork.image}
                                alt={currentWork.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900/90" />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col justify-center bg-zinc-900/90 md:bg-transparent z-10">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-2">
                                    {currentWork.category}
                                </span>
                                <h4 className="text-2xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {currentWork.title}
                                </h4>
                                <p className="text-gray-500 text-sm font-mono break-all flex items-center gap-2">
                                    <ExternalLink size={14} />
                                    {currentWork.link}
                                </p>
                            </div>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                                {currentWork.description}
                            </p>

                            <div className="mt-auto">
                                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform">
                                    サイトを見る <ExternalLink size={18} />
                                </span>
                            </div>
                        </div>
                    </motion.a>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handlePrev();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-purple-600 transition-colors z-20"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-purple-600 transition-colors z-20"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {categoryWorks.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-purple-500' : 'bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
