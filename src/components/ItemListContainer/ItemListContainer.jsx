import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import Banner from '../Banner/Banner';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( ()=> {
    const Productos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(Productos)
      .then(respuesta => {
        const nuevosProductos = respuesta.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
  },[idCategoria])

  return (
    <>
      <Banner/>
      <h2 className='tituloPrincipal'>Nuestros productos :)</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer