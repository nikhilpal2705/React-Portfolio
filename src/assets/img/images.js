// Import all images from the current directory and all subdirectories
const rawImages = import.meta.glob('./**/*.{png,jpg,jpeg,svg}', { eager: true });

// Format the images object to use only the filename (no subfolder) as the key
const images = Object.fromEntries(
    Object.entries(rawImages).map(([path, module]) => {
        const name = path.split('/').pop().replace(/\.[^/.]+$/, ''); // Get only the filename without extension
        return [name, module.default];
    })
);

export default images;
