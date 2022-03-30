import React from 'react';

export default function PokedexScreen({ pokemon }) {
    let UrlImage = '';
    if(pokemon){
        UrlImage = pokemon.sprites.other["official-artwork"].front_default;
    }
    console.log(UrlImage)
   // let UrlImage = pokemon.sprites.other["official-artwork"].front_default ? pokemon.sprites.other["official-artwork"].front_default : '';
    return (
        <>
            <div className="pokedex-screen-containe">
                <div className="pokedex-screen">
                    <div className="pokemon-info">
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                        <img className="pokemon-img"
                           src={UrlImage}
                        />
                        <ul className="pokemon-stat">
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}