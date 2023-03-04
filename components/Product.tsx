import Image, { StaticImageData } from "next/image"
import Estrelas from "../assets/estrelas.png"
import Pagamentos from "../assets/pagamentos.png"
import { BsFilePdf } from "react-icons/bs"

type pProps = {
  image: StaticImageData,
  title: string,
  preco: string,
  descricao: string,
}

const Product = (props: pProps) => {

  const {image, title, preco, descricao} = props

  return (
    <div className="cdc__salepage-product">
        <div className="cdc__salepage-product_image">
            <Image src={image} height={300} alt="stitch" />
        </div>
        <div className="cdc__salepage-product_infos">
        <h3>Receita digital</h3>
        <h1><BsFilePdf />{title}</h1>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col text-end">
            <p className=" text-gray-500 line-through flex text-end">R$40,25</p>
            <h1>{preco}</h1>
            </div>
            <div className="flex justify-center align-middle">
            <Image src={Estrelas} className="cdc__salepage-product_stars" width={300} alt="estrelas" />
            </div>
        </div>
        <p className="my-4 md:my8">{descricao}</p>
        <div className="flex flex-row justify-between">
            <div className="flex">
            <button type="button" className="cdc__salepage-product_buybtn"><a href="#">Comprar agora</a></button>
            </div>
            <div className="flex justify-end align-top">
            <Image src={Pagamentos} className="cdc__salepage-product_pagamentos"  alt="pagamentos" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Product