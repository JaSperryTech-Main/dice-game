const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">App Name</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600">
              Home
            </a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-500 hover:text-gray-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
