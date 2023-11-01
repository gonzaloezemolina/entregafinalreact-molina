import { useContext } from "react";
import { DataContext } from "../../context/CarritoContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(DataContext);

  return (
    <div>
        <p> {item.nombre} </p>
        <p> Cantidad: {cantidad}</p> <button className="btn">+</button> <button className="btn">-</button>
        <p> Precio: $ {item.precio*cantidad} </p>
        <button className="btn" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  );
}

export default CartItem