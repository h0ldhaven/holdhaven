import React, { useEffect, useRef, useState  } from 'react';
import * as pdfjsLib  from 'pdfjs-dist';
import type { RenderTask } from 'pdfjs-dist/types/src/display/api';

// ⚙️ Configuring the PDF.js worker
// (pdfjs needs a "worker" to work correctly, here we import it from the package build)
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

// 🎨 Main component to display a PDF in a canvas
const PdfViewer: React.FC<{ fileUrl: string, zoom?: number }> = ({ fileUrl, zoom = 1 }) => {
    // Reference to the canvas where the PDF will be drawn
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Reference to the parent container (useful for adapting the rendering size)
    const containerRef = useRef<HTMLDivElement>(null);

    // Local state that stores the container size (width / height)
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    
    // 📏 Hook to update the container size at each resize
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };

        // direct init
        updateSize();
        window.addEventListener('resize', updateSize);

        // cleanup → we remove the listening event during disassembly
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // 🖼 Main Hook → loads and displays the first page of the PDF
    useEffect(() => {
        // allows you to cancel the current rendering
        let renderTask: RenderTask | null = null;
        
        // flag to stop rendering if the component is unmounted
        let cancelled = false;

        const loadPdf = async () => {
            // Load the PDF from the given URL
            const loadingTask = pdfjsLib.getDocument(fileUrl);
            const pdf = await loadingTask.promise;

            // retrieve page 1
            const page = await pdf.getPage(1);

            if (cancelled) return;

            
            // ⚖️ Calculation of the rendering size (we scale for fit container + custom zoom)
            const containerWidth = containerSize.width || 1000;
            const containerHeight = containerSize.height || 800;

            
            // base size
            const unscaledViewport = page.getViewport({ scale: 1 });
            // Scale to fit max width/height
            const fitScale = Math.min(containerWidth / unscaledViewport.width, containerHeight / unscaledViewport.height);
            // Final Scale = fitScale * zoom
            const scale = fitScale * zoom;

            const viewport = page.getViewport({ scale });

            // 🎨 Canvas setup
            const canvas = canvasRef.current!;
            const context = canvas.getContext('2d')!;

            // Screen density management (retina, etc.)
            const outputScale = window.devicePixelRatio || 1;
            canvas.width = viewport.width * outputScale;
            canvas.height = viewport.height * outputScale;

            // We set the CSS style (logical px)
            canvas.style.width = `${viewport.width}px`;
            canvas.style.height = `${viewport.height}px`;

            // Apply a transformation to make it neat
            context.setTransform(outputScale, 0, 0, outputScale, 0, 0);

            // 🚫 Cancels a previous rendering if it exists
            if (renderTask) renderTask.cancel();

            // 🚀 Launching PDF.js rendering
            renderTask = page.render({ canvasContext: context, viewport, canvas });

            try {
                await renderTask.promise;
            } catch (err) {
                if ((err as Error).name !== 'RenderingCancelledException') {
                    console.error('PDF render error:', err);
                }
            }
        };

        // immediate execution
        loadPdf();

        return () => {
            cancelled = true;
            if (renderTask) renderTask.cancel();
        };
        // relaunch if fileUrl changes, zoom changes, or container resize
    }, [fileUrl, zoom, containerSize]);
    
    
    // 📦 JSX rendering
    return(
        <div ref={containerRef} className='flex h-[70vh] w-[65vw] lg:w-auto overflow-y-auto xl:overflow-x-hidden justify-center scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'>
            <canvas 
                ref={canvasRef} 
            />
        </div>
    );
};

export default PdfViewer;