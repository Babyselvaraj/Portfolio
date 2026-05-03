export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-800 dark:text-gray-200 py-6 bg-gray-800 text-center text-white">
      <p>© {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}
