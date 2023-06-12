import { useContext } from 'react';
import { DataContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(DataContext);
  const imgCarrito = "../img/carritoblack - copia.jpg";

  return (
    <div>
      <Link to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className='carritoCounter'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget