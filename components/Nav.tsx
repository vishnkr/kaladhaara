import Link from "next/link";
import { menuItems } from '../menuItems'
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Nav(){
    const [dropdown, setDropdown] = useState(false);
    const [curSelected,setCurSelected] = useState<number|null>(null);
    const onMouseEnter = (idx:number) => {
        window.innerWidth > 960 && setDropdown(true);
        setCurSelected(idx);
    };
       
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
        setCurSelected(null);
    };
  
    return <nav className="isolate bg-white text-sky-900">
        <div className="px-6 pt-4 lg:px-8">
            <nav className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                    <Link className="m-1.5 p-1.5" href="/">
                        <span className="text-2xl">Kaladhaara</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                </div>
                <div className="hidden lg:flex lg:gap-x-9 items-center">
                {menuItems.map((menu,idx)=>{
                    return (
                        menu.submenu ? 
                        <div 
                            className="font-semibold cursor-pointer leading-6 text-sky-900" 
                            key={idx} aria-haspopup="menu" aria-expanded={dropdown} 
                            onClick={()=>setDropdown((prev)=>!prev)}
                            onMouseEnter={()=>onMouseEnter(idx)}
                            onMouseLeave={onMouseLeave}
                        >
                           {menu.title}{' '} <span className="arrow" />
                           <Dropdown curpath={menu.url} submenus={menu.submenu} dropdown={dropdown && curSelected===idx} />
                        </div>
                        : <Link target="_self" className="font-semibold leading-6 text-sky-900 group transition duration-300 ease-in-out" key={idx} href={menu.url}>
                        {menu.title}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-pink-500 to-pink-500"></span>
                        </Link>
                    );
                    
                })}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sky-900">
                    <Link target="_self" href="/contact">Contact Us</Link> 
                </div>
            </nav>
        </div>
    </nav>
}