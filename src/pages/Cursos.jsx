import React from 'react'

const Cursos = () => {
  return (
    <>
    <div>Cursos</div>
    <TarjetaCurso
        nombre="React"
        descripcion="Curso de React"
      />

      <TarjetaCurso
        nombre="Laravel"
        descripcion="Curso de Laravel"
      />

      <TarjetaCurso
        nombre="Angular"
        descripcion="Curso de Angular"
      />
      </>
  )
}

export default Cursos