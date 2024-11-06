import React from 'react'
import { useParams } from 'react-router'

const EditarContacto = () => {
    const params= useParams()
  return (
    <div>EditarContacto {useParams}</div>
  )
}

export default EditarContacto