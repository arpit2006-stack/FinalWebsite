import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <>
      <nav className="bg-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-900 text-2xl font-bold">WE-PICK</div>

            <form onSubmit={handleSearch} className="hidden sm:flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                className="p-1 border border-gray-300 w-xl focus:outline-none rounded-sm focus:ring-2 focus:ring-gray-300"
              />
              <button type="submit" className="bg-black text-white p-1 rounded-sm hover:bg-gray-500">
                Search
              </button>
            </form>

            <div className="hidden sm:flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">LOGIN</a>
              <a href="/shop" className="text-gray-700 hover:text-gray-900">SHOP</a>
              <a href="/cart" className="text-gray-700 hover:text-gray-900">CART</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">CONTACT</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-gray-900"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-white p-4">
            <a href="/" className="block text-gray-700 hover:text-gray-900 py-2">Home</a>
            <a href="/shop" className="block text-gray-700 hover:text-gray-900 py-2">Shop</a>
            <a href="/about" className="block text-gray-700 hover:text-gray-900 py-2">About</a>
            <a href="/contact" className="block text-gray-700 hover:text-gray-900 py-2">Contact</a>
          </div>
        )}
      </nav>

      <div className="bg-gray-50 py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-center space-x-4">
          <button className="bg-gray-50 px-17 py-1 rounded hover:bg-gray-200">Shirts</button>
          <button className="bg-gray-50 px-17 py-1 rounded hover:bg-gray-200">T-Shirts</button>
          <button className="bg-gray-50 px-17 py-1 rounded hover:bg-gray-200">Hoodies</button>
          <button className="bg-gray-50 px-17 py-1 rounded hover:bg-gray-200">Watches</button>
          <button className="bg-gray-50 px-17 py-1 rounded hover:bg-gray-200">Shoes</button>
        </div>
      </div>
    </>
  );
};

export default Navbar