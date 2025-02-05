"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Products from "../page";
import { Button } from "@/app/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import AllReviw from "@/app/components/allreviews";
import Tshirts from "@/app/components/product";
import { BreadcrumbDemo } from "@/app/components/breadcrupm";

let star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />
];

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
}

let product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/Product1.png",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$240",
    img_url: "/Product2.png",
    old_price: "$260",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$260",
    img_url: "/Product3.png",
    old_price: "$300",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$260",
    img_url: "/Product4.png",
    old_price: "$300",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
  },
];

export default function Pro_Detail() {
  const params = useParams();
  const id = params.id; // dynamic id yeh se milengi
  const item = product.find((item) => item.id === Number(id));
  if (!item) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <BreadcrumbDemo />
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
        {/*left */}
        <div className=" flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
          {/*images*/}
          <Image
            src={item.img1}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px]"
            alt="productdetail"
            width={100}
            height={100}
          />
          <Image
            src={item.img2}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
            alt="productdetail"
            width={100}
            height={100}
          />
          <Image
            src={item.img3}
            className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
            alt="productdetail"
            width={100}
            height={100}
          />
        </div>
        {/*mid div */}
        <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
          <Image
            src={item.img3}
            alt="productdetail"
            className="w-full h-[95%]"
            width={200}
            height={100}
          />
        </div>
        {/*right div */}
        <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
          <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
          <div className="flex text-yellow-400">
            {star}
          </div>
          <p>
            {item.price}
            <span>{item.old_price}</span>
          </p>
          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers
            superior comfort and style
          </p>
          {/* select color */}
          <div className="mt-5">
            <p className="text-gray-500">Select Colors</p>
            <div className="flex space-x-3 mt-2">
              {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
                <div
                  key={index}
                  className={`w-[37px] h-[37px] bg-[${color}] rounded-full relative flex justify-center items-center`}
                >
                  <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
          {/* choose size */}
          <div className="mt-4 ">
            <p className="text gray-500">Choose Size</p>
            <div className="flex space-x-5">
              <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Small</div>
              <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Medium</div>
              <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Large</div>
              <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">X-Large</div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-start items-center mt-7 space-x-4">
            <div className="w-[90px] h-[40px] flex justify-center items-center [62px] bg-[#F0F0F0] text-gray-400">
              <Minus />
              1
              <Plus />
            </div>
            <Button className="bg-black text-white w-[180px]">Add to Cart</Button>
          </div>
        </div>
      </div>
      <AllReviw />
      <Tshirts />
    </>
  );
}