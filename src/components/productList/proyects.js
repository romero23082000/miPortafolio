import React from 'react'
import Proyect from '../product/proyect';
import './proyects.css';

const proyects = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create</h1>
        <p className='pl-desc'>
        </p>
      </div>
      <div className='pl-list'>
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />

      </div>
    </div>
  )
}

export default proyects
