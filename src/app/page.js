import Image from "next/image";
import Hero from "@/app/components/hero/Hero";
import Cards from "@/app/components/cards/Cards";
import Anuncio from "@/app/components/anuncio/Anuncio";
import Ubicacion from "@/app/components/ubicacion/Ubicacion";

export default function Home() {
  return (
      <main>
      <Hero/>
      <Cards/>
      <Anuncio/>
      <Ubicacion/>
      </main>
  );
}
