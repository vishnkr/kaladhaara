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
              <img src="/logo.png" className="nav-logo" />
            </Link>
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                        className="font-semibold cursor-pointer leading-6 text-zinc-900 mx-2"
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
                        <div className="font-medium lg:font-semibold leading-6 text-zinc-900 group transition duration-300 ease-in-out mx-2">
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
  


    /*
    <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</Link>
                          </li>
                          <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</Link>
                          </li>
                          <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</Link>
                          </li>
                          <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</Link>
                          </li>
    <nav className="isolate bg-gray-50 text-sky-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
                    <Link className="m-1.5" href="/">
                        <img src="/logo.png" className="nav-logo"/>
                    </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0">
                    {menuItems.map((menu,idx)=>{
                        return (
                            menu.submenu ? 
                            <li 
                                className="font-semibold cursor-pointer leading-6 text-sky-900 mx-2" 
                                key={idx} aria-haspopup="menu" aria-expanded={dropdown} 
                                onClick={()=>setDropdown((prev)=>!prev)}
                                onMouseEnter={()=>onMouseEnter(idx)}
                                onMouseLeave={onMouseLeave}
                            >
                            {menu.title}{' '} <span className="arrow" />
                            <Dropdown curpath={menu.url} submenus={menu.submenu} dropdown={dropdown && curSelected===idx} />
                            </li>
                            : 
                            <li className="font-medium lg:font-semibold leading-6 text-sky-900 group transition duration-300 ease-in-out mx-2">
                                <Link target="_self" key={idx} href={menu.url}>
                                    {menu.title}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-pink-500 to-pink-500"></span>
                                </Link>
                            </li>
                        );
                        
                    })}
                </ul>
                </div>
            </div>
        </div>
    </nav>
    
    
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        {menuItems.map((menu,idx)=>{
                           return (
                            menu.submenu ? 
                            <li 
                            className="font-semibold cursor-pointer leading-6 text-sky-900 mx-2" 
                            key={idx} aria-haspopup="menu" aria-expanded={dropdown} 
                            onClick={()=>setDropdown((prev)=>!prev)}
                            onMouseEnter={()=>onMouseEnter(idx)}
                            onMouseLeave={onMouseLeave}
                            >
                            {menu.title}{' '} <span className="arrow" />
                            <Dropdown curpath={menu.url} submenus={menu.submenu} dropdown={dropdown && curSelected===idx} />
                            </li>
                            :
                            <li key={idx}>
                                <Link target="_self" key={idx} href={menu.url} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</Link>
                            </li>
                        ); 
                        })}
                        </ul>
    )
}


/**

<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link className="flex items-center" href="/">
        <img src="/logo.png" className="h-8 mr-3"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kaladhaaraa</span>
    </Link>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                {menuItems.map((menu,idx)=>{
                           return (
                            menu.submenu ? 
                            <div>
                            <button id="dropdownNavbarLink" onClick={()=>setDropdown((prev)=>!prev)}
                            onMouseEnter={()=>onMouseEnter(idx)}
                            onMouseLeave={onMouseLeave} data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">{menu.title} 
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <Dropdown curpath={menu.url} submenus={menu.submenu} dropdown={dropdown && curSelected===idx} />
                            </div>
                            :
                            <li key={idx}>
                                <Link target="_self" key={idx} href={menu.url} className="block px-4 py-2 hover:bg-gray-100">{menu.title}</Link>
                            </li>
                        ); 
                        })}
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>
                    
                    <li>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                    </li>
                </ul>
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</Link>
                </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

 */