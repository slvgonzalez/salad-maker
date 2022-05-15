import React, { useState } from 'react'

const generateSaladModelObject = () => ({
    id: 1,
    name:"",
    type: "medium",
    ingredients:[],
    cost: 0,
    price: 0,
    hoursFresh:0,
    currentStock:0,
    deletedProductsId:""
  }
)



const SaladForm = () => {

  const [values, setValues] = useState(generateSaladModelObject());

  // const handleInputChange = e = {
  //   const {name, values} = e.target
  //   setValues({...values, })
  // }

  return (
    <>
    </>
  )
}

export default SaladForm
