import React from 'react'
import { useState } from 'react'
import '../stylesheet/Formulario.css'
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({onSubmit}) => {
 
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newTarea = {
      text: input,
      id: uuidv4(),
    }

    onSubmit(prevS=> [newTarea,...prevS]) 
  }
 
  return (
    <form 
      className='formulario-container'
      onSubmit={handleSubmit}>
      <input 
        type='text'
        className='formulario-input'
        onChange={handleChange} />

      <button
        type='submit'
        className='formulario-button'
        >
          
          Enviar</button>
    </form>
  )
}
