import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface TopSell {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let sell: TopSell[] = [
  {
    title: "VERTICAL STRIPED SHIRT",
    id: 1,
    price: "$212",
    img_url: "/Sell1.png",
    old_price: "$232",
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    id: 2,
    price: "$145",
    img_url: "/Sell2.png",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    id: 3,
    price: "$80",
    img_url: "/Sell3.png",
  },
  {
    title: "FADED SKINNY JEANS",
    id: 4,
    price: "$210",
    img_url: "/Sell4.png",
  },
];

export default function TopSell() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {sell.map((data) => (
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
              {/* Star Rating Fix */}
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    <FaStar />
                  </span>
                ))}
              </div>
              <p className="font-bold mt-1">
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through">
                    {data.old_price}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}