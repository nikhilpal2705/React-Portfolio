import 'glightbox/dist/css/glightbox.min.css';
import GLightbox from 'glightbox';
import { useEffect } from 'react';

// Custom hook to initialize GLightbox
export const useGLightbox = () => {
    useEffect(() => {
        // Initialize GLightbox
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true
        });
        return () => {
            lightbox.destroy(); // Cleanup GLightbox on component unmount
        };
    }, []);
};