    'use client';

    import { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Palette, Cog, Wrench, Globe, Code, Database, Cloud, GitBranch, Box, Plug, RefreshCw, Laptop, Star, Zap, Target, MonitorPlay, Flag, FoldVertical, UnfoldVertical } from 'lucide-react';
    import { SiFlutter, SiCisco, SiRuby, SiBootstrap, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiGithub, SiDocker, SiAmazon, SiVsco, SiJavascript, SiHtml5, SiCss3, SiFramer } from 'react-icons/si';
    import { BiLogoJava } from "react-icons/bi";
    import { VscVscode, VscTerminalPowershell } from "react-icons/vsc";
    import { GrMysql } from "react-icons/gr";
    import { FaPhp } from "react-icons/fa";

    interface Skill {
    name: string;
    level: number; // 0-100
    category: 'frontend' | 'backend' | 'tools' | 'languages';
    icon?: string;
    }

    interface SkillCategory {
    name: string;
    icon: string;
    iconComponent: React.ComponentType<{ size: number }>;
    color: string;
    skills: Skill[];
    }

    interface SkillsSectionProps {
    categories?: SkillCategory[];
    }

    export const SkillsSection: React.FC<SkillsSectionProps> = ({
    categories = [
        {
        name: 'Frontend & Performance',
        icon: 'palette',
        color: 'from-blue-500 to-cyan-400',
        iconComponent: Palette,
        skills: [
            { name: 'HTML', level: 80, category: 'frontend', icon: 'html' },
            { name: 'React', level: 70, category: 'frontend', icon: 'react' },
            { name: 'Next.js', level: 90, category: 'frontend', icon: 'nextjs' },
            { name: 'JavaScript', level: 73, category: 'frontend', icon: 'javascript' },
            { name: 'TypeScript', level: 88, category: 'frontend', icon: 'typescript' },
            { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: 'tailwindcss' },
            { name: 'Framer Motion', level: 85, category: 'frontend', icon: 'framer' },
            { name: 'CSS', level: 75, category: 'frontend', icon: 'css' },
            { name: 'Bootstrap', level: 80, category: 'frontend', icon: 'bootstrap' },
        ],
        },
        {
        name: 'Backend & Architecture',
        icon: 'cog',
        color: 'from-purple-500 to-yellow-400',
        iconComponent: Cog,
        skills: [
            { name: 'Node.js', level: 85, category: 'backend', icon: 'nodejs' },
            { name: 'Python', level: 61, category: 'backend', icon: 'python' },
            { name: 'PHP', level: 70, category: 'backend', icon: 'php' },
            { name: 'PostgreSQL', level: 60, category: 'backend', icon: 'postgresql' },
            { name: 'MySQL', level: 72, category: 'backend', icon: 'mysql' },
            { name: 'MongoDB', level: 60, category: 'backend', icon: 'mongodb' },
            { name: 'REST APIs', level: 88, category: 'backend', icon: 'plug' },
        ],
        },
        {
        name: 'Tools & Platforms',
        icon: 'wrench',
        color: 'from-orange-500 to-indigo-400',
        iconComponent: Wrench,
        skills: [
            { name: 'Git & GitHub', level: 90, category: 'tools', icon: 'github' },
            { name: 'Docker', level: 75, category: 'tools', icon: 'docker' },
            { name: 'AWS', level: 72, category: 'tools', icon: 'aws' },
            { name: 'PowerShell', level: 70, category: 'tools', icon: 'powershell' },
            { name: 'Cisco', level: 70, category: 'tools', icon: 'cisco' },
            { name: 'VS Code', level: 95, category: 'tools', icon: 'vscode' },
            { name: 'CI/CD', level: 80, category: 'tools', icon: 'refreshcw' },
        ],
        },
        {
        name: 'Languages',
        icon: 'globe',
        color: 'from-green-500 to-emerald-400',
        iconComponent: Globe,
        skills: [
            { name: 'SQL', level: 85, category: 'languages', icon: 'sql' },
            { name: 'Ruby', level: 60, category: 'languages', icon: 'ruby' },
            { name: 'Python', level: 60, category: 'languages', icon: 'python' },
            { name: 'Flutter', level: 60, category: 'languages', icon: 'flutter' },
            { name: 'Java', level: 80, category: 'languages', icon: 'java' },
        ],
        },
    ],
    }) => {
    // State for collapse/expand functionality
    const [isExpanded, setIsExpanded] = useState(true);

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

    const skillIconMap: Record<string, React.ReactNode> = {
        zap: <Zap size={20} />,
        palette: <Palette size={20} />,
        sparkles: <Star size={20} />,
        cpu: <Laptop size={20} />,
        database: <Database size={20} />,
        plug: <Plug size={20} />,
        gitbranch: <GitBranch size={20} />,
        box: <Box size={20} />,
        cloud: <Cloud size={20} />,
        refreshcw: <RefreshCw size={20} />,
        flag: <Flag size={20} />,
        // Programming Languages & Frameworks
        react: <SiReact size={20} className="text-[#61DAFB]" />,
        nextjs: <SiNextdotjs size={20} className="text-white" />,
        typescript: <SiTypescript size={20} className="text-[#3178C6]" />,
        tailwindcss: <SiTailwindcss size={20} className="text-[#06B6D4]" />,
        framer: <SiFramer size={20} className="text-black dark:text-white" />,
        nodejs: <SiNodedotjs size={20} className="text-[#339933]" />,
        python: <SiPython size={20} className="text-[#3776AB]" />,
        postgresql: <SiPostgresql size={20} className="text-[#336791]" />,
        mongodb: <SiMongodb size={20} className="text-[#13AA52]" />,
        github: <SiGithub size={20} className="text-white" />,
        docker: <SiDocker size={20} className="text-[#2496ED]" />,
        aws: <SiAmazon size={20} className="text-[#FF9900]" />,
        vscode: <VscVscode size={20} className="text-[#007ACC]" />,
        javascript: <SiJavascript size={20} className="text-[#F7DF1E]" />,
        html: <SiHtml5 size={20} className="text-[#E34C26]" />,
        css: <SiCss3 size={20} className="text-[#1572B6]" />,
        sql: <Database size={20} />,
        bootstrap: <SiBootstrap size={20} className="text-[#7952B3]" />,
        java: <BiLogoJava size={20} className="text-[#007396]" />,
        mysql: <GrMysql size={20} className="text-[#4479A1]" />,
        php: <FaPhp size={20} className="text-[#777BB4]" />,
        ruby: <SiRuby size={20} className="text-[#CC342D]" />,
        flutter: <SiFlutter size={20} className="text-[#02569B]" />,
        cisco: <SiCisco size={20} className="text-[#1BA0D7]" />,
        powershell: <VscTerminalPowershell size={20} className="text-[#012456]" />,
    };

    const getSkillIcon = (iconKey: string | undefined) => {
        if (!iconKey) return <Code size={20} />;
        return skillIconMap[iconKey] || <Code size={20} />;
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
        <section id="skills" className="py-24 px-4 bg-primary transition-all duration-300">
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
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
                <p className="text-gray-400 text-lg mt-6 max-w-2xl">
                    A comprehensive overview of my technical skills and proficiency levels across various technologies and platforms.
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
                    <div className="text-accent">
                        {category.iconComponent && <category.iconComponent size={40} />}
                    </div>
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
                            <div className="flex items-center gap-2 text-accent">
                            {getSkillIcon(skill.icon)}
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
                                className="text-accent"
                                >
                                <Star size={18} fill={i < Math.ceil(skill.level / 20) ? 'currentColor' : 'none'} />
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
                { label: 'Years Experience', value: '2+' },
                { label: 'Skills Mastered', value: String(categories.reduce((acc, cat) => acc + cat.skills.length, 0)) },
                { label: 'Technologies', value: '20+' },
                { label: 'Expertise Level', value: 'Intermediate' },
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
            </motion.div>
        </div>
        </section>
    );
    };
