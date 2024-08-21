import Products from './Products'
const MainProducts = ({
  products,
  increment,
  decrement,
  removeProduct,
  getTotalPrice,
}) => {
  return (
    <>
      {products.map(product => (
        <Products
          key={product.id}
          increment={increment}
          decrement={decrement}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
      <h1 className='font-bold text-red-800 text-2xl'>
        {!products.length
          ? `Cart is empty`
          : `Total Price : ${getTotalPrice()}$`}
      </h1>
    </>
  )
}

export default MainProducts
