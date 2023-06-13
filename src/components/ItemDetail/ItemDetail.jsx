import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { toast } from "react-toastify";


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {añadirProductoAlCarrito} = useContext(DataContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio}; 
    añadirProductoAlCarrito(item, cantidad);
  }

  const productoEnAgregado = () => {
    toast(' Tu producto ya esta en el carrito!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

  return (
    <div className='contenedorDetail'>
      <img src={img} alt={nombre} />
      <div className='infoDetail'>
      <h2>{nombre} </h2>
       <p>Lorem ipsum, dolor Expedita commodi porro reprehenderit perferendis itaque sed eligendi, consequatur qui iure doloribus! Iure molestias expedita magnam consequuntur?</p>
      <h3>${precio} </h3>
      {
        agregarCantidad > 0 ? (<Link className='btn' to="/cart" onClick={productoEnAgregado}> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)  
      }
      </div>
    </div>
  )
}

export default ItemDetail