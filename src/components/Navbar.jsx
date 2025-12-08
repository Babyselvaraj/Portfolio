import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Baby
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Buttons Right */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Button */}
          <button
            onClick={toggleTheme}
            className="text-2xl dark:text-yellow-300 text-gray-800"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-gray-700 dark:text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6 z-50 transition-transform">
          
          <button
            className="text-2xl mb-6 dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>

          <ul className="flex flex-col gap-6 text-gray-800 dark:text-gray-200 text-lg">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
