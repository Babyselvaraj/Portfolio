import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sitecore",
      description:
        "Built and enhanced Sitecore components and automation features for the Stamford Health platform.",
      image: "/Project/sitecore.png",
      fullDescriptionPoints: [
        "Component Development: Built and customized Sitecore components such as gallery components, carousel variants, split-column layouts, and dynamic content-driven modules. Ensured responsive design and smooth rendering across devices.",
        "Icon & UI Enhancements: Implemented a flexible icon management system allowing content authors to select icons via class names, upload new icons, and map them dynamically to UI elements using JavaScript and styles with Unicode values.",
        "JavaScript Integrations: Created custom JavaScript functions for dynamic DOM manipulation, including trimming class names for icons, processing href attributes, and improving interactivity for Sitecore components.",
        "PowerShell Automation: Developed and modified PowerShell scripts to automate data import processes, including extracting and mapping fields such as CertificationCode from XML provider files.",
        "Content Search & Maintenance: Worked with Sitecore ContentSearch APIs and context items to support dynamic content rendering, FAQ schema generation, and backend data processing.",
        "Bug Fixes & Debugging: Resolved layout, styling, and rendering issues across Sitecore components, including troubleshooting build and environment-related errors.",
        "Backend Work (C#/MVC): Updated Sitecore views, modified controller rendering logic, and integrated schema generation and other server-side enhancements into MVC views.",
      ],
    },
    {
      id: 2,
      title: "Optimizely",
      description:
        "Optimizely CMS Development focusing on reusable components and UI enhancements.",
      fullDescriptionPoints: [
        "During my work with Optimizely CMS, I was responsible for building a wide range of components that improved both the user experience on the website and the authoring experience for content editors. I created custom pages, blocks, and forms using Optimizely’s content model architecture, defining strong and reusable content types with structured properties, validations, and editor-friendly configurations. I implemented dynamic rendering logic using C#, MVC, and Razor views to ensure each component behaved consistently across different page layouts and supported flexible placement within the CMS.",
        "I also focused heavily on front-end development—styling components, ensuring responsive layouts, and adding interactive functionality where needed. This included working with CSS, JavaScript, and modern UI practices to deliver professional, polished components that aligned with design guidelines. Along with building new features, I also improved existing components by refining UI behavior, fixing styling inconsistencies, and optimizing performance.",
        "Throughout the project, I gained substantial experience in understanding Optimizely’s architecture, including blocks, content areas, routing, form elements, and editorial workflows. I collaborated closely with designers and editors to ensure components were intuitive and easy to use inside the CMS. Overall, this project strengthened my skills in Optimizely CMS development, C#, MVC, component architecture, and front-end implementation, while giving me hands-on experience delivering real-world, production-ready solutions.",
      ],
      image: "/Project/optimizely.png",
    },
    {
      id: 3,
      title: "Shopify",
      description:
        "Custom Shopify App Development Leveraging Polaris, React, and Store APIs.",
      fullDescriptionPoints: [
        "In my Shopify project, I worked on developing and enhancing custom functionality within the Shopify admin environment. This included building the admin UI for the app, structuring the layouts, and implementing clean, user-friendly interfaces that help merchants manage their app settings efficiently. I worked with Shopify’s Polaris design system, React components, and best practices for creating smooth, intuitive UI experiences inside the Shopify Admin.",
        "Along with the UI, I also implemented application logic to support merchant workflows—processing data, handling user actions, and ensuring a seamless interaction between the frontend and backend. I worked with Shopify APIs to fetch, update, and manage store data, helping automate tasks and make the app more dynamic and responsive to merchant needs.",
        "I also gained exposure to Shopify checkout extensibility, POS capabilities, and web pixel integrations, understanding how developers can enhance different surfaces of the Shopify ecosystem. This included exploring how businesses can modify checkout behavior, interact with the POS environment, and use pixels for tracking and analytics within the online store.",
      ],
      image: "/Project/shopify.png",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800 
                       hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {p.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {p.description}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL POPUP */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl 
                w-full max-w-3xl max-h-[85vh] overflow-y-auto 
                shadow-xl relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {selectedProject.title}
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              {selectedProject.fullDescriptionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <button
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
