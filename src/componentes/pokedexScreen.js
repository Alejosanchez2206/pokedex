import React from 'react';
import ImgCarga from './Pikachu.gif';
export default function PokedexScreen({ pokemon }) {
    let UrlImage = '';
    let NamePokemons = '';
    let TypePokemons = []
    if (pokemon) {
        UrlImage = pokemon.sprites.other["official-artwork"].front_default;
        NamePokemons = pokemon.name.toUpperCase();
        TypePokemons = pokemon
    }

    return (
        <>
            <div className="pokedex-screen-containe">
                <div className="pokedex-screen">
                    {pokemon ? <>
                        <div className="pokemon-info">
                            <h2 className="pokemon-name">{NamePokemons}</h2>
                            <img className="pokemon-img"
                                src={UrlImage}
                                alt={NamePokemons}
                            />
                            <ul className="pokemon-stat">

                                {pokemon.stats.map(item => (
                                    <>
                                        <li align="left">
                                            <span className="stat-name">{item.stat.name.toUpperCase()}: </span>
                                            <span className="item-value">{item.base_stat}</span>
                                        </li>

                                    </>
                                ))}


                            </ul>
                        </div>
                    </> : <>
                        <img
                            src={ImgCarga}
                            alt="Aun no hay ningun pokemon"
                            className="pokedex-no-screen"
                        />
                    </>}

                </div>
            </div>
        </>
    )
}