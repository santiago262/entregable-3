import React, { useEffect } from 'react'
import useFecht from '../hooks/useFecht'

export default function ResidentsCard({url}) {
   const [character,getCharacter] =useFecht(url)
   console.log(character)
   useEffect(()=>{
    getCharacter()
   },[])
   
  return (
  
 
    <div class="card">
        <img src={character?.image} alt="" />
    <div class="card-content">
    <h3>{character?.name}</h3>
    <ul>
        <li>
            Specie {character?.species}
        </li>
        <li>
            origin {character?.origin.name}
        </li>
        <li>
            estatus {character?.status}
        </li>
        <li> 
        episode numbers {character?.episode.length}
        </li>
    </ul>
 </div></div>

  
  )
}
