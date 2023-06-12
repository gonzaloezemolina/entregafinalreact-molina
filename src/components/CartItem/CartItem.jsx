import { useContext } from "react";
import { DataContext } from "../../context/CarritoContext";

const CartItem = ({item, img, cantidad}) => {
    const {eliminarProducto} = useContext(DataContext);

  return (
    <div>
        <p> {item.nombre} </p>
        <img src={item.img} alt="" />
        <p> Cantidad: {cantidad} </p>
        <p> Precio: $ {item.precio} </p>
        <button className="miBtn" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem