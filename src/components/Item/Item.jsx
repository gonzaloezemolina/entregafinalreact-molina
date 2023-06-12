import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='Producto'>
        <img className='Producto__imagen' src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>${precio}</p>
        <Link className='Producto__btn' to={`/item/${id}`}> Ver más</Link>
    </div>
  )
}

export default Item