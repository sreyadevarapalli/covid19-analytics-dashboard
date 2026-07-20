import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaVirus } from "react-icons/fa";

import GlobalSearch from "../search/GlobalSearch";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Countries", path: "/countries" },
    { name: "Analytics", path: "/analytics" },
    { name: "Compare", path: "/compare" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 text-xl font-bold"
        >
          <FaVirus className="text-2xl text-yellow-300" />

          <span className="hidden sm:inline">
            COVID Analytics
          </span>

          <span className="sm:hidden">
            COVID
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
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

          <GlobalSearch />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-2xl hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/20 px-4 pb-4 lg:hidden">
          <ul className="space-y-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 transition ${
                      isActive
                        ? "bg-white/20 font-semibold text-yellow-300"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <GlobalSearch />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;