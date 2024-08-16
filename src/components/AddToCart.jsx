const AddToCart = ({ addProducts, products, setProducts, setDeleted }) => {
  const addProductsHandler = (newProduct, products, setProducts) => {
    let productExist = products.some(obj => obj.id === newProduct.id)
    productExist
      ? setProducts(
          products.map(obj =>
            obj.id === newProduct.id ? { ...obj, items: (obj.items += 1) } : obj
          )
        )
      : setProducts([...products, newProduct])
    products.length && setDeleted(false)
  }

  return (
    <div className='flex justify-evenly items-center'>
      {addProducts.map(newProduct => (
        <div key={newProduct.id}>
          <button
            className='btn btn-accent font-bold'
            onClick={() =>
              addProductsHandler(newProduct, products, setProducts)
            }
          >
            {newProduct.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default AddToCart
