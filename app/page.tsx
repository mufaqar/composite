import Hero from "@/components/home/Hero";
import Logo from "@/components/home/logo";
import TrendingProducts from "@/components/home/product";


export default function Home() {
  return (
    <main>
      <Hero />
      <section>
        <TrendingProducts />
        <Logo />
      </section>
    </main>
  );
}
