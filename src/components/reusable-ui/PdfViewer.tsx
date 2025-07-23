import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
    
    return(
        <div className='flex h-[70vh] w-[80vw]'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'>
                <Viewer 
                    fileUrl={fileUrl}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;