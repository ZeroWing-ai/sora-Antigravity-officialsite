'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { works } from '../lib/data';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// カテゴリごとに作品をグループ化
const categories = Array.from(new Set(works.map((w) => w.category)));

export default function Works() {
    return (
        <section id="works" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        作品
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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

    // 自動再生 (5秒ごと)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % categoryWorks.length);
        }, 5000);
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
            <h3 className="text-2xl font-bold text-blue-600 mb-6 border-l-4 border-blue-500 pl-4">
                {category}
            </h3>

            <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 aspect-[16/9] md:aspect-[21/9]">
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
                        <div className="w-full md:w-1/2 h-full relative overflow-hidden bg-slate-100">
                            <img
                                src={currentWork.image}
                                alt={currentWork.title}
                                className={`w-full h-full ${currentWork.title === 'note' ? 'object-contain p-8' : 'object-cover'} group-hover:scale-105 transition-transform duration-700`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/90" />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 h-full p-8 md:p-12 flex flex-col justify-center bg-white/95 md:bg-transparent z-10">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold mb-2">
                                    {currentWork.category}
                                </span>
                                <h4 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {currentWork.title}
                                </h4>
                                <p className="text-slate-500 text-sm font-mono break-all flex items-center gap-2">
                                    <ExternalLink size={14} />
                                    {currentWork.link}
                                </p>
                            </div>

                            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                                {currentWork.description}
                            </p>

                            <div className="mt-auto">
                                <span className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:translate-x-2 transition-transform">
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-800 shadow-lg hover:bg-blue-500 hover:text-white transition-all z-20 backdrop-blur-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-800 shadow-lg hover:bg-blue-500 hover:text-white transition-all z-20 backdrop-blur-sm"
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
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-blue-500' : 'bg-slate-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
