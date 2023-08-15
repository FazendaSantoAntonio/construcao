import Image from "next/image";
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHome, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const CustonLink = ({ title, icon, link }) => {
    return (
        <Link href={link} className="w-36 text-primary flex flex-col justify-center items-center hover:text-light transition-all duration-300">
            <FontAwesomeIcon icon={icon} className="h-5" />
            {title}
        </Link>
    )
}

export default function NavBar() {
    return (
        <div>
            <div className="flex justify-center items-center bg-primary text-light ">Frete Grátis nas compras acima de R$ 300,00</div>
            <nav className="w-screen bg-secondary flex justify-center items-center h-36">
                <CustonLink
                    link="/"
                    title="Início"
                    icon={faHome}
                />
                <CustonLink
                    link="#"
                    title="Sobre"
                    icon={faUser}
                />
                <Link href="/">
                    <Image src={logo} width={150} alt="logo da Fazenda Santo Antônio"
                        className="rounded-full"
                    />
                </Link>
                <CustonLink
                    link='#'
                    title='Carrinho'
                    icon={faShoppingCart}
                />
                <CustonLink
                    link='#'
                    title='Atendimento'
                    icon={faComments}
                />
            </nav>
            <nav className="px-16 space-x-10 flex justify-center items-center bg-primary text-light py-2">
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