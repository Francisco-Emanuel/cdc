import Product from "./Product"
import Stitch from "../assets/stitch.png"
import Nita from "../assets/Celina.png"
import Celina from "../assets/Nita.png"

const PgVendas = () => {

  const productData = [
    {
      title: "Stitch",
      image: Stitch,
      descricao: "Receitas do personagem Stitch com 11 páginas de pdf e mais de 35 imagens do passo a passo",
      preco: "R$19,90",
    },
    {
      title: "Celina",
      image: Celina,
      descricao: "Receitas do personagem Stitch com 11 páginas de pdf e mais de 35 imagens do passo a passo",
      preco: "R$19,90",
    },
    {
      title: "Nita",
      image: Nita,
      descricao: "Receitas do personagem Stitch com 11 páginas de pdf e mais de 35 imagens do passo a passo",
      preco: "R$19,90",
    },
  ]

  return (
    <main className="padding">
        <div className="flex flex-col">
          {productData.map((item, index)=> (
            <Product title={item.title} image={item.image} descricao={item.descricao} preco={item.preco} key={item.title + index} />
          ))}
        </div>
    </main>
  )
}

export default PgVendas