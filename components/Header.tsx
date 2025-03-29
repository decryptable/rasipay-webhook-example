import Link from "next/link";
import { config } from "@/lib/config";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-black dark:text-white"
        >
          {config.appName}
        </Link>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Playground API
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
