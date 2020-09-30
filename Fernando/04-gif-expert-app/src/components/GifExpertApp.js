import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    // const categories = ['one punch','samurai x','dragon ball'];

    const [ categories, setCategories ] = useState(['']);

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
