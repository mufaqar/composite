import ClientLogos from "@/components/HomePage/ClientLogos";
import FeaturedIcons from "@/components/HomePage/FeaturedIcons";
import Hero from "@/components/HomePage/Hero";
import ProductRange from "@/components/HomePage/ProductRange";
import TrendingProducts from "@/components/HomePage/TrendingProducts";
import WhyChooseus from "@/components/HomePage/WhyChooseus";


export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedIcons />
      <WhyChooseus />
      <ProductRange />
      <TrendingProducts />
      <ClientLogos />
    </main>
  );
}
