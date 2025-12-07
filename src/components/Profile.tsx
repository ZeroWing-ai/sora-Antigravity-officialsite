'use client';

import { motion } from 'framer-motion';
import { profile } from '../lib/data';

export default function Profile() {
    return (
        <section id="profile" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        プロフィール
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                        {profile.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
