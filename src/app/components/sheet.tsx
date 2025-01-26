"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoMdMenu } from "react-icons/io"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuDemo } from "./ui/navigationMenu"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button>
                <IoMdMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.Co</SheetTitle>
              </SheetHeader>
            
            <ul className="">
            <li className="grid grid-cols-1 gap-y-4 ">
                <Link href={" "}><NavigationMenuDemo/></Link>
                <Link className="ml-3"  href={" "}>On Sale</Link>
                <Link  className="ml-3" href={" "}>New Arrivals</Link>
                <Link className="ml-3"  href={" "}>Brands</Link>
            </li>
        </ul>


          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
