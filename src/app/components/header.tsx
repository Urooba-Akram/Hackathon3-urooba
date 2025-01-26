import Link from "next/link"
import { FaSearchengin } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./ui/navigationMenu";
import { FaCartShopping } from "react-icons/fa6";



export default function Header(){
  return (
    <header className="w-full h-[60px] flex justify-between items-center max-w-screen-2xl mx-auto ">
        <div className="flex justify-center items-center">
            <SheetSide/>
            <h1 className="text-2xl font-bold text-black px-16">SHOP.CO</h1>
        </div>
        <ul className="hidden md:block">
            <li className="space-x-6 flex items-center ">
                <Link href={" "}> <NavigationMenuDemo/></Link>
                <Link href={" "}>On Sale</Link>
                <Link href={" "}>New Arrivals</Link>
                <Link href={" "}>Brands</Link>
            </li>
        </ul>
        <div className="hidden md:block">
             <div className="flex justify-start items-center rounded-[62px] w-[330px] h-[40px] bg-[#F0F0F0]">
         <FaSearchengin className="text-xl ml-2"/>
        <input type="text"
        placeholder="Search for products..." 
        className="w-full h-full bg-slate-100 outline-none text-sm"/>
          </div>
      </div>
      <div className="flex items-center mr-7 space-x-5">
      <FaSearchengin className="text-xl ml-2 md:hidden"/>
      <Link href={"cart"}>
      <FaCartShopping className="text-2xl"/>
      </Link>
        <IoCartOutline className="text-2xl"/>
        <IoIosContact className="text-2xl"/>
    </div>

    </header>
  )
}