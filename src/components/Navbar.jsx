import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Load theme
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Track active section (scroll)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      className={`cursor-pointer transition ${
        active === id ? "text-blue-500 font-semibold" : "hover:text-blue-500"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent backdrop-blur-md shadow-sm z-50 border border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Baby<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLink("home", "Home")}
          {navLink("about", "About")}
          {navLink("experience", "Experience")}
          {navLink("projects", "Projects")}
          {navLink("skills", "Skills")}
          {navLink("contact", "Contact")}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="absolute right-0 top-0 w-64 h-full bg-transparent p-6 shadow-lg">

            <button
              className="text-2xl mb-6 dark:text-white"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>

            <div className="flex flex-col gap-6 text-lg text-gray-800 dark:text-gray-200">
              {navLink("home", "Home")}
              {navLink("about", "About")}
              {navLink("experience", "Experience")}
              {navLink("projects", "Projects")}
              {navLink("skills", "Skills")}
              {navLink("contact", "Contact")}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}