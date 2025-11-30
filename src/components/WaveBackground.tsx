'use client';

import { useEffect, useRef, useState } from 'react';

export default function WaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const canvas = canvasRef.current;
        if (!canvas) {
            console.error('Canvas not found');
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Canvas context not found');
            return;
        }

        console.log('Canvas initialized successfully');

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            console.log(`Canvas resized to ${canvas.width}x${canvas.height}`);
        };

        window.addEventListener('resize', resize);
        resize();

        let increment = 0;

        const draw = () => {
            const width = canvas.width;
            const height = canvas.height;

            // Dark gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(0.5, '#050510');
            gradient.addColorStop(1, '#0a0a1a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            increment += 0.008;

            // Wave 1 - Top
            ctx.beginPath();
            ctx.moveTo(0, height * 0.3);
            for (let i = 0; i <= width; i += 2) {
                const angle = i * 0.008 + increment * 2.5;
                const y = height * 0.3 + Math.sin(angle) * 80;
                ctx.lineTo(i, y);
            }
            ctx.strokeStyle = '#00ffff';
            ctx.globalAlpha = 0.6;
            ctx.lineWidth = 3;
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#00ffff';
            ctx.stroke();
            ctx.shadowBlur = 40;
            ctx.globalAlpha = 0.2;
            ctx.stroke();

            // Wave 2 - Middle
            ctx.beginPath();
            ctx.moveTo(0, height * 0.5);
            for (let i = 0; i <= width; i += 2) {
                const angle = i * 0.012 + increment * 1.8;
                const y = height * 0.5 + Math.sin(angle) * 60;
                ctx.lineTo(i, y);
            }
            ctx.strokeStyle = '#0099ff';
            ctx.globalAlpha = 0.5;
            ctx.lineWidth = 2.5;
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#0099ff';
            ctx.stroke();
            ctx.shadowBlur = 30;
            ctx.globalAlpha = 0.15;
            ctx.stroke();

            // Wave 3 - Bottom
            ctx.beginPath();
            ctx.moveTo(0, height * 0.7);
            for (let i = 0; i <= width; i += 2) {
                const angle = i * 0.015 + increment * 3;
                const y = height * 0.7 + Math.sin(angle) * 50;
                ctx.lineTo(i, y);
            }
            ctx.strokeStyle = '#00ccff';
            ctx.globalAlpha = 0.4;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#00ccff';
            ctx.stroke();
            ctx.shadowBlur = 24;
            ctx.globalAlpha = 0.12;
            ctx.stroke();

            // Reset
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
            console.log('Canvas cleanup');
        };
    }, [isClient]);

    if (!isClient) {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full"
            style={{
                zIndex: 1,
                pointerEvents: 'none'
            }}
        />
    );
}
