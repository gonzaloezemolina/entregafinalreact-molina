import { useState, useContext } from "react"
import { DataContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(DataContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmarcion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !direccion || !email || !emailConfirmarcion) {
            setError("Campos incompletos");
            return;
        }

        if (email !== emailConfirmarcion) {
            setError("Verifique el email ingresado coincida");
            return;
        }


        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            direccion,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })

    }
    return (
        <div>
            <form onSubmit={manejadorSubmit} className="formulario">
                <h2 style={{padding:"15px"}}>Tu compra</h2>
                {carrito.map(producto => (
                    <div key={producto.item.id} className="productosCheckout">
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p>Precio: $ {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}

                <div className="form-group">
                    <h2 style={{padding: "15px"}}>Formulario</h2>
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Direccion </label>
                    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmarcion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="miBtn" type="submit"> Finalizar Orden </button>

                {
                    ordenId && (
                        <strong className="orderId">Gracias por comprar ☺ Tu número de orden es: {ordenId} </strong>
                    )
                }
            </form>
        </div>
    )
}

export default Checkout