import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    // const categories = ['one punch','samurai x','dragon ball'];

    const [ categories, setCategories ] = useState( defaultCategories );

    // const handleAdd = () => {
    //     setCategories( cats => [ ...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GrifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            {/* <button onClick={ () => handleAdd() }>Agregar</button> */}
            <ol>
                {/* { 
                    categories.map( category => {
                        return <li key={ category }> { category} </li>
                    })
                } */}
                {
                    categories.map( category => (
                        <GifGrid key = { category } category = { category } />
                    ))
                }
            </ol>
        </>
    )
}
