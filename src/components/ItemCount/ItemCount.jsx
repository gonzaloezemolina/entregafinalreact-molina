import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }



  return (
    <>
        <div>
            <button className='btn' onClick={ restar }> - </button>
            <strong> {contador} </strong>
            <button className='btn' onClick={ sumar }> + </button>
        </div>
        <button className='btn' onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount