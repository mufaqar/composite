import ClientLogos from "@/components/HomePage/ClientLogos";
import Hero from "@/components/HomePage/Hero";
import TrendingProducts from "@/components/HomePage/TrendingProducts";


export default function Home() {
  return (
    <main>
      <Hero />    
        <TrendingProducts />
        <ClientLogos />
    </main>
  );
}
