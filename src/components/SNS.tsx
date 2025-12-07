'use client';

import { motion } from 'framer-motion';
import { sns } from '../lib/data';
import { ExternalLink } from 'lucide-react';

export default function SNS() {
    const featuredSns = sns.find(item => item.title === 'note');
    const otherSns = sns.filter(item => item.title !== 'note');

    return (
        <section id="sns" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        SNS
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        日々の発信や活動の様子はこちらから。
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Featured SNS (note) */}
                    {featuredSns && (
                        <motion.a
                            href={featuredSns.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group block bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100"
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-50" />
                                    <img
                                        src={featuredSns.image}
                                        alt={featuredSns.title}
                                        className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                            Featured
                                        </span>
                                        <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                            {featuredSns.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                        {featuredSns.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {featuredSns.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg group-hover:gap-3 transition-all">
                                        記事を読む <ExternalLink size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    )}

                    {/* Other SNS Grid */}
                    {otherSns.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {otherSns.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 flex flex-col"
                                >
                                    <div className="relative h-48 overflow-hidden bg-slate-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                                {item.category}
                                            </span>
                                            <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                            {item.description}
                                        </p>
                                        <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                            フォローする <span className="text-lg">→</span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
