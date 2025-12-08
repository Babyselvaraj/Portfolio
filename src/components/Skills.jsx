export default function Skills() {
  const skills = ["React", "JavaScript", "Tailwind", "HTML", "CSS", "Shopify", "Sitecore CMS", "Optimizely", "C#", "Git"];

  return (
    <section
      id="skills"
      className="
        py-20 px-6
        bg-gray-50 dark:bg-gray-900
        text-gray-800 dark:text-gray-200
      "
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-5 py-2 rounded-full font-medium
              shadow hover:shadow-lg transition
              bg-white dark:bg-gray-800
              text-gray-700 dark:text-gray-200
              border border-gray-200 dark:border-gray-700
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
