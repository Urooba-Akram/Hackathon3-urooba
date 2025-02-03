import { Playfair_Display, Cinzel, Bodoni_Moda, Prata, Montserrat } from "next/font/google";

// Fix: Add "weight" and "display: swap"
const Playfair = Playfair_Display({ subsets: ["latin"], weight: "400", display: "swap" });
const Cinze = Cinzel({ subsets: ["latin"], weight: "400", display: "swap" });
const Bodoni = Bodoni_Moda({ subsets: ["latin"], weight: "400", display: "swap" });
const Prat = Prata({ subsets: ["latin"], weight: "400", display: "swap" });
const Montserra = Montserrat({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Fonts() {
  return (
    <div className="bg-black max-w-screen-2xl mx-auto w-full h-[110px] text-xl font-bold flex justify-center space-x-3 md:justify-between items-center px-6 flex-wrap">
      <h1 className={`${Playfair.className} text-white`}>VERSAC</h1>
      <h1 className={`${Cinze.className} text-white`}>ZARA</h1>
      <h1 className={`${Bodoni.className} text-white`}>GUCCI</h1>
      <h1 className={`${Prat.className} text-white`}>PRADA</h1>
      <h1 className={`${Montserra.className} text-white`}>Calvin Klein</h1>
    </div>
  );
}