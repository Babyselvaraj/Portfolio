export default function Hero() {
  return (
    <section id="hero" className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100">
          Hi, I'm <span className="text-blue-600">Baby</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          A passionate Front-End Developer focused on building modern,
          responsive web applications.
        </p>
        <a
  href="#projects"
  className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  View My Work
</a>

      </div>
    </section>
  );
}
