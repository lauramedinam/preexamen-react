import React from 'react'

const TarjetaCurso = ({ nombre, descripcion }) => {
  return (
    <div>
        <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default TarjetaCurso