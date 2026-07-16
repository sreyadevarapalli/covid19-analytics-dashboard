function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          COVID Analytics
        </h1>

        <ul className="flex gap-6 font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/countries">Countries</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;