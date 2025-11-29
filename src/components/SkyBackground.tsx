'use client';

import { useEffect, useRef } from 'react';

export default function SkyBackground() {
    return (
        <>
            {/* グラデーション背景 */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0f0f23]" style={{ zIndex: 0 }} />

            {/* 星のレイヤー */}
            <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-twinkle"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* 雲のレイヤー */}
            <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 2 }}>
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-purple-300/5 blur-3xl animate-float"
                        style={{
                            width: `${Math.random() * 300 + 200}px`,
                            height: `${Math.random() * 100 + 80}px`,
                            top: `${Math.random() * 60}%`,
                            left: `${-20 + i * 25}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: `${Math.random() * 20 + 30}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}

