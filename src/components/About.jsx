export default function About() {
    return (
        <section
            id="about"
            className="
        py-20 px-6 
        bg-gray-50 dark:bg-gray-900 
        text-gray-800 dark:text-gray-200
      "
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Image */}
                <div className="flex justify-center">
                    <div
                        className="
    w-60 h-60 rounded-full flex items-center justify-center
    bg-blue-600 text-white text-6xl font-bold shadow-lg 
    border-4 border-white dark:border-gray-700
  "
                    >
                        BS
                    </div>

                </div>

                {/* Right: Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        About Me
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm a passionate{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                            Front-End Developer
                        </span>{" "}
                        with experience in building modern, responsive, and user-friendly web
                        applications. I enjoy working with React, Tailwind CSS, and various
                        front-end tools to bring ideas to life with clean, maintainable code that enhance functionality and performance.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                        I thrive on solving complex problems, optimizing code, and continuously learning new technologies to stay ahead in the evolving front-end landscape.
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 grid grid-cols-2 gap-4">

                        {/* Card */}
                        <div className="
              p-4 rounded-xl shadow hover:shadow-lg transition text-center
              bg-white dark:bg-gray-800
            ">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                3+ Years
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">
                                Experience
                            </p>
                        </div>

                        {/* Card */}
                        <div className="
              p-4 rounded-xl shadow hover:shadow-lg transition text-center
              bg-white dark:bg-gray-800
            ">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                10+ Projects
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">
                                Completed
                            </p>
                        </div>

                        {/* Card */}
                        <div className="
              p-4 rounded-xl shadow hover:shadow-lg transition text-center
              bg-white dark:bg-gray-800
              col-span-2 md:col-span-1
            ">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                React / JS
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">
                                Core Skills
                            </p>
                        </div>

                        {/* Card */}
                        <div className="
              p-4 rounded-xl shadow hover:shadow-lg transition text-center
              bg-white dark:bg-gray-800
              col-span-2 md:col-span-1
            ">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                UI/UX
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">
                                Design Focus
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
