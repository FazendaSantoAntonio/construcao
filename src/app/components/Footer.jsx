import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const data = new Date()
    const ano = data.getFullYear()

    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="bg-secondary flex items- justify-center p-16 text-primary w-full">
                <div className="flex flex-col justify-center items-center mr-20">
                    <Image src={logo} width={100} />
                    <p className="w-64 text-justify text-sm mt-5 ">Descubra o incrível universo lúdico da Marcio Artezanatos! Loja especializada em produtos sustentáveis e produzidos por empresas brasileiras, resgatamos memórias e histórias, proporcionando aprendizagens significativas para todas as idades. Com jogos, brinquedos em madeira, livros e quebra-cabeças, estimulamos a imaginação, criatividade e o desenvolvimento integral das crianças. Venha explorar nosso mundo encantado e transforme o aprendizado em uma experiência mágica.</p>
                </div>
                <div className="flex flex-col justify- space-y-5 mr-20">
                    <h2 className="uppercase font-bold">Institucional</h2>
                    <Link href="fale-conosco" className="hover:text-light transition-all duration-300">Fale Conosco</Link>
                    <Link href="/politica-de-privacidade" className="hover:text-light transition-all duration-300">Política de Privaciade</Link>
                    <Link href="politica-de-troca-e-devolucao" className="hover:text-light transition-all duration-300">Nossas Políticas de troca e devolução</Link>
                    <Link href="quem-somos" className="hover:text-light transition-all duration-300">Quem Somos?</Link>
                </div>

                <div className="flex flex-col justify- items-center gap-5 mr-20">

                    <Link href="#" className="flex items-cewnter hover:text-light transition-all duration-300">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl h-10 mr-2" />
                        Whatsapp:+55 35 9121-6423
                    </Link>
                    
                    

                </div>
                <Link href="#" className="text-primary z-10 text-2xl hover:text-light transition-all duration-300"><FontAwesomeIcon icon={faInstagram} />
                </Link>
                <div className="flex flex-col justify-center items-center gap-5">
                </div>

                <div className="flex flex-col justify-start space-y-5 mr-20">
                    <h2 className="uppercase font-bold">Redes Sociais</h2>
                    <div className="flex gap-2">
                        <Link href="#" className="text-primary text-2xl hover:text-light transition-all duration-300 w-5"><FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link href="#" className="text-primary text-2xl hover:text-light transition-all duration-300 w-6"><FontAwesomeIcon icon={faFacebook} />
                        </Link>

                    </div>
                </div>

            </div>
            <div className=" w-full text-primary flex flex-col items-center justify-center text-center">
                <p className="text-xs">
                    Fazenda-CNPJ: 0000000000000000000000000 Todos os Direitos Reservados, {ano}
                </p>
                <div className="flex">
                    <p className="text-sm">Developed by&nbsp; </p>{' '}
                    <a href="" className="font-bold text-primary hover:text-secondary transition ease-in-out duration-300">
                        Rixxer &trade;
                    </a>
                </div>
            </div>
        </div>
    )
}