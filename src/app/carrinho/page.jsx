"use client"
import Image from "next/image";
import queijo from "../../../public/queijo.jpg"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import ItemCarrinho from "../components/ItemCarrinho";

export default function Carrinho() {

    const [count, setCount] = useState(0)

    return (
        <div className="mx-16 my-16 flex flex-col justify-center items-center ">
            <div className="shadow-sm shadow-primary flex bg-primary/20 border border-primary text-primary">
                <h2 className="uppercase font-bold border-r border-primary w-72 p-2">
                    Produto
                </h2>
                <h2 className="uppercase font-bold border-r border-primary p-2 w-44 flex justify-center items-center">
                    Preço unitário
                </h2>
                <h2 className="uppercase font-bold border-r border-primary p-2 w-44 flex justify-center items-center">
                    Quantidade
                </h2>
                <h2 className="uppercase font-bold border-r border-primary p-2 w-44 flex justify-center items-center">
                    Subtotal
                </h2>
                <h2 className="uppercase font-bold p-2 w-44 flex justify-center items-center">
                    Excluir
                </h2>
            </div>
            <div>
                <ItemCarrinho
                    foto={queijo}
                    titulo="Queijo"
                    sku="000000"
                    estoque="Disponivel"
                    preco="100,00"
                    subtotal="100,00"
                />
                <ItemCarrinho
                    foto={queijo}
                    titulo="Queijo"
                    sku="000000"
                    estoque="Disponivel"
                    preco="100,00"
                    subtotal="100,00"
                />
                <ItemCarrinho
                    foto={queijo}
                    titulo="Queijo"
                    sku="000000"
                    estoque="Disponivel"
                    preco="100,00"
                    subtotal="100,00"
                />
            </div>
            <div className="flex justify-end items-end w-[992px] border-x border-b border-primary bg-primary/20 p-2">
                <p>Subtotal: <span className="font-bold">90,00</span> </p>
            </div>
            <div className="flex  items-center p-5 bg-primary/20 w-[992px] border-x border-b border-primary">
                <p className="font-bold mr-2">Calcule o Frete:</p> 
                <input type="text" className="p-2" placeholder="digite o seu CEP"/> 
                <button className="flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Calcular <FontAwesomeIcon icon={faTruckFast}/></button>
            </div>
            <div className="w-[992px] flex justify-end items-end border-x border-b border-primary p-2">
                <p>Total: <span className="font-bold text-2xl">R$90,00</span> </p>
            </div>

            <button className=" text-2xl mt-5 flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">Finalizar Compra</button>
        </div>
    )
}