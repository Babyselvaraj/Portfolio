import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    id: 0,
    title: "Optijewels E-Commerce",
    description:
      "Headless e-commerce storefront built during Optimizely SaaS Hackathon.",
    tech: ["Next.js", "Tailwind", "Optimizely", "Shopify"],
    role: "Frontend Developer",
    highlight: "Hackathon Project",
    live: "https://newoptisaas-frontend.vercel.app/",
    fullDescriptionPoints: [
      "Contributed to building a headless e-commerce storefront during hackathon.",
      "Developed responsive UI using React and Tailwind CSS.",
      "Integrated CMS-driven content using Optimizely.",
      "Focused on performance and scalable architecture.",
    ],
  },
  {
    id: 1,
    title: "Stamford Health (Sitecore)",
    description:
      "Built scalable CMS-driven UI components and automation features.",
    image: "/Project/sitecore.png",
    tech: ["Sitecore", "MVC", "JavaScript", "PowerShell"],
    role: "Frontend Developer",
    fullDescriptionPoints: [
      "Developed reusable Sitecore components like carousels, galleries, and split layouts.",
      "Implemented dynamic UI rendering using CMS-driven architecture.",
      "Built JavaScript logic for DOM manipulation and enhanced interactivity.",
      "Automated data import using PowerShell scripts (CertificationCode mapping).",
      "Fixed UI bugs and improved performance across multiple pages.",
    ],
  },
  {
    id: 2,
    title: "Optimizely CMS",
    description:
      "Developed reusable components and enhanced CMS-driven UI.",
    image: "/Project/optimizely.png",
    tech: ["Optimizely", "React", "C#", "MVC"],
    role: "Frontend Developer",
    fullDescriptionPoints: [
      "Created reusable blocks, pages, and forms using Optimizely CMS.",
      "Implemented dynamic rendering using Razor and MVC architecture.",
      "Improved UI responsiveness and styling consistency.",
      "Optimized existing components for performance and usability.",
    ],
  },
  {
    id: 3,
    title: "Shopify Integration",
    description:
      "Built custom Shopify app with API integrations and admin UI.",
    image: "/Project/shopify.png",
    tech: ["React", "Node.js", "Shopify API"],
    role: "Frontend Developer",
    fullDescriptionPoints: [
      "Built admin UI using React and Shopify Polaris.",
      "Integrated Shopify APIs for store data handling.",
      "Implemented authentication and backend communication.",
      "Worked on checkout extensibility and POS features.",
    ],
  },
];

  return (
    <section
      id="projects"
      className="bg-transparent py-20 px-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Projects
      </h2>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="group p-4 rounded-xl bg-white dark:bg-gray-800 
                       shadow-md hover:shadow-2xl hover:-translate-y-2 
                       transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            {p.image ? (
  <img
    src={p.image}
    alt={p.title}
    className="h-40 w-full object-cover group-hover:scale-110 transition duration-300"
  />
) : (
  <div className="h-40 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold rounded-lg">
    {p.title}
  </div>
)}
<h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
  {p.title}
</h3>

<p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
  {p.description}
</p>

<div className="flex flex-wrap gap-2 mt-3">
  {p.tech.map((t, i) => (
    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md">
      {t}
    </span>
  ))}
</div>

{/* ✅ NOW place here */}
{p.live && (
  <a
    href={p.live}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="mt-4 inline-block text-sm text-blue-400 hover:underline"
  >
    Live Demo →
  </a>
)}
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl 
                       w-full max-w-3xl max-h-[85vh] overflow-y-auto 
                       shadow-xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

{selectedProject.highlight && (
  <span className="text-xs text-purple-500 font-semibold">
    {selectedProject.highlight}
  </span>
)}
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {selectedProject.title}
            </h2>

            {/* Role */}
            <p className="mt-2 text-sm text-blue-500 font-medium">
              Role: {selectedProject.role}
            </p>
            {selectedProject.live && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      window.open(selectedProject.live, "_blank");
    }}
    className="mt-4 inline-block text-sm text-blue-500 hover:underline"
  >
    Live Demo →
  </button>
)}

            {/* Description Points */}
            <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
              {selectedProject.fullDescriptionPoints.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Close Button */}
            <button
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}