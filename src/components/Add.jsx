import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = ({add}) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const onsubmit = (e) => {
        e.preventDefault()
        if (!name || !price) {
            alert("Ingrese un nombre y un precio")
            return
        }
        add({name, price})
        setName("")
        setPrice("")
        navigate("/items")
    }

    return (
    <form onSubmit={onsubmit}>
        <input 
            type="text" 
            value={name} 
            name="" 
            id="" 
            onChange={ (e) => { setName(e.target.value) } }
        />
        <input 
            type="number" 
            value={price} 
            name="" 
            id="" 
            onChange={ (e) => { setPrice(e.target.value) } }
        />
        <p>{name}</p>
        <input type="submit" value="Agregar" />
    </form>
    )
}

export default Add
