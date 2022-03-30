import React, {useState} from 'react';
import PokedexScreen from './pokedexScreen'
import PokedexForm from './pokemonForm'
import '../Estilos/pokedex.css';
export const Pokedex = () => {
    const [pokemon , setpokemon ] = useState('')
    
    const consultarPokemon = (objData) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${objData}`)
        .then(res => res.json())
        .then(data => {
            setpokemon(data);
        }).catch(err => {

        })
       
    }
    return (
        <>
            <div className="pokedex">
                <div className="pokedex-left">
                    <div className="pokedex-left-top">
                        <div className="light is-sky is-big" />
                        <div className="ligth is-red" />
                        <div className="ligth is-yellow" />
                        <div className="ligth is-green" />
                    </div>
                    <div className="pokedex-screen-container">
                        <PokedexScreen 
                         pokemon = {pokemon}
                        />
                    </div>
                    <div className="pokedex-left-bottom">
                        <div className="pokedex-left-bottom-lights">
                            <div className="light is-blue is-medium" />
                            <div className="light is-green is-large" />
                            <div className="light is-orange is-large" />
                        </div>
                        <PokedexForm 
                            ConsultarPokemon = {(data) => consultarPokemon(data) }
                        />
                    </div>
                </div>
                <div className="pokedex-right-front" />
                <div className="pokedex-right-back" />
            </div>
        
        </>
    )
}