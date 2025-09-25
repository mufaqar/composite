//import Hero from "@/components/home/Hero";
//import Logo from "@/components/home/logo";
//import TrendingProducts from "@/components/home/product";

import Hero from "@/components/HomePage/Hero";
import TrendingProducts from "@/components/HomePage/TrendingProducts";


export default function Home() {
  return (
    <main>
      <Hero />
      <section>
        <TrendingProducts />
        {/* <Logo /> */}
      </section>
    
    </main>
  );
}
