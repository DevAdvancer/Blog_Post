import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-semibold dark:text-white">Abhriup's Blog</span>
          </Link>
          <nav className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
