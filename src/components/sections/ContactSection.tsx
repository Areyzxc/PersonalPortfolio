    'use client';

    import { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Facebook, MessageCircle, Instagram } from 'lucide-react';
    import emailjs from '@emailjs/browser';

    interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    threads?: string;
    instagram?: string;
    }    interface ContactSectionProps {
        contactInfo?: ContactInfo;
        }

    export const ContactSection: React.FC<ContactSectionProps> = ({
    contactInfo = {
        email: 'jamesariess76@gmail.com',
        phone: '(PH) +63 960 587-6574',
        location: 'Lozada St. Brgy. Sto. Rosario - Kanluran, Pateros (1620), Metro Manila, Philippines',
        github: 'https://github.com/Areyzxc',
        linkedin: 'https://www.linkedin.com/in/james-aries-santiago/',
        twitter: 'https://x.com/JamesAries47855',
        facebook: 'https://www.facebook.com/Areyszxc',
        threads: 'https://www.threads.com/@areys27_tiago.san',
        instagram: 'https://www.instagram.com/areys27_tiago.san/',
    },
    }) => {
    // Initialize EmailJS
    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

            if (!serviceId || !templateId) {
                throw new Error('EmailJS configuration is missing');
            }

            // Send email using EmailJS
            const result = await emailjs.send(serviceId, templateId, {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: contactInfo.email,
            });

            if (result.status === 200) {
                setSubmitStatus('success');
                setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitStatus('error');
            const errorMessage = error instanceof Error ? error.message : 'An error occurred. Please try again later.';
            setStatusMessage(errorMessage);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: Github, href: contactInfo.github, label: 'GitHub' },
        { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
        { icon: Twitter, href: contactInfo.twitter, label: 'Twitter' },
        { icon: Facebook, href: contactInfo.facebook, label: 'Facebook' },
        { icon: MessageCircle, href: contactInfo.threads, label: 'Threads' },
        { icon: Instagram, href: contactInfo.instagram, label: 'Instagram' },
    ].filter((link) => link.href);

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
        transition: { duration: 0.5 },
        },
    };

    return (
        <section id="contact" className="py-24 px-4 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/30">
        <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto"></div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                Have a question or want to collaborate? Feel free to reach out! I'm always open to new opportunities and interesting projects.
            </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
            >
                {/* Email Card */}
                <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={{ translateY: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
                >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all pointer-events-none"></div>

                    <div className="relative">
                    <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="mb-4 inline-block p-3 rounded-lg bg-accent/20 border border-accent/30"
                    >
                        <Mail className="w-6 h-6 text-accent" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-400 hover:text-accent transition-colors break-all"
                    >
                        {contactInfo.email}
                    </a>
                    </div>
                </motion.div>
                </motion.div>

                {/* Phone Card */}
                <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={{ translateY: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
                >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all pointer-events-none"></div>

                    <div className="relative">
                    <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="mb-4 inline-block p-3 rounded-lg bg-accent/20 border border-accent/30"
                    >
                        <Phone className="w-6 h-6 text-accent" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a
                        href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                        className="text-gray-400 hover:text-accent transition-colors"
                    >
                        {contactInfo.phone}
                    </a>
                    </div>
                </motion.div>
                </motion.div>

                {/* Location Card */}
                <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={{ translateY: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
                >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all pointer-events-none"></div>

                    <div className="relative">
                    <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="mb-4 inline-block p-3 rounded-lg bg-accent/20 border border-accent/30"
                    >
                        <MapPin className="w-6 h-6 text-accent" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-400">{contactInfo.location}</p>
                    </div>
                </motion.div>
                </motion.div>

                {/* Social Links */}
                {socialLinks.length > 0 && (
                <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
                    <div className="flex gap-4">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 text-gray-400 hover:text-accent hover:border-accent/30 transition-all"
                            title={social.label}
                        >
                            <Icon size={20} />
                        </motion.a>
                        );
                    })}
                    </div>
                </motion.div>
                )}
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
            >
                <motion.form
                onSubmit={handleSubmit}
                className="relative p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 space-y-6"
                >
                {/* Animated background gradient */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div className="relative">
                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <label htmlFor="name" className="block text-white font-semibold mb-3">
                        Full Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all backdrop-blur-sm hover:border-white/20"
                        placeholder="James Aries G. Santiago"
                        />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label htmlFor="email" className="block text-white font-semibold mb-3">
                        Email Address
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all backdrop-blur-sm hover:border-white/20"
                        placeholder="your.email@example.com"
                        />
                    </motion.div>
                    </div>

                    {/* Subject Input */}
                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                    >
                    <label htmlFor="subject" className="block text-white font-semibold mb-3">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all backdrop-blur-sm hover:border-white/20"
                        placeholder="Project Collaboration"
                    />
                    </motion.div>

                    {/* Message Textarea */}
                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                    >
                    <label htmlFor="message" className="block text-white font-semibold mb-3">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all backdrop-blur-sm hover:border-white/20 resize-none"
                        placeholder="Tell me about your project or inquiry..."
                    />
                    </motion.div>

                    {/* Status Messages */}
                    <AnimatedStatusMessage status={submitStatus} message={statusMessage} />

                    {/* Submit Button */}
                    <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-accent to-accent-light text-white font-bold shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                    {isSubmitting ? (
                        <>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                        </>
                    ) : (
                        <>
                        Send Message
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Send size={20} />
                        </motion.div>
                        </>
                    )}
                    </motion.button>
                </div>
                </motion.form>
            </motion.div>
            </div>
        </div>
        </section>
    );
    };

    // Status Message Component
    const AnimatedStatusMessage = ({ status, message }: { status: 'idle' | 'success' | 'error'; message: string }) => {
    if (status === 'idle') return null;

    return (
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`mb-6 p-4 rounded-lg border flex items-center gap-3 backdrop-blur-sm ${
            status === 'success'
            ? 'bg-green-500/10 border-green-500/30 text-green-400'
            : 'bg-red-500/10 border-red-500/30 text-red-400'
        }`}
        >
        <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-2 h-2 rounded-full ${status === 'success' ? 'bg-green-400' : 'bg-red-400'}`}
        />
        {message}
        </motion.div>
    );
    };
