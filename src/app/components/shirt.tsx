import { FaStar } from "react-icons/fa";
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
    id: 2,
    price:"$240",
    img_url: "/Product2.png",
    old_price:"$260"
   },
   {
    title: "CHECKERED SHIRT",
    id: 3,
    price:"$180",
    img_url: "/Product3.png",
   },
   {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price:"$130",
    img_url: "/Product4.png",
    old_price:"$160"
   },
   {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 5,
    price:"$120",
    img_url: "/Product1.png",
   }, 
   {
    title: "SKINNY FIT JEANS",
    id: 6,
    price:"$240",
    img_url: "/Product2.png",
    old_price:"$260"
   },
   {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 7,
    price:"$120",
    img_url: "/Product1.png",
   }, 
   {
    title: "SKINNY FIT JEANS",
    id: 8,
    price:"$240",
    img_url: "/Product2.png",
    old_price:"$260"
   },
   {
    title: "CHECKERED SHIRT",
    id: 9,
    price:"$180",
    img_url: "/Product3.png",
   },
]

let star = [<FaStar key="1"/>, <FaStar key="2"/>, <FaStar key="3"/>, <FaStar key="4"/>, <FaStar key="5"/>]

export default function CasualShirts(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-start">Casual</h1>
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data) => {
                        return (
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                    <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                        <Image 
                                            src={data.img_url} 
                                            alt={data.title}
                                            className="w-full h-full rounded-[20px]"
                                            width={100} 
                                            height={100} 
                                        />
                                    </div>
                                </Link>
                                <div>
                                    <p className="text-lg mt-2 font-bold">{data.title}</p>
                                    <div className="flex text-yellow-400">
                                        {star.map((icon, index) => (
                                            <span key={index}>{icon}</span>
                                        ))}
                                    </div>
                                    <p className="font-bold mt-1">
                                        {data.price} 
                                        <span className="text-gray-400 font-bold line-through"> 
                                            {data.old_price} 
                                        </span>
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}