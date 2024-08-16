const Products = ({
  product: { name, price, items, id },
  increment,
  decrement,
  removeProduct,
}) => {
  return (
    <div className='flex justify-evenly items-center bg-slate-500 text-white font-bold mb-4 p-4'>
      <h1>Name : {name}</h1>
      <h1>Price : {price}$</h1>
      <h1>Items : {items}</h1>
      <button className='btn btn-info font-bold' onClick={() => increment(id)}>
        +
      </button>
      <button
        className='btn btn-success font-bold'
        onClick={() => decrement(id)}
      >
        -
      </button>
      <button
        className='btn btn-error font-bold'
        onClick={() => {
          removeProduct(id)
        }}
      >
        Remove
      </button>
      <h1 className='font-bold text-lime-500 text-2xl'>
        Total :{price * items} $
      </h1>
    </div>
  )
}

export default Products
