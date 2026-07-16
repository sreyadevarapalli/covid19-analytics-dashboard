import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          COVID-19 Analytics Dashboard
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-blue-100 md:text-xl">
          Explore global COVID-19 statistics, country-wise analysis,
          interactive charts, and real-time insights through a modern
          analytics dashboard.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
          >
            Explore Dashboard
          </Link>

          <Link
            to="/analytics"
            className="rounded-lg border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
          >
            View Analytics
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;