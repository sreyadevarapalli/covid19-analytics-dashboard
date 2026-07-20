import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import useCountries from "../../hooks/useCountries";
import SearchDropdown from "./SearchDropdown";
import SearchResult from "./SearchResult";

function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { countries } = useCountries();

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return [];

    return countries
      .filter((country) =>
        country.country
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .slice(0, 8);
  }, [searchTerm, countries]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchTerm("");
        setSelectedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleKeyDown = (e) => {
    if (!filteredCountries.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCountries.length - 1 ? prev + 1 : prev
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : 0
        );
        break;

      case "Enter":
        e.preventDefault();

        if (selectedIndex >= 0) {
          navigate(
            `/countries/${filteredCountries[selectedIndex].country}`
          );

          setSearchTerm("");
          setSelectedIndex(-1);
        }
        break;

      case "Escape":
        setSearchTerm("");
        setSelectedIndex(-1);
        break;

      default:
        break;
    }
  };

  return (
    <div
      ref={searchRef}
      className="relative w-full max-w-sm"
    >
      <FaSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={16}
      />

      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setSelectedIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      {filteredCountries.length > 0 && (
        <SearchDropdown>
          {filteredCountries.map((country, index) => (
            <SearchResult
              key={country.country}
              country={country}
              isSelected={selectedIndex === index}
              onSelect={() => {
                setSearchTerm("");
                setSelectedIndex(-1);
              }}
            />
          ))}
        </SearchDropdown>
      )}
    </div>
  );
}

export default GlobalSearch;