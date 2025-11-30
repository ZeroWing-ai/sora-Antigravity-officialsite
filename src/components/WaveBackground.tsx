'use client';

import { useEffect, useRef } from 'react';

export default function WaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Enhanced wave parameters with more vibrant colors
        const waves = [
            {
                y: height * 0.3,
                length: 0.008,
                amplitude: 80,
                speed: 0.025,
                color: '#00ffff',
                alpha: 0.6,
                lineWidth: 3,
                blur: 20
            },
            {
                y: height * 0.5,
                length: 0.012,
                amplitude: 60,
                speed: 0.018,
                color: '#0099ff',
                alpha: 0.5,
                lineWidth: 2.5,
                blur: 15
            },
            {
                y: height * 0.7,
                length: 0.015,
                amplitude: 50,
                speed: 0.03,
                color: '#00ccff',
                alpha: 0.4,
                lineWidth: 2,
                blur: 12
            },
        ];

        let increment = 0;

        const draw = () => {
            // Dark gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(0.5, '#050510');
            gradient.addColorStop(1, '#0a0a1a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            increment += 0.008;

            waves.forEach((wave, index) => {
                ctx.beginPath();
                ctx.moveTo(0, wave.y);

                // Create smooth wave path
                for (let i = 0; i <= width; i += 2) {
                    const angle = i * wave.length + increment * wave.speed * 100;
                    const y = wave.y + Math.sin(angle) * wave.amplitude;
                    ctx.lineTo(i, y);
                }

                // Apply glow effect
                ctx.strokeStyle = wave.color;
                ctx.globalAlpha = wave.alpha;
                ctx.lineWidth = wave.lineWidth;
                ctx.shadowBlur = wave.blur;
                ctx.shadowColor = wave.color;
                ctx.stroke();

                // Add extra glow layer
                ctx.shadowBlur = wave.blur * 2;
                ctx.globalAlpha = wave.alpha * 0.3;
                ctx.stroke();

                // Reset alpha
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    );
}
