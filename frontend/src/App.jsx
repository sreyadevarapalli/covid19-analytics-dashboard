import CountryDetails from "./pages/CountryDetails/CountryDetails";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Countries from "./pages/Countries/Countries";
import Analytics from "./pages/Analytics/Analytics";
import Compare from "./pages/Compare/Compare";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/countries/:countryName"
          element={<CountryDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;