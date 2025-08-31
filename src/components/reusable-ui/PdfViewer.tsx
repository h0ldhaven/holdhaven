import React, { useEffect, useRef, useState  } from 'react';
import * as pdfjsLib  from 'pdfjs-dist';
import type { RenderTask } from 'pdfjs-dist/types/src/display/api';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const PdfViewer: React.FC<{ fileUrl: string, zoom?: number }> = ({ fileUrl, zoom = 1 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        let renderTask: RenderTask | null = null;
        let cancelled = false;

        const loadPdf = async () => {
            const loadingTask = pdfjsLib.getDocument(fileUrl);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);

            if (cancelled) return;

            const containerWidth = containerSize.width || 1000;
            const containerHeight = containerSize.height || 800;

            // viewport de base
            const unscaledViewport = page.getViewport({ scale: 1 });
            // scale pour s'adapter à la largeur / hauteur max
            const fitScale = Math.min(containerWidth / unscaledViewport.width, containerHeight / unscaledViewport.height);
            // scale final = fitScale * zoom
            const scale = fitScale * zoom;

            const viewport = page.getViewport({ scale });

            const canvas = canvasRef.current!;
            const context = canvas.getContext('2d')!;

            const outputScale = window.devicePixelRatio || 1;
            canvas.width = viewport.width * outputScale;
            canvas.height = viewport.height * outputScale;

            canvas.style.width = `${viewport.width}px`;
            canvas.style.height = `${viewport.height}px`;

            context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

            if (renderTask) renderTask.cancel();
            renderTask = page.render({ canvasContext: context, viewport, canvas });

            try {
                await renderTask.promise;
            } catch (err) {
                if ((err as Error).name !== 'RenderingCancelledException') {
                    console.error('PDF render error:', err);
                }
            }
        };

        loadPdf();

        return () => {
            cancelled = true;
            if (renderTask) renderTask.cancel();
        };
    }, [fileUrl, zoom, containerSize]);
    
    return(
        <div ref={containerRef} className='flex h-[70vh] w-[65vw] lg:w-auto overflow-y-auto xl:overflow-x-hidden justify-center scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'>
            <canvas 
                ref={canvasRef} 
            />
        </div>
    );
};

export default PdfViewer;