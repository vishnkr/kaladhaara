import { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { menuItems } from "../menuItems";

export default function Nav() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const onMouseEnter = (idx: number) => {
    if (window.innerWidth > 960) {
      setActiveDropdown(idx);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setActiveDropdown(null);
    }
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className="bg-[#ededbb] text-sky-900">
      <div className="max-w-screen-xl flex flex-col mx-auto p-2">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link className="flex items-center" href="/">
            <img
              src="/logo.png"
              className="h-16 w-auto object-contain"
              alt="Logo"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-multi-level"
            aria-expanded={showMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                showMenu ? "rotate-90" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full md:flex md:items-center`}
          id="navbar-default"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
            {menuItems.map((menu, idx) => (
              <div
                key={idx}
                className="relative w-full"
                onMouseEnter={() => onMouseEnter(idx)}
                onMouseLeave={onMouseLeave}
              >
                {menu.submenu ? (
                  <div className="relative group w-full">
                    <div
                      className="font-semibold cursor-pointer leading-6 text-red-900 px-2 py-2 whitespace-nowrap flex items-center"
                      aria-haspopup="menu"
                      aria-expanded={activeDropdown === idx}
                      onClick={() => {
                        if (window.innerWidth <= 960) {
                          setActiveDropdown(
                            activeDropdown === idx ? null : idx
                          );
                        }
                      }}
                    >
                      <span>{menu.title}</span>
                      <svg
                        className="w-3 h-3 ml-1 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </div>
                    <div
                      className={`w-full ${
                        activeDropdown === idx ? "block" : "hidden"
                      } md:block md:absolute md:top-full md:left-0 md:z-50`}
                    >
                      <Dropdown
                        curpath={menu.url}
                        submenus={menu.submenu}
                        dropdown={activeDropdown === idx}
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    href={menu.url}
                    target={menu.target || "_self"}
                    rel={menu.target === "_blank" ? "noopener noreferrer" : ""}
                    className="font-medium lg:font-semibold leading-6 text-red-900 group transition duration-300 ease-in-out px-2 py-2 whitespace-nowrap block"
                  >
                    {menu.title}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-700"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
