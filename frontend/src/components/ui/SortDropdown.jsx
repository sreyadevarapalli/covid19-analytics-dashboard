function SortDropdown({ value, onChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="sort"
        className="mb-2 block font-semibold text-gray-700"
      >
        Sort By
      </label>

      <select
        id="sort"
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 md:w-72"
      >
        <option value="cases">Total Cases</option>
        <option value="deaths">Deaths</option>
        <option value="recovered">Recovered</option>
        <option value="active">Active Cases</option>
        <option value="population">Population</option>
        <option value="name">Country Name (A–Z)</option>
      </select>
    </div>
  );
}

export default SortDropdown;