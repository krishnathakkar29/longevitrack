import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
    { name: "Contact Us", path: "/contact" },
    { name: "Terms", path: "/terms" },
  ];

  const isActive = (path) => location.pathname === path;
  return (
    <>
      {/* Desktop Navbar - unchanged */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-[500] items-center justify-center px-6 lg:px-12 py-6 bg-transparent backdrop-blur-sm">
        <div className="relative flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 transform hover:scale-105 rounded-full ${
                isActive(item.path)
                  ? "px-6 py-2 bg-gradient-to-r from-[#02ADA9] to-[#00E073] text-white hover:shadow-lg hover:shadow-[#02ADA9]/25"
                  : "text-white hover:text-[#02ADA9] hover:bg-white/10 px-4 py-2 backdrop-blur-sm"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-[500]">
        <div className="mx-4 mt-4 bg-[#0D2221] rounded-2xl px-4 py-3 flex items-center justify-between backdrop-blur-sm">
          {/* Logo/Icon */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#02ADA9] to-[#00E073] rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mx-4 mt-2 bg-[#0D2221] rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-[#02ADA9] to-[#00E073] text-white"
                    : "text-white hover:text-[#02ADA9] hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/*
 <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 lg:px-12 py-6 bg-transparent backdrop-blur-sm">
      // <div className="absolute inset-0 bg-black/20"></div> */

//   <div className="relative flex items-center space-x-8">
//     <button className="px-6 py-2 bg-gradient-to-r from-[#02ADA9] to-[#00E073] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#02ADA9]/25 transition-all duration-300 transform hover:scale-105">
//       Home
//     </button>
//     <button className="text-white hover:text-[#02ADA9] text-sm font-medium transition-all duration-200 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
//       Benefits
//     </button>
//     <button className="text-white hover:text-[#02ADA9] text-sm font-medium transition-all duration-200 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
//       Features
//     </button>
//     <button className="text-white hover:text-[#02ADA9] text-sm font-medium transition-all duration-200 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
//       Member stories
//     </button>
//     <button className="text-white hover:text-[#02ADA9] text-sm font-medium transition-all duration-200 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
//       Contact Us
//     </button>
//   </div>

//   {/* Mobile responsive adjustments */}
//   <style jsx>{`
//     @media (max-width: 768px) {
//       .flex.items-center.space-x-8 {
//         flex-wrap: wrap;
//         gap: 0.5rem;
//         justify-content: center;
//       }

//       .flex.items-center.space-x-8 button {
//         font-size: 0.75rem;
//         padding: 0.375rem 0.75rem;
//       }
//     }

//     @media (max-width: 640px) {
//       .flex.items-center.space-x-8 {
//         flex-direction: column;
//         space-x: 0;
//         gap: 0.75rem;
//       }

//       .px-6.lg\\:px-12 {
//         padding-left: 1rem;
//         padding-right: 1rem;
//       }
//     }
//   `}</style>
// </nav>
