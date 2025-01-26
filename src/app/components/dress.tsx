import React from "react";
import Image from "next/image";

const style = () => {
  return (
    <div className="w-full h-full mt-8  sm:h-[500px] bg-[#F0F0F0] flex flex-col  justify-start items-center pt-8  max-w-screen-2xl mx-auto">
      {/* Heading */}
      <div className="mt-2">
        <h1 className="text-3xl font-bold pl-6 sm:pl-0">BROWSE DRESS BY</h1>
      </div>

      {/* Image Grid */}
      <div className=" w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center">
        {/* First Image */}
        <div className="col-span-1">
          <div className="w-[400px] h-[200px] m-1 relative">
            <Image
              src="/style1Grey.png" // Replace with your image path
              alt="Dress Style 1"
              width={100} 
              height={100} 
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="col-span-3">
        <div className="w-[400px] h-[200px] m-1 relative">
            <Image
              src="/style2Grey.png" // Replace with your image path
              alt="Dress Style 1"
              width={100} 
              height={100} 
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </div>

        {/* Third Image */}
        <div className="col-span-1">
        <div className="w-[400px] h-[200px] m-1 relative">
            <Image
              src="/style3Grey.png" // Replace with your image path
              alt="Dress Style 1"
              width={100} 
              height={100} 
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </div>

        {/* Fourth Image */}
        <div className="col-span-3">
        <div className="w-[400px] h-[200px] m-1 relative">
            <Image
              src="/style4Grey.png" // Replace with your image path
              alt="Dress Style 1"
              width={100} 
              height={100} 
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default style;