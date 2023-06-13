import { DataContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(DataContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="carritoSin"> No hay productos en el carrito :(</h2>
                <Link className="btn" to='/'> Volver a la tienda </Link>
            </>
        )
    }
    return (
        <div className="cartContenedor">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="carritoComprar">
            <p>Total: ${total} </p>
            <p>Cantidad total de productos: {cantidadTotal} </p>
            <button className="btn" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link className="btn" to='/checkout'> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart