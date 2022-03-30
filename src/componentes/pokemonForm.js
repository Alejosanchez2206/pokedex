import React ,{ useEffect } from 'react';

export default function pokemonForm(props){

    const Generarnumeroaleatorio = () =>{
        const RandomId = Math.floor(Math.random() * 897 + 1)
        props.ConsultarPokemon(RandomId)
    }
    
    return(
        <>
        <div className="pokemon-form">
           <input 
           type="text" className="pokemon-input" 
           placeholder="Sortea un pokemon"
           disabled
           />
           <button className="pokemon-btn" onClick={Generarnumeroaleatorio} value="">Go</button>
        </div>
        </>
    )
}