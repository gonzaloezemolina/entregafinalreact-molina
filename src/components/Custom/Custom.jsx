import React from 'react'
import Spline from '@splinetool/react-spline';
import './Custom.css'
import CustomBanner from '../CustomBanner/CustomBanner';

const Custom = () => {
  return (
    <>
        <Spline scene="https://prod.spline.design/mr8YnXWBVGC4c9KX/scene.splinecode" />
{/* <Spline scene="https://prod.spline.design/D8Zbw8EmGAB6LdRe/scene.splinecode" /> */}
<section className='customizeSection'>
<div className='customOptions'>
        <h1>Selecciona un modelo</h1> <p className='option'>In Ears</p> <p className='option'>On Ears</p>
        </div>

        <div className='Colores'>
          <h1>Selecciona un color</h1>
          <button className='BotonColor1'>Rojo</button>
          <button className='BotonColor2'>Negro</button>
          <button className='BotonColor3'>Azul</button>
          <button className='BotonColor4'>Rosa</button>
          <button className='BotonColor5'>Verde</button>
          <button className='BotonColor6'>Amarillo</button>
        </div>

        <div>
          <h1>Añade Texto</h1>
          <label htmlFor=""></label>
          <input type="text"/>
        </div>
</section>
   
    </>
  )
}

export default Custom