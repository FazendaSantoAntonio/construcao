"use client"
import Image from "next/image";
import queijo from "../../../public/queijo.jpg"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTruckFast } from "@fortawesome/free-solid-svg-icons";

export default function Carrinho() {

    const [count, setCount] = useState(0)

    return (
        <div className="mx-16 my-16 flex flex-col justify-center items-center">
            <h2 className="text-primary/75 py-10"><span className="text-primary">Carrinho - </span> Clique em finalizar compra para efetuar o seu pedido.</h2>
            <div className="flex flex-col shadow-lg shadow-primary">
                <div className="flex justify-center ">
                    <div>
                        <h2 className="p-2 font-bold bg-primary/20 border border-primary">Produto</h2>
                        <div className="flex p-4 border-b border-l border-r border-primary">
                            <Image src={queijo} alt="queijo" width={100} />
                            <div className="mx-20">
                                <p>Queijo</p>
                                <p>SKU: <span className="font-bold">
                                    0000000
                                </span></p>
                                <p>
                                    Estoque:
                                    <span className="font-bold">
                                        Disponivel
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className="p-2 font-bold bg-primary/20 border-y border-primary flex justify-center items-center">Preço unitário</h2>
                        <div className="flex justify-center items-center border-b border-primary h-[106px]">
                            <p className="font-bold text-xl">R$ 90,00</p>
                        </div>
                    </div>


                    <div>
                        <h2 className="p-2 font-bold bg-primary/20 border border-primary flex justify-center items-center">Quantidade</h2>
                        <div className="flex justify-center items-center border-b border-l border-r border-primary h-[106px]">
                            <div className="flex w-28 items-center justify-center gap-5 border border-white mx-10 ">
                                <button
                                    className="text-3xl text-white w-full h-full bg-secondary hover:text-primary hover:bg-white transition-all duration-300"
                                    onClick={() => setCount(count - 1)}
                                >
                                    -
                                </button>
                                <p className="text-xl text-vermelho">{count}</p>
                                <button
                                    className="text-3xl text-white w-full h-full bg-secondary hover:text-primary hover:bg-white transition-all duration-300"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className="p-2 font-bold bg-primary/20 border-y border-primary flex justify-center items-center">Subitotal</h2>
                        <div className="flex justify-center items-center h-[106px] border-b border-primary">
                            <p className="font-bold text-xl px-4">R$ 90,00</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="p-2 font-bold bg-primary/20 border-x border-t border-primary flex justify-center items-center">Excluir</h2>
                        <div className="flex justify-center items-center h-[107px] border border-primary px-10">
                            <FontAwesomeIcon icon={faTrashAlt} className="text-2xl h-6 mr-2" />
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className="flex items-end justify-end w-ful border-b border-x border-primary p-2 bg-primary/20">
                    <h2>Subtotal: <span className="font-bold">R$90,00</span></h2>
                </div>
                <div className="flex justify-center items-center w-ful border-b border-x border-primary p-2 bg-primary/20">
                    <h2 className="font-bold">Caulcule o frete: </h2>
                    <div>
                        <input type="text" className="p-2 rounded" />
                        <button className='bg-primary px-5 py-2 text-secondary hover:bg-white hover:text-primary font-bold transition-all duration-300 rounded'>
                            Calcule
                            <FontAwesomeIcon icon={faTruckFast} className="text-2xl h-6 mr-2 ml-2" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}