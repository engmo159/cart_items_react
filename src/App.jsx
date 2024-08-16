import { useEffect, useState } from 'react'
import Header from './components/Header'

import MainProducts from './components/MainProducts'
import ButtonDiv from './components/ButtonDiv'
import AddToCart from './components/AddToCart'

function App() {
  // states
  const [products, setProducts] = useState([
    { id: 1, name: 'chips', price: 100, items: 1 },
    { id: 2, name: 'pepsi', price: 200, items: 1 },
    { id: 3, name: 'cigarets', price: 300, items: 1 },
    { id: 4, name: 'kranshi', price: 400, items: 1 },
  ])
  const [addProducts] = useState([
    { id: 1, name: 'chips', price: 100, items: 1 },
    { id: 2, name: 'pepsi', price: 200, items: 1 },
    { id: 3, name: 'cigarets', price: 300, items: 1 },
    { id: 4, name: 'kranshi', price: 400, items: 1 },
  ])
  const [deleted, setDeleted] = useState(false)
  const [dark, setDark] = useState(false)
  //handle local storage for themes
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    theme && setDark(theme === 'true')
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', dark)
  }, [dark])
  // functions
  // increment
  const increment = id => {
    let newProducts = products.map(product => {
      if (product.id === id) {
        product.items++
      }
      return product
    })
    setProducts(newProducts)
  }
  // decrement
  const decrement = id => {
    let newProducts = products.map(product => {
      if (product.id === id && product.items > 1) {
        product.items--
      }
      return product
    })
    setProducts(newProducts)
  }
  // remove product
  const removeProduct = id => {
    let filteredProducts = products.filter(product => {
      return product.id != id
    })
    setProducts(filteredProducts)
  }
  // total price
  const getTotalPrice = () => {
    let productPrice = products.map(product => {
      return product.price * product.items
    })
    return productPrice.reduce((num1, num2) => num1 + num2, 0)
  }
  return (
    <div className={`text-center h-screen ${dark ? `bg-black` : `bg-white`}`}>
      <Header cartNum={products.length} />
      <AddToCart
        addProducts={addProducts}
        products={products}
        setProducts={setProducts}
        setDeleted={setDeleted}
      />
      <ButtonDiv
        products={products}
        setProducts={setProducts}
        setDeleted={setDeleted}
        dark={dark}
        setDark={setDark}
      />
      <MainProducts
        increment={increment}
        decrement={decrement}
        products={products}
        removeProduct={removeProduct}
        getTotalPrice={getTotalPrice}
        deleted={deleted}
      />
    </div>
  )
}

export default App
