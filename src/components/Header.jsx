import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import MenuItems from "./MenuItems.jsx"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-gray-800">
          BR.<span className="text-yellow-500">F</span>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-4 py-2 text-sm focus:outline-none"
          />
          <button>
            <MdOutlineFavorite />
          </button>
          <button>
            <BsCart3 />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-sm ml-2">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-4 py-2 text-sm w-full focus:outline-none mb-2"
            />
            <button className="flex items-center mb-2">
               Favorites
            </button>
            <button className="flex items-center mb-2">
               Cart
            </button>
            <div className="flex items-center space-x-4">
              <span>Profile</span>
            </div>
          </div>
        </div>
      )}
      <MenuItems />
    </div>
  );
}

export default Header;
