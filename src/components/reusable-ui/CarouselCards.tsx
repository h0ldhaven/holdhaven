import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { CarouselCard } from '../../types/CarouselCard';

interface InfoCardCarouselProps {
    items: CarouselCard[];
    speed: number;
}

const CarouselCards: React.FC<InfoCardCarouselProps> = ({ items, speed }) => {
    const controls = useAnimation();
    const [queue, setQueue] = useState(items);
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [cardWidth, setCardWidth] = useState(0);
    
    const xRef = useRef(0);
    const requestRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastTimeRef = useRef<number | null>(null);

    // Mesure dynamique de la largeur d'une carte
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current?.firstElementChild) {
                const width = (containerRef.current.firstElementChild as HTMLElement).getBoundingClientRect().width;
                setCardWidth(width + 8); // + gap-2
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Animation frame loop avec vitesse constante
    const animate = (time: number) => {
        if (isPaused || !cardWidth) {
            lastTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
            return;
        }

        if (lastTimeRef.current !== null) {
            const deltaTime = (time - lastTimeRef.current) / 1000; // en secondes
            const distance = speed * deltaTime; // px à avancer

            xRef.current -= distance;
            if (xRef.current <= -cardWidth) {
                xRef.current += cardWidth;
                setQueue((prev) => {
                    const [first, ...rest] = prev;
                    return [...rest, first];
                });
            }
            controls.set({ x: xRef.current });
        }

        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    // Lancer l'animation
    useEffect(() => {
        if (cardWidth > 0) {
            cancelAnimationFrame(requestRef.current ?? 0);
            lastTimeRef.current = null;
            requestRef.current = requestAnimationFrame(animate);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardWidth, isPaused]);

    // Reset si les items changent
    useEffect(() => {
        setQueue(items);
        xRef.current = 0;
        controls.set({ x: 0 });
    }, [items, controls]);

    return (
        <div
            className='w-[80vw] min-h-[14rem] rounded-md bg-neutral-200 dark:bg-gray-900 p-4 overflow-hidden'
        >
            <motion.div
                ref={containerRef}
                className='relative flex gap-2 whitespace-nowrap cursor-pointer'
                animate={controls}
                style={{ willChange: 'transform' }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => {
                    setIsPaused(false);
                    setHoveredId(null);
                }}
            >
                {queue.map(({ id, imageUrl, title, description }) => (
                    <div
                        key={id}
                        id={id.toString()}
                        className='
                            card flex-shrink-0 w-[90vw] max-w-[320px] sm:w-[45vw] md:w-[30vw]
                            aspect-[4/3] rounded-lg cursor-pointer shadow-lg bg-gray-50 dark:bg-gray-800
                            overflow-hidden relative
                            p-3
                            flex flex-col
                        '
                        onMouseEnter={() => {
                            setIsPaused(true);
                            setHoveredId(id.toString());
                        }}
                        onMouseLeave={() => {
                            setIsPaused(false);
                            setHoveredId(null);
                        }}
                    >
                        <div className='flex-grow overflow-hidden rounded-lg mb-2'>
                            <img
                                src={imageUrl}
                                alt={title}
                                className='w-full h-full object-contain rounded-lg dark:bg-neutral-100/20 bg-neutral-200/40 p-2'
                                draggable={false}
                            />
                        </div>

                        {hoveredId === id.toString() && (
                            <div className='
                                absolute bottom-12 left-0 right-0
                                bg-gray-700/90 dark:bg-neutral-700/90 bg-opacity-80
                                p-2 m-4 text-white text-center
                                text-xs sm:text-sm
                                transition-opacity duration-300
                                whitespace-normal break-words
                                rounded-md
                            '
                            >
                                {description}
                            </div>
                        )}
                        
                        <div className='
                            bg-gray-700 dark:bg-gray-600 bg-opacity-80
                            p-2 text-white text-center text-sm font-semibold
                            rounded-md
                        '
                        >
                            {title}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CarouselCards;