import React from "react";
import PokemonsList from "../components/pokemonsList/List";

import pokedexIcon from "../images/Pokedex.svg";

function Home ()
{
    return (
        <>
            <div id="logo">
                <img
                    src={pokedexIcon}
                    alt="Pokedex"/>
            </div>

            <div id="pokemons-list">
                < PokemonsList/>
            </div>
        </>
    )
}

export default Home;