import React from 'react'

export const TarjetaDePaciente = () => {
  return (
    <div className='border-4 mx-5 my-3'>
        <h1 className='text-2xl pt-9 text-center font-semibold mb-3'>Mis tarjetas de pacientes: </h1>
        <hr />
        <div className='bg-white rounded-md mx-5 p-5 font-semibold shadow-md'>
            <p>Nombre: Ejemplo</p>
            <p>Nombre de la mascota: Lula</p>
            <p>Fecha de ingreso: 21-10-2023</p>
            <p>Hora de ingreso: 7:16 a.m.</p>
            <p>Síntomas: Vomitos, bajada de peso, etc.</p>
        </div>
    </div>
  )
}
