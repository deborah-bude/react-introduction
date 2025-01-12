import { useState } from "react"
import Input from "./components/forms/input"
import Checkbox from "./components/forms/Checkbox"
import ProductRow from "./components/product/ProductRow"

const ProductsList = [
  {category: "Électronique", price: "$200", stocked: true, name: "Télévision"},
  {category: "Électronique", price: "$1500", stocked: false, name: "Ordinateur"},
  {category: "Électronique", price: "$100", stocked: true, name: "Casque"},
  {category: "Électronique", price: "$50", stocked: true, name: "Souris"},
  {category: "Électronique", price: "$30", stocked: false, name: "Clavier"},
  {category: "Vêtements", price: "$20", stocked: true, name: "T-shirt"},
  {category: "Vêtements", price: "$50", stocked: true, name: "Jean"},
  {category: "Vêtements", price: "$100", stocked: false, name: "Veste"},
  {category: "Vêtements", price: "$10", stocked: true, name: "Chaussettes"},
  {category: "Vêtements", price: "$25", stocked: false, name: "Casquette"},
  {category: "Livres", price: "$15", stocked: true, name: "Roman"},
  {category: "Livres", price: "$20", stocked: false, name: "Science-fiction"},
  {category: "Livres", price: "$25", stocked: true, name: "Biographie"},
]

function App() {
  const [search, setSearch] = useState("")
  const [stocked, setStocked] = useState(false)
  const visibleProducts = ProductsList.filter((product) => {
    if (stocked && !product.stocked) {
      return false
    }
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

  return (
    <div className="container my-5">
      <div>
        <div className="mb-3">
          <Input placeholder="Rechercher" value={search} onChange={setSearch}/>
          <Checkbox id="stocked" checked={stocked} onChange={setStocked} label="Produits en stock"/>
        </div>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Catégories</th>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {visibleProducts.map((product) => (
            <ProductRow key={product.name} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App