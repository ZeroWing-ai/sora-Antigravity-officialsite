'use client';

import { useEffect, useRef } from 'react';

export default function SkyBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // キャンバスサイズをウィンドウに合わせる
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 星の生成
        const stars: Array<{ x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }> = [];
        for (let i = 0; i < 150; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.02 + 0.01,
            });
        }

        // 雲の生成
        const clouds: Array<{ x: number; y: number; width: number; height: number; speed: number; opacity: number }> = [];
        for (let i = 0; i < 8; i++) {
            clouds.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.6,
                width: Math.random() * 200 + 100,
                height: Math.random() * 60 + 40,
                speed: Math.random() * 0.2 + 0.1,
                opacity: Math.random() * 0.1 + 0.05,
            });
        }

        let animationFrameId: number;

        const animate = () => {
            // グラデーション背景
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(0.5, '#1a0a2e');
            gradient.addColorStop(1, '#0f0f23');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 星を描画
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.3) {
                    star.twinkleSpeed *= -1;
                }
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            // 雲を描画
            clouds.forEach((cloud) => {
                ctx.fillStyle = `rgba(200, 180, 255, ${cloud.opacity})`;
                ctx.beginPath();
                ctx.ellipse(cloud.x, cloud.y, cloud.width, cloud.height, 0, 0, Math.PI * 2);
                ctx.fill();

                // 雲を移動
                cloud.x += cloud.speed;
                if (cloud.x - cloud.width > canvas.width) {
                    cloud.x = -cloud.width;
                    cloud.y = Math.random() * canvas.height * 0.6;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{
                zIndex: 0,
                background: 'linear-gradient(to bottom, #0a0a1a, #1a0a2e, #0f0f23)'
            }}
        />
    );
}

