import Image from "next/image";
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHome, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NavMobile from "./NavMobile";


const CustonLink = ({ title, icon, link }) => {
    return (
        <Link href={link} className="flex w-36 text-primary flex-col justify-center items-center hover:text-light transition-all duration-300">
            <FontAwesomeIcon icon={icon} className="h-5" />
            {title}
        </Link>
    )
}

export default function NavBar() {
    return (
        <div>
            <div className="flex text-center justify-center items-center bg-primary text-light w-screen">
                Frete Grátis nas compras acima de R$ 300,00
            </div>
            <NavMobile />
            <nav className="hidden md:flex w-screen bg-secondary justify-center items-center h-36">

                <CustonLink
                    link="/"
                    title="Início"
                    icon={faHome}
                />
                <CustonLink
                    link="/quem-somos"
                    title="Quem Somos"
                    icon={faUser}
                />
                <Link href="/">
                    <Image src={logo} width={150} alt="logo da Fazenda Santo Antônio"
                        className="rounded-full hidden md:block"
                    />
                </Link>
                <CustonLink
                    link='/carrinho'
                    title='Carrinho'
                    icon={faShoppingCart}
                />
                <CustonLink
                    link='/fale-conosco'
                    title='Atendimento'
                    icon={faComments}
                />
            </nav>
            <nav className="hidden md:flex flex-wrap w-screen px-16 space-x-10 justify-center items-center bg-primary text-light py-2">
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
                <Link href="#" className="hover:text-secondary transition-all duration-300">
                    Queijo
                </Link>
            </nav>

        </div>
    )
}