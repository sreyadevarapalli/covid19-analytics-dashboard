import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";

function CountryCard({ country }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() =>
        navigate(`/countries/${encodeURIComponent(country.country)}`)
      }
      className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <img
          src={country.countryInfo.flag}
          alt={country.country}
          className="h-12 w-16 rounded object-cover"
        />

        <div>
          <h3 className="text-xl font-bold">
            {country.country}
          </h3>

          <p className="text-gray-500">
            Population: {country.population.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Total Cases</span>
          <span className="font-semibold">
            {country.cases.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Recovered</span>
          <span className="font-semibold text-green-600">
            {country.recovered.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Deaths</span>
          <span className="font-semibold text-red-600">
            {country.deaths.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Active</span>
          <span className="font-semibold text-orange-600">
            {country.active.toLocaleString()}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default CountryCard;