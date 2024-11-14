import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { useEffect, useRef } from 'react';

export const useIsotope = (filter, layoutMode = 'masonry', sortBy = 'original-order') => {
    const isotopeContainer = useRef(null);
    const isotopeInstance = useRef(null);

    useEffect(() => {
        // Wait until images are loaded before initializing Isotope
        imagesLoaded(isotopeContainer.current, () => {
            // Initialize Isotope
            isotopeInstance.current = new Isotope(isotopeContainer.current, {
                itemSelector: '.isotope-item',
                layoutMode,
                filter,
                sortBy,
            });
        });

        return () => {
            // Cleanup Isotope on component unmount
            if (isotopeInstance.current) {
                isotopeInstance.current.destroy();
            }
        };
    }, [layoutMode, sortBy, filter]);

    useEffect(() => {
        // Apply filter when it changes
        if (isotopeInstance.current) {
            isotopeInstance.current.arrange({ filter });
        }
    }, [filter]);

    return isotopeContainer;
};