function SearchDropdown({ children }) {
  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        z-50
        mt-2
        max-h-96
        overflow-y-auto
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-2xl
        animate-in
        fade-in
        duration-200
      "
    >
      {children}
    </div>
  );
}

export default SearchDropdown;