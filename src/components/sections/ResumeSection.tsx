    'use client';

    import { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Download, Printer, ChevronDown } from 'lucide-react';
    import { resumeData, Experience, Education, Certification, Language, Award } from '../../data/resumeData';

    type TabType = 'resume' | 'cv';

    export const ResumeSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('resume');
    const [expandedLanguage, setExpandedLanguage] = useState<number | null>(null);
    const [expandedAward, setExpandedAward] = useState<number | null>(null);

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
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
        },
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeData.pdfUrl;
        link.download = 'James_Aries_Santiago_Resume.pdf';
        link.click();
    };

    const ProfessionalSummary = () => (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-6 bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/30 rounded-lg light-mode:from-blue-50 light-mode:to-blue-100 light-mode:border-blue-200 terminal-mode:from-emerald-600/20 terminal-mode:to-emerald-500/20 terminal-mode:border-emerald-600"
        >
        <h4 className="text-lg font-bold text-white mb-3 light-mode:text-gray-900 terminal-mode:text-emerald-300">
            👤 Professional Summary
        </h4>
        <p className="text-gray-300 light-mode:text-gray-700 terminal-mode:text-emerald-100 leading-relaxed">
            {resumeData.professionalSummary}
        </p>
        </motion.div>
    );

    const ExperienceSection = () => (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="mb-12"
        >
        <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 light-mode:text-gray-900 terminal-mode:text-emerald-300"
        >
            💼 Professional Experience
        </motion.h3>

        <div className="space-y-6">
            {resumeData.experiences.map((experience, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="p-6 bg-secondary/30 border border-accent/20 rounded-lg light-mode:bg-gray-50 light-mode:border light-mode:border-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:border terminal-mode:border-emerald-600"
            >
                <div className="mb-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                    <h4 className="text-xl font-bold text-white light-mode:text-gray-900 terminal-mode:text-emerald-300">
                        {experience.position}
                    </h4>
                    <p className="text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400">
                        {experience.company}
                    </p>
                    </div>
                    <span className="text-sm text-gray-400 light-mode:text-gray-600 terminal-mode:text-emerald-300">
                    {experience.period}
                    </span>
                </div>
                </div>

                <p className="text-gray-300 mb-4 light-mode:text-gray-700 terminal-mode:text-emerald-100">
                {experience.description}
                </p>

                <div className="mb-4">
                <p className="text-sm font-semibold text-gray-400 mb-2 light-mode:text-gray-600 terminal-mode:text-emerald-400">
                    Key Achievements:
                </p>
                <ul className="space-y-1">
                    {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm light-mode:text-gray-700 terminal-mode:text-emerald-100">
                        <span className="text-accent mt-1 flex-shrink-0 light-mode:text-blue-600 terminal-mode:text-emerald-400">
                        ✓
                        </span>
                        {achievement}
                    </li>
                    ))}
                </ul>
                </div>

                {experience.technologies && (
                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full light-mode:bg-blue-100 light-mode:text-blue-700 terminal-mode:bg-emerald-600/50 terminal-mode:text-emerald-300"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                )}
            </motion.div>
            ))}
        </div>
        </motion.div>
    );

    const EducationSection = () => (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="mb-12"
        >
        <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 light-mode:text-gray-900 terminal-mode:text-emerald-300"
        >
            🎓 Education
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 bg-secondary/30 border border-accent/20 rounded-lg light-mode:bg-gray-50 light-mode:border light-mode:border-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:border terminal-mode:border-emerald-600"
            >
                <div className="mb-2">
                <h4 className="text-lg font-bold text-white light-mode:text-gray-900 terminal-mode:text-emerald-300">
                    {edu.degree}
                </h4>
                <p className="text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400">
                    {edu.field}
                </p>
                </div>
                <p className="text-gray-300 text-sm mb-3 light-mode:text-gray-700 terminal-mode:text-emerald-100">
                {edu.school}
                </p>
                <p className="text-gray-400 text-sm mb-3 light-mode:text-gray-600 terminal-mode:text-emerald-300">
                {edu.year}
                </p>
                {edu.details && (
                <ul className="space-y-1">
                    {edu.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-xs light-mode:text-gray-600 terminal-mode:text-emerald-200">
                        • {detail}
                    </li>
                    ))}
                </ul>
                )}
            </motion.div>
            ))}
        </div>
        </motion.div>
    );

    const CertificationsSection = () => (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >
        <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 light-mode:text-gray-900 terminal-mode:text-emerald-300"
        >
            🏆 Certifications
        </motion.h3>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-4"
        >
            {resumeData.certifications.map((cert, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-secondary/30 border border-accent/20 rounded-lg light-mode:bg-gray-50 light-mode:border light-mode:border-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:border terminal-mode:border-emerald-600"
            >
                <div className="flex items-start justify-between">
                <div>
                    <h4 className="font-semibold text-white light-mode:text-gray-900 terminal-mode:text-emerald-300">
                    {cert.title}
                    </h4>
                    <p className="text-accent text-sm light-mode:text-blue-600 terminal-mode:text-emerald-400">
                    {cert.issuer}
                    </p>
                </div>
                <span className="text-xs text-gray-400 light-mode:text-gray-600 terminal-mode:text-emerald-300">
                    {cert.date}
                </span>
                </div>
            </motion.div>
            ))}
        </motion.div>
        </motion.div>
    );

    const LanguagesSection = () => (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="mb-12"
        >
        <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 light-mode:text-gray-900 terminal-mode:text-emerald-300"
        >
            🌍 Languages
        </motion.h3>

        <div className="space-y-3">
            {resumeData.languages.map((language, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
            >
                <button
                onClick={() =>
                    setExpandedLanguage(
                    expandedLanguage === index ? null : index
                    )
                }
                className="w-full p-4 bg-secondary/30 border border-accent/20 rounded-lg hover:bg-secondary/50 transition-all light-mode:bg-gray-50 light-mode:hover:bg-gray-100 light-mode:border light-mode:border-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:hover:bg-emerald-900/50 terminal-mode:border terminal-mode:border-emerald-600 flex items-center justify-between"
                >
                <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white light-mode:text-gray-900 terminal-mode:text-emerald-300">
                    {language.name}
                    </h4>
                </div>
                <motion.div
                    animate={{
                    rotate: expandedLanguage === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown
                    size={20}
                    className="text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400"
                    />
                </motion.div>
                </button>

                <AnimatePresence>
                {expandedLanguage === index && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                    >
                    <div className="p-4 bg-secondary/20 border border-accent/10 border-t-0 rounded-b-lg light-mode:bg-gray-50 light-mode:border light-mode:border-t-0 light-mode:border-gray-200 terminal-mode:bg-emerald-900/20 terminal-mode:border terminal-mode:border-t-0 terminal-mode:border-emerald-600">
                        <p className="text-accent font-semibold light-mode:text-blue-600 terminal-mode:text-emerald-400">
                        Proficiency: {language.proficiency}
                        </p>
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
            ))}
        </div>
        </motion.div>
    );

    const AwardsSection = () => (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="mb-12"
        >
        <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 light-mode:text-gray-900 terminal-mode:text-emerald-300"
        >
            ⭐ Awards & Achievements
        </motion.h3>

        <div className="space-y-3">
            {resumeData.awards.map((award, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
            >
                <button
                onClick={() =>
                    setExpandedAward(expandedAward === index ? null : index)
                }
                className="w-full p-4 bg-secondary/30 border border-accent/20 rounded-lg hover:bg-secondary/50 transition-all light-mode:bg-gray-50 light-mode:hover:bg-gray-100 light-mode:border light-mode:border-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:hover:bg-emerald-900/50 terminal-mode:border terminal-mode:border-emerald-600 flex items-center justify-between"
                >
                <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white light-mode:text-gray-900 terminal-mode:text-emerald-300">
                    {award.title}
                    </h4>
                    <p className="text-sm text-gray-400 light-mode:text-gray-600 terminal-mode:text-emerald-300">
                    {award.issuer} • {award.year}
                    </p>
                </div>
                <motion.div
                    animate={{
                    rotate: expandedAward === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown
                    size={20}
                    className="text-accent light-mode:text-blue-600 terminal-mode:text-emerald-400"
                    />
                </motion.div>
                </button>

                <AnimatePresence>
                {expandedAward === index && award.description && (
                    <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                    >
                    <div className="p-4 bg-secondary/20 border border-accent/10 border-t-0 rounded-b-lg light-mode:bg-gray-50 light-mode:border light-mode:border-t-0 light-mode:border-gray-200 terminal-mode:bg-emerald-900/20 terminal-mode:border terminal-mode:border-t-0 terminal-mode:border-emerald-600">
                        <p className="text-gray-300 text-sm light-mode:text-gray-700 terminal-mode:text-emerald-100">
                        {award.description}
                        </p>
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
            ))}
        </div>
        </motion.div>
    );

    return (
        <section id="resume" className="py-24 px-4 bg-primary light-mode:bg-white terminal-mode:bg-emerald-950">
        <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 light-mode:text-gray-900 terminal-mode:text-emerald-300">
                Resume & CV
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full light-mode:from-blue-600 light-mode:to-blue-400 terminal-mode:from-emerald-500 terminal-mode:to-emerald-300"></div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl light-mode:text-gray-600 terminal-mode:text-emerald-200">
                {resumeData.summary}
            </p>
            </motion.div>

            {/* Tab Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 flex gap-4"
            >
            <button
                onClick={() => setActiveTab('resume')}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                activeTab === 'resume'
                    ? 'bg-accent text-white light-mode:bg-blue-600 terminal-mode:bg-emerald-600'
                    : 'bg-secondary/30 text-gray-300 hover:bg-secondary/50 light-mode:bg-gray-100 light-mode:text-gray-700 light-mode:hover:bg-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:text-emerald-200'
                }`}
            >
                📄 Resume
            </button>
            <button
                onClick={() => setActiveTab('cv')}
                className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                activeTab === 'cv'
                    ? 'bg-accent text-white light-mode:bg-blue-600 terminal-mode:bg-emerald-600'
                    : 'bg-secondary/30 text-gray-300 hover:bg-secondary/50 light-mode:bg-gray-100 light-mode:text-gray-700 light-mode:hover:bg-gray-200 terminal-mode:bg-emerald-900/30 terminal-mode:text-emerald-200'
                }`}
            >
                📋 CV
            </button>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap gap-4"
            >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all light-mode:bg-blue-600 light-mode:hover:bg-blue-700 terminal-mode:bg-emerald-600 terminal-mode:hover:bg-emerald-500"
            >
                <Download size={20} />
                Download PDF
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold transition-all hover:bg-accent/10 light-mode:border-blue-600 light-mode:text-blue-600 light-mode:hover:bg-blue-50 terminal-mode:border-emerald-600 terminal-mode:text-emerald-300 terminal-mode:hover:bg-emerald-600/20"
            >
                <Printer size={20} />
                Print
            </motion.button>
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
            {activeTab === 'resume' ? (
                <motion.div
                key="resume"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                >
                <ProfessionalSummary />
                <ExperienceSection />
                <EducationSection />
                <CertificationsSection />
                </motion.div>
            ) : (
                <motion.div
                key="cv"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                >
                <ProfessionalSummary />
                <ExperienceSection />
                <EducationSection />
                <CertificationsSection />
                <LanguagesSection />
                <AwardsSection />
                </motion.div>
            )}
            </AnimatePresence>
        </div>
        </section>
    );
    };
