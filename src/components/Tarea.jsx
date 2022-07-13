import React from 'react'
import '../stylesheet/Tarea.css'


export const Tarea = ({ texto,id,handleDelete }) => {
  

  return (
    <div 
    className='tarea-container'>
        <p>{texto}</p>
        <p
        onClick={() => handleDelete(id)}>Eliminar</p>
    </div>
  )
}
