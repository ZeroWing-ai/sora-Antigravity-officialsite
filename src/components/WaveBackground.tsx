'use client';

export default function WaveBackground() {
    return (
        <>
            <div className="fixed inset-0 overflow-hidden wave-background" style={{ zIndex: 1 }}>
                {/* Gradient Background - Light Theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />

                {/* Animated Waves */}
                <div className="absolute inset-0">
                    {/* Wave 1 */}
                    <div className="wave wave-1" />

                    {/* Wave 2 */}
                    <div className="wave wave-2" />

                    {/* Wave 3 */}
                    <div className="wave wave-3" />
                </div>
            </div>

            <style jsx>{`
                .wave {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                }

                .wave-1 {
                    background: linear-gradient(transparent, rgba(14, 165, 233, 0.2), transparent); /* Sky blue */
                    transform: translateY(30%);
                    animation: wave1 8s ease-in-out infinite;
                    filter: blur(20px);
                    opacity: 0.6;
                }

                .wave-2 {
                    background: linear-gradient(transparent, rgba(56, 189, 248, 0.2), transparent); /* Light blue */
                    transform: translateY(50%);
                    animation: wave2 10s ease-in-out infinite;
                    animation-delay: 1s;
                    filter: blur(15px);
                    opacity: 0.5;
                }

                .wave-3 {
                    background: linear-gradient(transparent, rgba(186, 230, 253, 0.3), transparent); /* Very light blue */
                    transform: translateY(70%);
                    animation: wave3 12s ease-in-out infinite;
                    animation-delay: 2s;
                    filter: blur(12px);
                    opacity: 0.4;
                }

                @keyframes wave1 {
                    0%, 100% {
                        transform: translateY(30%) translateX(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(28%) translateX(-5%) rotate(1deg);
                    }
                    50% {
                        transform: translateY(32%) translateX(-10%) rotate(-1deg);
                    }
                    75% {
                        transform: translateY(29%) translateX(-5%) rotate(0.5deg);
                    }
                }

                @keyframes wave2 {
                    0%, 100% {
                        transform: translateY(50%) translateX(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(48%) translateX(-7%) rotate(-1deg);
                    }
                    50% {
                        transform: translateY(52%) translateX(-14%) rotate(1deg);
                    }
                    75% {
                        transform: translateY(49%) translateX(-7%) rotate(-0.5deg);
                    }
                }

                @keyframes wave3 {
                    0%, 100% {
                        transform: translateY(70%) translateX(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(68%) translateX(-10%) rotate(1deg);
                    }
                    50% {
                        transform: translateY(72%) translateX(-20%) rotate(-1deg);
                    }
                    75% {
                        transform: translateY(69%) translateX(-10%) rotate(0.5deg);
                    }
                }
            `}</style>
        </>
    );
}
