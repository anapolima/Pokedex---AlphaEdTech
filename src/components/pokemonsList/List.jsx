import "./list.css"

import React, { useEffect, useState } from  "react";
import PokemonCard from "../pokemons/Pokemons";

function PokemonsList ()
{
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () =>
    {
        fetch("https://my-json-server.typicode.com/srsantosdev/pokedex-fakeapi/pokedex")
            .then( (response) => response.json())
            .then( (resolved) =>
                    {
                        if (!Array.isArray(resolved))
                        {
                            setError(true);
                        }
                        else
                        {
                            setPokemons(resolved)
                            setError(false);
                        };
                    })
            .finally(setLoading(false)); 
    }, []);

    if (loading)
    {
        return <div id="loading">Carregando…</div>
    }

    return (
        <>
            { error ? (<p className="error-message">Falha ao carregar lista de Pokemons.</p>) : 
            pokemons.map((pokemon) =>
                {
                    return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                })
            } 
        </>
    )
}

export default PokemonsList