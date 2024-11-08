import Isotope from 'isotope-layout';
import { useEffect, useRef } from 'react';

export const useIsotope = (filter) => {
    const isotopeContainer = useRef(null);
    const isotopeInstance = useRef(null);

    useEffect(() => {
        // Initialize Isotope
        isotopeInstance.current = new Isotope(isotopeContainer.current, {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            filter: '*',
        });

        return () => {
            // Cleanup Isotope on component unmount
            isotopeInstance.current.destroy();
        };
    }, []);

    useEffect(() => {
        // Apply filter when it changes
        if (isotopeInstance.current) {
            isotopeInstance.current.arrange({ filter });
        }
    }, [filter]);

    return isotopeContainer;
};