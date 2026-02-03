    'use client';

    import { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X, ChevronLeft, ChevronRight, FoldVertical, UnfoldVertical } from 'lucide-react';
    import { galleryImages, GalleryImage } from '../../data/galleryData';

    interface GallerySectionProps {
    images?: GalleryImage[];
    }

    export const GallerySection: React.FC<GallerySectionProps> = ({
    images = galleryImages,
    }) => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(true);

    // Get unique categories
    const categories = Array.from(new Set(images.map((img) => img.category)));

    // Disable body scroll when modal opens, re-enable when closes
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    // Filter images by category
    const filteredImages = selectedCategory
        ? images.filter((img) => img.category === selectedCategory)
        : images;

    const handleOpenImage = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const handlePrevious = () => {
        const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    const handleNext = () => {
        const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4 },
        },
    };

    return (
        <section id="gallery" className="py-24 px-4 bg-secondary/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
            {/* Section Header with Collapse Button */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 flex justify-between items-start"
            >
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
                <p className="text-gray-400 text-lg mt-6 max-w-2xl">
                    A collection of moments from my travels, events, and personal projects. Click any image for a closer look!
                </p>
            </div>

            {/* Collapse Toggle Button */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-accent/30 text-accent hover:border-accent transition-all"
                aria-label={isExpanded ? "Collapse section" : "Expand section"}
            >
                {isExpanded ? <FoldVertical size={24} /> : <UnfoldVertical size={24} />}
            </motion.button>
            </motion.div>

            {/* Collapsible Content Area */}
            <motion.div
                initial={false}
                animate={{ 
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
            >

            {/* Category Filter */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-12"
            >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === null
                    ? 'bg-accent text-white shadow-lg shadow-accent/50'
                    : 'bg-secondary border border-accent/30 text-gray-300 hover:border-accent/60'
                }`}
            >
                All
            </motion.button>
            {categories.map((category) => (
                <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/50'
                    : 'bg-secondary border border-accent/30 text-gray-300 hover:border-accent/60'
                }`}
                >
                {category}
                </motion.button>
            ))}
            </motion.div>

            {/* Gallery Grid - Masonry */}
            <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            <AnimatePresence mode="wait">
                {filteredImages.map((image, index) => (
                <motion.div
                    key={image.id}
                    variants={itemVariants}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layoutId={`gallery-item-${image.id}`}
                >
                    <motion.div
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                    onClick={() => handleOpenImage(image, index)}
                    className="group relative h-80 rounded-lg overflow-hidden cursor-pointer bg-secondary border border-accent/20 transition-all"
                    >
                    {/* Image */}
                    <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        layoutId={`gallery-image-${image.id}`}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-4 text-white"
                    >
                        <h3 className="text-lg font-bold mb-1 text-white">{image.title}</h3>
                        <p className="text-sm text-white line-clamp-2">{image.description}</p>
                        <div className="flex justify-between items-center mt-3">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full text-white">
                            {image.category}
                        </span>
                        <span className="text-xs text-white">{new Date(image.date).toLocaleDateString()}</span>
                        </div>
                    </motion.div>

                    {/* Click to View Indicator */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border-2 border-black/30 font-semibold transition-all"
                    >
                        Click to view
                    </motion.div>
                    </motion.div>
                </motion.div>
                ))}
            </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
            >
                <p className="text-gray-400 text-lg">No images in this category yet.</p>
            </motion.div>
            )}
            </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
            {selectedImage && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
                <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-lg overflow-hidden bg-secondary border border-accent/20"
                >
                {/* Close Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all backdrop-blur-sm border-2 border-black/30"
                >
                    <X size={24} />
                </motion.button>

                {/* Main Image */}
                <div className="relative flex-1 overflow-hidden bg-black">
                    <motion.img
                    key={selectedImage.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain"
                    />

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm">
                    {currentIndex + 1} / {filteredImages.length}
                    </div>

                    {/* Navigation Buttons */}
                    {filteredImages.length > 1 && (
                    <>
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevious();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all backdrop-blur-sm z-20 border-2 border-black/30"
                        >
                        <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all backdrop-blur-sm z-20 border-2 border-black/30"
                        >
                        <ChevronRight size={24} />
                        </motion.button>
                    </>
                    )}
                </div>

                {/* Image Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 border-t border-accent/20"
                >
                    <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                        <p className="text-gray-400 mb-4">{selectedImage.description}</p>
                    </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                    <span className="inline-block bg-accent/20 px-4 py-2 rounded-full text-accent-light font-semibold">
                        {selectedImage.category}
                    </span>
                    <span className="text-gray-500">{new Date(selectedImage.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </motion.div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        </section>
    );
    };
