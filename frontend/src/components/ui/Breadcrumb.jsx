import { Link } from "react-router-dom";

function Breadcrumb({ countryName }) {
  return (
    <nav className="mb-6 text-sm text-gray-600">
      <Link
        to="/"
        className="hover:text-blue-600"
      >
        Home
      </Link>

      <span className="mx-2">›</span>

      <Link
        to="/countries"
        className="hover:text-blue-600"
      >
        Countries
      </Link>

      <span className="mx-2">›</span>

      <span className="font-semibold text-gray-900">
        {countryName}
      </span>
    </nav>
  );
}

export default Breadcrumb;