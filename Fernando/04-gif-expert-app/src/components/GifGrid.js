// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGitfs';
import { GifGridItem } from './GifGridItem';
import PropType from 'prop-types';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [ images, setImages ] = useState([]);
    const { data:images, loading } = useFetchGifs( category );
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ] );

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__delay-2s">{ category }</h3>
            { loading && <p className="animate__animated animate__bounce animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key = { img.id } 
                            { ...img } // img = { img }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropType.string.isRequired
}