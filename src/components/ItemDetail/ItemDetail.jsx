import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {añadirProductoAlCarrito} = useContext(DataContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio}; 
    añadirProductoAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorDetail'>
      <img src={img} alt={nombre} />
      <div className='infoDetail'>
      <h2>{nombre} </h2>
      <p> Lorem ipsum dolor sit amet consectetur quam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
      <h3>${precio} </h3>
      {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      </div>
    </div>
  )
}

export default ItemDetail