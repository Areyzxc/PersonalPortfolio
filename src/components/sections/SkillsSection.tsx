    'use client';

    import { motion } from 'framer-motion';

    interface Skill {
    name: string;
    level: number; // 0-100
    category: 'frontend' | 'backend' | 'tools' | 'languages';
    icon?: string;
    }

    interface SkillCategory {
    name: string;
    icon: string;
    color: string;
    skills: Skill[];
    }

    interface SkillsSectionProps {
    categories?: SkillCategory[];
    }

    export const SkillsSection: React.FC<SkillsSectionProps> = ({
    categories = [
        {
        name: 'Frontend',
        icon: '🎨',
        color: 'from-blue-500 to-cyan-400',
        skills: [
            { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
            { name: 'Next.js', level: 90, category: 'frontend', icon: '▲' },
            { name: 'TypeScript', level: 88, category: 'frontend', icon: '📘' },
            { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: '🎯' },
            { name: 'Framer Motion', level: 85, category: 'frontend', icon: '✨' },
        ],
        },
        {
        name: 'Backend',
        icon: '⚙️',
        color: 'from-purple-500 to-pink-400',
        skills: [
            { name: 'Node.js', level: 85, category: 'backend', icon: '🟩' },
            { name: 'Python', level: 80, category: 'backend', icon: '🐍' },
            { name: 'PostgreSQL', level: 82, category: 'backend', icon: '🗄️' },
            { name: 'MongoDB', level: 78, category: 'backend', icon: '📊' },
            { name: 'REST APIs', level: 88, category: 'backend', icon: '🔌' },
        ],
        },
        {
        name: 'Tools & Platforms',
        icon: '🛠️',
        color: 'from-orange-500 to-red-400',
        skills: [
            { name: 'Git & GitHub', level: 90, category: 'tools', icon: '🐙' },
            { name: 'Docker', level: 75, category: 'tools', icon: '🐳' },
            { name: 'AWS', level: 72, category: 'tools', icon: '☁️' },
            { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
            { name: 'CI/CD', level: 80, category: 'tools', icon: '🔄' },
        ],
        },
        {
        name: 'Languages',
        icon: '🌐',
        color: 'from-green-500 to-emerald-400',
        skills: [
            { name: 'JavaScript', level: 93, category: 'languages', icon: '✨' },
            { name: 'HTML/CSS', level: 94, category: 'languages', icon: '🎨' },
            { name: 'SQL', level: 85, category: 'languages', icon: '📝' },
            { name: 'English', level: 90, category: 'languages', icon: '🇬🇧' },
        ],
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

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.05,
        },
        }),
    };

    return (
        <section id="skills" className="py-24 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
                A comprehensive overview of my technical skills and proficiency levels across various technologies and platforms.
            </p>
            </motion.div>

            {/* Skills Categories Grid */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
            {categories.map((category, categoryIndex) => (
                <motion.div
                key={category.name}
                variants={categoryVariants}
                className="group"
                >
                {/* Category Header */}
                <div className="mb-6">
                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 mb-4"
                    >
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                        <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    </div>
                    </motion.div>
                </div>

                {/* Skills List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {category.skills.map((skill, skillIndex) => (
                    <motion.div
                        key={skill.name}
                        custom={skillIndex}
                        variants={skillVariants}
                        whileHover={{ x: 5 }}
                        className="group/skill"
                    >
                        {/* Skill Card Container */}
                        <motion.div
                        whileHover={{
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                        }}
                        className="p-4 rounded-lg border border-accent/20 transition-all duration-300 backdrop-blur-sm"
                        >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                            <span className="text-xl">{skill.icon}</span>
                            <motion.span
                                className="font-semibold text-white"
                                whileHover={{ letterSpacing: '0.05em' }}
                            >
                                {skill.name}
                            </motion.span>
                            </div>
                            <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 + skillIndex * 0.05 }}
                            className="text-sm font-bold text-accent"
                            >
                            {skill.level}%
                            </motion.span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            {/* Animated Progress Bar */}
                            <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                                duration: 1.2,
                                delay: 0.2 + skillIndex * 0.05,
                                ease: 'easeOut',
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            >
                            {/* Shimmer Effect */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '100%' }}
                                transition={{
                                duration: 1.5,
                                delay: 1.4 + skillIndex * 0.05,
                                ease: 'easeInOut',
                                }}
                                viewport={{ once: true }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            ></motion.div>
                            </motion.div>
                        </div>

                        {/* Skill Level Badge */}
                        <div className="mt-2 flex justify-between items-center">
                            <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 + skillIndex * 0.05 }}
                            className="text-xs text-gray-500"
                            >
                            {skill.level >= 90 && (
                                <span className="text-green-400 font-semibold">Expert</span>
                            )}
                            {skill.level >= 80 && skill.level < 90 && (
                                <span className="text-blue-400 font-semibold">Advanced</span>
                            )}
                            {skill.level >= 70 && skill.level < 80 && (
                                <span className="text-yellow-400 font-semibold">Proficient</span>
                            )}
                            {skill.level < 70 && (
                                <span className="text-orange-400 font-semibold">Intermediate</span>
                            )}
                            </motion.div>

                            {/* Skill Stars */}
                            <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{
                                    opacity: i < Math.ceil(skill.level / 20) ? 1 : 0.2,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: 0.6 + skillIndex * 0.05 + i * 0.05,
                                }}
                                className={`text-lg ${
                                    i < Math.ceil(skill.level / 20) ? '⭐' : '☆'
                                }`}
                                >
                                {i < Math.ceil(skill.level / 20) ? '⭐' : '☆'}
                                </motion.div>
                            ))}
                            </div>
                        </div>
                        </motion.div>
                    </motion.div>
                    ))}
                </motion.div>
                </motion.div>
            ))}
            </motion.div>

            {/* Summary Stats */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-lg bg-gradient-to-r from-accent/10 to-accent-light/10 border border-accent/30 backdrop-blur-sm"
            >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                { label: 'Years Experience', value: '5+' },
                { label: 'Skills Mastered', value: String(categories.reduce((acc, cat) => acc + cat.skills.length, 0)) },
                { label: 'Technologies', value: '20+' },
                { label: 'Expertise Level', value: 'Expert' },
                ].map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                    className="text-3xl md:text-4xl font-bold text-accent mb-2"
                    whileHover={{ scale: 1.1 }}
                    >
                    {stat.value}
                    </motion.div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
                ))}
            </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
            >
            <p className="text-gray-400 mb-6">Ready to collaborate or learn more?</p>
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all"
            >
                Get in Touch
            </motion.a>
            </motion.div>
        </div>
        </section>
    );
    };
