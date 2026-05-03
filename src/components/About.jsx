import { motion } from "framer-motion";

export default function About() {
    return (
        <section 
            id="about"
            className="py-20 px-6 bg-transparent text-gray-800 dark:text-gray-200"
        >
            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                {/* Content */}
                <motion.p
                    className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    I'm a{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                        Frontend Developer
                    </span>{" "}
                    specializing in building scalable, CMS-driven web applications using
                    React, Sitecore, and Optimizely.
                </motion.p>

                <motion.p
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    I have worked on enterprise healthcare and e-commerce platforms,
                    developing reusable components, integrating APIs, and delivering
                    responsive, high-performance user interfaces.
                </motion.p>

                <motion.p
                    className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    My focus is on clean architecture, performance optimization, and
                    building maintainable UI systems that scale across large applications.
                </motion.p>

                {/* Stats */}
                <motion.div
                    className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            3+
                        </h3>
                        <p className="text-sm text-gray-500">Years Experience</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            10+
                        </h3>
                        <p className="text-sm text-gray-500">Enterprise Projects</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            React
                        </h3>
                        <p className="text-sm text-gray-500">Frontend Stack</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            CMS
                        </h3>
                        <p className="text-sm text-gray-500">Sitecore / Optimizely</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}