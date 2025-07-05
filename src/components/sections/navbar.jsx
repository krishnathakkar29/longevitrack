import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Benefits", path: "/benefits" },
    { name: "Privacy", path: "/privacy" },
    { name: "Contact Us", path: "/contact" },
    { name: "Terms", path: "/terms" },
  ];

  const isActive = (path) => location.pathname === path;
  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-center px-6 lg:px-12 py-6 bg-transparent backdrop-blur-sm">
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

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex.items-center.space-x-8 {
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
          }

          .flex.items-center.space-x-8 a {
            font-size: 0.75rem;
            padding: 0.375rem 0.75rem;
          }
        }

        @media (max-width: 640px) {
          .flex.items-center.space-x-8 {
            flex-direction: column;
            space-x: 0;
            gap: 0.75rem;
          }

          .px-6.lg\\:px-12 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </nav>
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
