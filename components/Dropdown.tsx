import { MenuItems } from "@/menuItems";
import Link from "next/link";

interface DropdownProps{
  curpath:string,
  submenus: MenuItems,
  dropdown: boolean,
  className?: string; 
}
const Dropdown = ({ curpath, submenus, dropdown , className}:DropdownProps) => {
    return (
        
        <ul className={`
            ${dropdown ? "block" : "hidden"}
            list-none text-md shadow-lg bg-[#ededbb] text-red-900
            cursor-pointer py-2 px-2 rounded-lg
            z-50
            md:absolute
          `}>
          
            {submenus.map((submenu, index) => (
                <Link key={index} href={`${curpath}/${submenu.url}`}>
                <li key={index} className="px-1 py-2 hover:bg-zinc-300 hover:rounded-lg">
                    {submenu.title}
                </li>
                </Link>
            ))}
        </ul>
      
    );
  };
  export default Dropdown;