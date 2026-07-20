import { FaSearch } from "react-icons/fa";

function SearchBar({
  value,
  onChange,
  placeholder = "Search countries...",
}) {
  return (
    <div className="relative w-full">
      <FaSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={16}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 shadow-sm transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}

export default SearchBar;