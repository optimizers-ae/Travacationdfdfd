import { Plane } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-10 md:px-20 max-w-7xl mx-auto w-full z-10 relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="rotate-45 text-primary">
          <Plane fill="currentColor" size={24} />
        </div>
        <span className="font-serif text-2xl font-semibold tracking-wide">Roamora</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                isActive ? "text-primary" : "text-text-dark"
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full"></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Button */}
      <button className="bg-primary hover:bg-primary-dark transition-colors text-white px-6 py-2.5 rounded-full text-sm font-medium">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;