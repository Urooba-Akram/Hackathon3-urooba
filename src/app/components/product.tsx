import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let sell: Product[] = [
  {
    title: "Polo with Contrast Trims",
    id: 1,
    price: "$212",
    img_url: "/New1.png",
    old_price: "$242",
  },
  {
    title: "Gradient Graphic T-shirt",
    id: 2,
    price: "$145",
    img_url: "/New2.png",
  },
  {
    title: "Polo with Tipping Details",
    id: 3,
    price: "$180",
    img_url: "/New3.png",
  },
  {
    title: "Black Striped T-shirt",
    id: 4,
    price: "$120",
    img_url: "/New4.png",
    old_price: "$150",
  },
];

let star = [
  <FaStar key="1" />,
  <FaStar key="2" />,
  <FaStar key="3" />,
  <FaStar key="4" />,
  <FaStar key="5" />,
];

export default function Tshirts() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {sell.map((data) => {
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
                    <span key={index}>{icon}</span> // Assign `key={index}` to each span here
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
        })}
      </div>
    </div>
  );
}