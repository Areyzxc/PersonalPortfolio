    'use client';

    import { motion } from 'framer-motion';

    interface TimelineItem {
    year: string;
    title: string;
    description: string;
    }

    interface AboutSectionProps {
    profileImage?: string;
    name?: string;
    title?: string;
    bio?: string[];
    highlights?: string[];
    timeline?: TimelineItem[];
    }

    export const AboutSection: React.FC<AboutSectionProps> = ({
    profileImage='/images/profile/profile.JPG',
    name = 'James Aries Gravamen Santiago',
    title = 'Full-Stack Developer | Creative Coder | Open Source Enthusiast',
    bio = [
        'I\'m passionate about building web applications that are not just functional but also beautiful and user-friendly. With a strong foundation in both frontend and backend technologies, I love tackling challenging problems and creating innovative solutions.',
        'When I\'m not coding, you can find me contributing to open-source projects, learning new technologies, or sharing knowledge with the community. I believe in continuous learning and pushing the boundaries of what\'s possible on the web.',
    ],
    highlights = [
        'Full-Stack Web Development',
        'React & Next.js Expertise',
        'HTML, CSS, JavaScript Proficiency',
        'UI/UX Design Principles',
        'Open Source Contributor',
    ],
    timeline = [
        {
        year: '2024',
        title: 'Senior Developer',
        description: 'Led multiple high-impact projects and mentored junior developers.',
        },
        {
        year: '2023',
        title: 'Mid-Level Developer',
        description: 'Specialized in full-stack development and system architecture.',
        },
        {
        year: '2022',
        title: 'Junior Developer',
        description: 'Started journey in web development with a focus on frontend.',
        },
    ],
    }) => {
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 },
        },
    };

    return (
        <section id="about" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
            </motion.div>

            {/* Main Content Grid */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            >
            {/* Profile Image */}
            <motion.div variants={imageVariants} className="flex justify-center">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated Border */}
                <motion.div
                    animate={{
                    boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                        '0 0 40px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                    ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-accent-light p-1"
                >
                    <div className="w-full h-full rounded-2xl bg-secondary overflow-hidden flex items-center justify-center">
                    {/* Profile Image */}
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    </div>
                </motion.div>
                </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants}>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{name}</h3>
                <p className="text-accent text-lg font-semibold">{title}</p>
                </motion.div>

                {/* Bio Paragraphs */}
                {bio.map((paragraph, index) => (
                <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-gray-300 text-lg leading-relaxed"
                >
                    {paragraph}
                </motion.p>
                ))}

                {/* Highlights */}
                <motion.div variants={itemVariants} className="pt-6">
                <h4 className="text-xl font-semibold mb-4">Key Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {highlights.map((highlight, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg border border-accent/20"
                    >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-gray-200">{highlight}</span>
                    </motion.div>
                    ))}
                </div>
                </motion.div>
            </motion.div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <h3 className="text-3xl font-bold mb-12">Career Timeline</h3>
            <div className="space-y-8">
                {timeline.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                >
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center">
                    <motion.div
                        animate={{
                        boxShadow: [
                            '0 0 10px rgba(59, 130, 246, 0.3)',
                            '0 0 20px rgba(59, 130, 246, 0.6)',
                            '0 0 10px rgba(59, 130, 246, 0.3)',
                        ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-4 h-4 bg-accent rounded-full"
                    ></motion.div>
                    {index < timeline.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-accent to-transparent mt-2"></div>
                    )}
                    </div>

                    {/* Content */}
                    <motion.div
                    whileHover={{ x: 10 }}
                    className="pb-8 pt-1"
                    >
                    <p className="text-accent font-semibold text-sm mb-1">{item.year}</p>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                </motion.div>
                ))}
            </div>
            </motion.div>

            {/* CTA */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap gap-4 justify-center md:justify-start"
            >
            <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors"
            >
                View My Work
            </motion.a>
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
                Get in Touch
            </motion.a>
            </motion.div>
        </div>
        </section>
    );
    };
