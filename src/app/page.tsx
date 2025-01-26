import Image from "next/image";
import Navbar from "../app/components/navbar"
import Header from "../app/components/header"
import Hero from "../app/components/hero"
import Fonts from "../app/components/fonts";
import Products from "../app/products/page";
import Top_sell from "../app/products/sell";
import Dress from "../app/components/dress";
import CustomerCarousel from "@/app/components/carousel"
import Footer from "./components/footer";
import AllReviw from "./components/allreviews";
import Product from "./components/product";
import Casual from "@/app/casual/page"
import ProductCards from "./product/page";


export default function Home() {
  return (
  <div>
    
    <Hero/>
    <Fonts/>
    <Products/>
    <Top_sell/>
    <Dress/>
    <CustomerCarousel/>
    <Footer/>
    <AllReviw/>
    <Product/>
    <Casual/>
    <ProductCards/>
    
  </div>  
  );
}
