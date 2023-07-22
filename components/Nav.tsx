import Link from "next/link";
import { menuItems } from '../menuItems'
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Nav() {
    const [dropdown, setDropdown] = useState(false);
    const [curSelected, setCurSelected] = useState<number | null>(null);
    const [showMenu, setShowMenu] = useState(false);
  
    const onMouseEnter = (idx: number) => {
      window.innerWidth > 960 && setDropdown(true);
      setCurSelected(idx);
    };
  
    const onMouseLeave = () => {
      window.innerWidth > 960 && setDropdown(false);
      setCurSelected(null);
    };
  
    const toggleMenu = () => {
      setShowMenu((prevShowMenu) => !prevShowMenu);
    };
  
    return (
      <nav className="isolate bg-[#ededbb]  text-sky-900">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-start mx-auto p-2">
          <div className="flex items-center">
            <Link className="m-1.5" href="/">
              <img src="/logo.png" className="block h-20 md:h-24 " />
            </Link>
            <div className="flex items-center justify-end">
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  showMenu ? "rotate-90" : "rotate-0"
                }`}
                aria-hidden="true"
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
          </div>
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } w-full md:flex md:w-auto md:space-x-8`}
            id="navbar-default"
          >
            <div className="md:flex md:items-center md:space-x-8 md:justify-center">
              {menuItems.map((menu, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-center">
                    
                    {menu.submenu ? (
                      <div
                        className="font-semibold cursor-pointer leading-6 text-red-900 mx-2"
                        aria-haspopup="menu"
                        aria-expanded={dropdown}
                        onClick={() => {
                          if (window.innerWidth <= 960) {
                            setDropdown((prev) => !prev);
                            setCurSelected(idx);
                          }
                        }}
                        onMouseEnter={() => {
                          if (window.innerWidth > 960) {
                            setDropdown(true);
                            setCurSelected(idx);
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.innerWidth > 960) {
                            setDropdown(false);
                            setCurSelected(null);
                          }
                        }}
                      >
                        <span className="">
                          {menu.title}
                          <svg
                            className="w-2.5 h-2.5 ml-2.5 inline-block"
                            
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
                        </span>
                        <Dropdown
                          curpath={menu.url}
                          submenus={menu.submenu}
                          dropdown={dropdown && curSelected === idx}
                        />
                      </div>
                    ) : (
                        
                      <Link target="_self" href={menu.url}>
                        <div className="font-medium lg:font-semibold leading-6 text-red-900 group transition duration-300 ease-in-out mx-2">
                          {menu.title}
                          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-700"></span>
                        </div>
                      </Link>
                      
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  }