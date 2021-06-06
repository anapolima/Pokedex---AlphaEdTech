import "./pokemons.css";

import React from "react";

function PokemonCard (props)
{
    return (
        <>
            <div
                className="pokemon-card">
                    
                <div>
                    <img
                        className="pokemon-image"
                        src={props.pokemon.image}
                        alt={props.pokemon.name}/>
                </div>

                <div
                    className="pokemon-information">
                    <p
                        className="pokemon-name">
                        {props.pokemon.name.toUpperCase()}</p>

                    <p
                        className="heigth-title">
                        ALTURA</p>

                    <p
                        className="heigth-value">
                        {props.pokemon.height}m</p>

                        <p
                        className="weight-title">
                        PESO</p>

                    <p
                        className="weight-value">
                        {props.pokemon.weight}kg</p>
                </div>

            </div>
        </>
    )
}

export default PokemonCard