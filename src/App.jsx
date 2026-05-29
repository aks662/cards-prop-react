import './App.css'
import ProductCard from './Components/Card'
import products from './Components/Data'

function App() {
  

  return (
    <div>
      <div className="page">
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>


    </div>
  )
}

export default App
