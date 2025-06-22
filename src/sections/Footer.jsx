import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Salma Jahan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-sm text-gray-600 flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using
              React & Tailwind CSS
            </p>
          </div>

          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
