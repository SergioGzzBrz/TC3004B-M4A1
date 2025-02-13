import React from 'react'
import Boton from './Boton'
import { useState } from 'react';

const Add = ({add}) => {
    const [name, setName] = useState("")

    return (
    <div>
        <input type="text" value={name} name="" id="" onChange={ (e) => { setName(e.target.value) } }/>
        <p>{name}</p>
        <input type="number" name="" id="" />
        <Boton name="Agregar" > </Boton>
    </div>
    )
}

export default Add
