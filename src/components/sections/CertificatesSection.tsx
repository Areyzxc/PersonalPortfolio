'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight, FoldVertical, UnfoldVertical } from 'lucide-react';
import { certificatesData, Certificate, getUniqueCertificateCategories } from '../../data/certificatesData';
import { Portal } from '../common/Portal';

export const CertificatesSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const categories = useMemo(() => getUniqueCertificateCategories(), []);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll when modal opens
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  const filteredCertificates = useMemo(() => {
    return selectedCategory
      ? certificatesData.filter((cert) => cert.category === selectedCategory)
      : certificatesData;
  }, [selectedCategory]);

  const handlePreviousCertificate = () => {
    const newIndex = currentIndex === 0 ? filteredCertificates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedCertificate(filteredCertificates[newIndex]);
  };

  const handleNextCertificate = () => {
    const newIndex = currentIndex === filteredCertificates.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedCertificate(filteredCertificates[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="certificates"
      className="py-24 px-4 bg-secondary/30 light-mode:bg-gray-50 terminal-mode:bg-emerald-950/20 transition-all duration-300"
    >
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Collapse Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 flex justify-between items-start"
          >
            <div>
              <h2 className="text-4xl md:text-5xl text-center font-bold mb-4 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                Certifications & Achievements
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full light-mode:from-blue-600 light-mode:to-blue-400 terminal-mode:from-emerald-500 terminal-mode:to-emerald-300"></div>
              <p className="text-gray-400 text-lg mt-6 max-w-2xl light-mode:text-gray-600 terminal-mode:text-emerald-200">
                Professional certifications and achievements that showcase my expertise across cloud platforms, web development, and cutting-edge technologies.
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
                  ? 'bg-accent text-white shadow-lg shadow-accent/50 light-mode:bg-blue-600 light-mode:shadow-blue-600/50 terminal-mode:bg-emerald-600'
                  : 'bg-secondary border border-accent/30 text-gray-300 hover:border-accent/60 light-mode:bg-white light-mode:border-gray-300 light-mode:text-gray-900 light-mode:hover:border-gray-500 terminal-mode:bg-emerald-900/50 terminal-mode:border-emerald-600 terminal-mode:text-emerald-300'
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
                    ? 'bg-accent text-white shadow-lg shadow-accent/50 light-mode:bg-blue-600 light-mode:shadow-blue-600/50 terminal-mode:bg-emerald-600'
                    : 'bg-secondary border border-accent/30 text-gray-300 hover:border-accent/60 light-mode:bg-white light-mode:border-gray-300 light-mode:text-gray-900 light-mode:hover:border-gray-500 terminal-mode:bg-emerald-900/50 terminal-mode:border-emerald-600 terminal-mode:text-emerald-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-gray-400 text-sm light-mode:text-gray-600 terminal-mode:text-emerald-300"
          >
            Showing {filteredCertificates.length} of {certificatesData.length} certifications
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map((certificate) => (
                  <motion.div
                    key={certificate.id}
                    variants={itemVariants}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layoutId={`cert-${certificate.id}`}
                  >
                    <motion.div
                      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                      onClick={() => {
                        setSelectedCertificate(certificate);
                        const index = filteredCertificates.findIndex(c => c.id === certificate.id);
                        setCurrentIndex(index);
                      }}
                      className="group relative h-80 rounded-lg overflow-hidden cursor-pointer bg-secondary border border-accent/20 transition-all light-mode:bg-white light-mode:border-gray-200 light-mode:shadow-md terminal-mode:bg-emerald-900/30 terminal-mode:border-emerald-600"
                    >
                      {/* Image */}
                      <motion.img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                        <h3 className="text-lg font-bold mb-1">{certificate.title}</h3>
                        <p className="text-sm text-gray-200 mb-3">{certificate.issuer}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                            {certificate.category}
                          </span>
                          <span className="text-xs text-gray-300">{certificate.date}</span>
                        </div>
                      </motion.div>

                      {/* Click to View Indicator */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border-2 border-black/30 font-semibold transition-all light-mode:bg-black/30 light-mode:text-white light-mode:border-black/50 terminal-mode:bg-black/20 terminal-mode:text-white terminal-mode:border-black/30"
                      >
                        Click to view
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-16 text-center"
                >
                  <p className="text-gray-400 text-lg light-mode:text-gray-600 terminal-mode:text-emerald-300">
                    No certifications found in this category.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          </motion.div>
        </div>

      {/* Certificate Detail Modal with Portal */}
      <AnimatePresence>
        {selectedCertificate && (
          <Portal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              style={{ margin: 0 }}
            >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-primary rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col light-mode:bg-white terminal-mode:bg-emerald-950"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 hover:bg-secondary/50 rounded-full transition-colors light-mode:hover:bg-gray-100 terminal-mode:hover:bg-emerald-900 z-10 border-2 border-black/30 bg-black/20 backdrop-blur-sm"
              >
                <X size={24} className="text-foreground" />
              </motion.button>

              {/* Modal Content */}
              <div className="flex-1 overflow-hidden bg-black flex items-center justify-center relative">
                {/* Certificate Image */}
                <motion.img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-contain"
                />

                {/* Certificate Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm">
                  {currentIndex + 1} / {filteredCertificates.length}
                </div>

                {/* Navigation Buttons */}
                {filteredCertificates.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreviousCertificate();
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
                        handleNextCertificate();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all backdrop-blur-sm z-20 border-2 border-black/30"
                    >
                      <ChevronRight size={24} />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Details Section */}
              <div className="flex-shrink-0 p-8 border-t border-accent/20 light-mode:border-gray-200 terminal-mode:border-emerald-600/30 bg-primary light-mode:bg-white terminal-mode:bg-emerald-950 max-h-[30vh] overflow-y-auto">
                {/* Details */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-accent/20 text-accent light-mode:bg-blue-100 light-mode:text-blue-700 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-300">
                      {selectedCertificate.category}
                    </span>
                    <span className="text-sm text-gray-400 light-mode:text-gray-600 terminal-mode:text-emerald-300">
                      {selectedCertificate.date}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold mb-2 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-accent text-lg light-mode:text-blue-600 terminal-mode:text-emerald-400">
                    {selectedCertificate.issuer}
                  </p>
                </div>

                {/* Skills */}
                {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                      Skills Demonstrated
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-accent/20 text-accent light-mode:bg-blue-100 light-mode:text-blue-700 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification Button */}
                {selectedCertificate.credentialUrl && (
                  <motion.a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors light-mode:bg-blue-600 light-mode:hover:bg-blue-700 terminal-mode:bg-emerald-600 terminal-mode:hover:bg-emerald-500"
                  >
                    <ExternalLink size={20} />
                    Verify Credential
                  </motion.a>
                )}
              </div>
            </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </section>
  );
};
