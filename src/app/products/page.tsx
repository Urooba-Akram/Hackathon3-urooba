import { FaStar } from "react-icons/fa";
import { title } from "process"
import Image from "next/image";
import Link from "next/link";

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
}

let product: Iproducts[] = [
   {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price:"$120",
    img_url: "/Product1.png",
   }, 
   {
    title: "SKINNY FIT JEANS",
    id: 1,
    price:"$240",
    img_url: "/Product2.png",
    old_price:"$260"
   },
   {
    title: "CHECKERED SHIRT",
    id: 1,
    price:"$180",
    img_url: "/Product3.png",
   },
   {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 1,
    price:"$130",
    img_url: "/Product4.png",
    old_price:"$160"
   },
  
]
let star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,]

export default function Products(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                              <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                  <div className="w-[190px] h-[190px] md:w-[290px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                                  <Image src={data.img_url} alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                 width={100} height={100}></Image>
                                 
                                  </div>
                                  </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>
                                <p  className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span></p>
                                </div>
                              </div>
                        )
                    })
                }
            </div>
        </div>
    )
}