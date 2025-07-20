import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/vague.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/75 -z-10" />

      {/* Contenu au-dessus */}
      <Header />
      <main>{/* Ton contenu ici */}</main>
    </div>
  );
}
