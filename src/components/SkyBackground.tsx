'use client';

import { useState, useEffect } from 'react';

export default function SkyBackground() {
    const [stars, setStars] = useState<Array<{ width: number; height: number; top: number; left: number; delay: number; duration: number }>>([]);
    const [clouds, setClouds] = useState<Array<{ width: number; height: number; top: number; left: number; delay: number; duration: number }>>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // クライアント側でのみ星と雲の位置を生成
        const newStars = [...Array(100)].map(() => ({
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 3,
            duration: Math.random() * 3 + 2,
        }));

        const newClouds = [...Array(5)].map((_, i) => ({
            width: Math.random() * 300 + 200,
            height: Math.random() * 100 + 80,
            top: Math.random() * 60,
            left: -20 + i * 25,
            delay: i * 2,
            duration: Math.random() * 20 + 30,
        }));

        setStars(newStars);
        setClouds(newClouds);
    }, []);

    return (
        <>
            {/* グラデーション背景 */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0f0f23]" style={{ zIndex: 0 }} />

            {/* 星のレイヤー */}
            {isClient && (
                <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
                    {stars.map((star, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white animate-twinkle"
                            style={{
                                width: `${star.width}px`,
                                height: `${star.height}px`,
                                top: `${star.top}%`,
                                left: `${star.left}%`,
                                animationDelay: `${star.delay}s`,
                                animationDuration: `${star.duration}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 雲のレイヤー */}
            {isClient && (
                <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 2 }}>
                    {clouds.map((cloud, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-purple-300/5 blur-3xl animate-float"
                            style={{
                                width: `${cloud.width}px`,
                                height: `${cloud.height}px`,
                                top: `${cloud.top}%`,
                                left: `${cloud.left}%`,
                                animationDelay: `${cloud.delay}s`,
                                animationDuration: `${cloud.duration}s`,
                            }}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
