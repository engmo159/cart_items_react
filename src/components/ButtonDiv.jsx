import { CiSun } from 'react-icons/ci'
import { FaRegMoon } from 'react-icons/fa'

const ButtonDiv = ({ products, setProducts, setDeleted, dark, setDark }) => {
  // handlers
  const resetHandler = products => {
    setProducts(
      products.map(product => {
        return { ...product, items: 1 }
      })
    )
  }

  const deleteHandler = () => {
    setProducts([])
    setDeleted(true)
  }
  const setTheme = dark => setDark(!dark)
  return (
    <div className='mb-8'>
      <h1 className='font-bold text-2xl mb-8'> Cart</h1>
      <div className='flex justify-evenly items-center'>
        <button
          className='btn btn-info font-bold'
          onClick={() => resetHandler(products)}
        >
          Reset
        </button>
        <button className='btn btn-error font-bold' onClick={deleteHandler}>
          Delete All
        </button>
        <button
          className={`btn  font-bold  px-6 text-3xl ${
            dark ? 'btn-primary' : 'btn btn-active '
          }`}
          onClick={() => setTheme(dark)}
        >
          {dark ? <CiSun /> : <FaRegMoon />}
        </button>
      </div>
    </div>
  )
}

export default ButtonDiv
