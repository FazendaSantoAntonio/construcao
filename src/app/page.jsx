import Image from "next/image";
import queijo from "../../public/queijo.jpg"

export default function Home() {
  return (
    <div className="">
      <div className="w-screen flex justify-start items-center ">
        <h1 className="text-primary ml-32 mt-32 font-bold text-5xl w-[500px]">
          Queijos Artesanais de Alagoa. Leve para Casa o Verdadeiro Sabor das Montanhas!
        </h1>
        <Image src={queijo} alt="queijo" className="absolute top-44 -z-10"/>
      </div>

    </div>
  )
}
