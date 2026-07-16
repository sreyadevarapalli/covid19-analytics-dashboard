import { NavLink } from "react-router-dom";
import { FaVirus } from "react-icons/fa";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Countries", path: "/countries" },
    { name: "Analytics", path: "/analytics" },
    { name: "Compare", path: "/compare" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <FaVirus className="text-red-300 text-3xl" />
          COVID Analytics
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-yellow-300"
                      : "text-white hover:text-yellow-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;