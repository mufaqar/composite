import Logo from "@/components/home/logo";
import TrendingProducts from "@/components/home/product";
import Image from "next/image";

export default function Home() {
  return (
   <section>
        <TrendingProducts />
        <Logo />
        
   </section>
  );
}
