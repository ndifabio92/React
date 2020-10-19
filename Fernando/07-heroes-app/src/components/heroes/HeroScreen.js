import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const hero = useMemo(() => getHeroesById( heroId ), [ heroId ]);
    //const hero = getHeroesById( heroId );

    if( !hero ) return <Redirect to = "/" />

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleReturn = () => {
        ( history.length <= 2 ) ? history.push('/') : history.goBack();
    }

    return (
        <div className = "row mt-5">
            <div className = "col-4">
                <img src = {`../assets/heroes/${ heroId }.jpg`}  className = "img-thumbnail animate__animated animate__fadeInLeft" alt = { superhero }/>
            </div>

            <div className = "col-8">
                <h3> { superhero }</h3>
                <ul className = "list-group list-group-flush">
                    <li className = "list-group-item"> <b> Alter Ego: { alter_ego } </b></li>
                    <li className = "list-group-item"> <b> Publisher: { publisher } </b></li>
                    <li className = "list-group-item"> <b> First Appearance: { first_appearance } </b></li>
                </ul>
                <h5> Characters </h5>
                <p> { characters} </p>

                <button className = "btn btn-outline-primary" onClick = { handleReturn } > Return </button>
            </div>
        </div>
    )
}
