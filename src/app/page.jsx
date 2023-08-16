import Image from "next/image";
import queijo from "../../public/queijo.jpg"
import Destaques from "./components/Destaques";
import Promocao from "./components/Promocao";
import Produtos from "./components/Produtos";
import Blog from "./components/Blog";


export default function Home() {
  return (
    <div className="">
      <div className="w-screen h-[600px] flex flex-col justify-center items-start relative">
        <h1 className="ml-32 text-primary font-black text-5xl w-[500px] uppercase">
          <span className="text-secondary">Queijos </span> Artesanais de Alagoa.
        </h1>
        <p className="ml-32 text-primary/95 mt-5 py-2 border-l border-primary pl-3">Leve para Casa o Verdadeiro Sabor das Montanhas!</p>
        <button className="ml-32 mt-10 flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">
          Compre
        </button>
        <Image src={queijo} alt="queijo" className="w-full h-full absolute -z-10" />
      </div>
      <Destaques />
      <Promocao/>
      <Produtos/>
      <Blog/>
    </div>
  )
}
