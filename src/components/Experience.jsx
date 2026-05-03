import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-transparent text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h2>

        {/* Company */}
        <motion.div
          className="bg-transparent p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Associate Software Engineer
          </h3>

          <p className="text-blue-500 text-sm mt-1">
            Nishtech Digital India Pvt Ltd · Jan 2023 – Present
          </p>

          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">

            <li>• Improved application performance by 30%+ using code splitting, lazy loading, and memoization.</li>

            <li>• Built scalable and reusable UI components using React, TypeScript, and Tailwind CSS.</li>

            <li>• Integrated REST and GraphQL APIs across multiple client-facing applications.</li>

            <li>• Developed enterprise CMS solutions using Sitecore XM Cloud and Optimizely.</li>

            <li>• Designed backend job workflows using Node.js, BullMQ, and PostgreSQL.</li>

            <li>• Collaborated on SEO, accessibility improvements, and performance optimization.</li>

            <li>• Automated product data generation using AI integrations.</li>

            <li>• Debugged and resolved production issues, improving system stability.</li>

          </ul>
        </motion.div>

        {/* Internship */}
        <motion.div
          className="bg-transparent p-6 rounded-xl shadow-md mt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Software Developer Intern
          </h3>

          <p className="text-blue-500 text-sm mt-1">
            Worksbot Application Pvt Ltd · Oct 2021 – Dec 2021
          </p>

          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <li>• Built Django-based academic record system.</li>
            <li>• Developed real-time polling application with live analytics.</li>
            <li>• Implemented speech recognition + translation pipeline.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}