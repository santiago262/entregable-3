import React, { useRef } from 'react'

export default function FormeSearch({setNumber}) {
    const inputSearch=useRef()
    const handleSumit=(e)=>{
        e.preventDefault()
        if(inputSearch.current.value.trim()){setNumber(inputSearch.current.value.trim())}
        
    }
  return (
    <div class="input-group">
    <form onClick={handleSumit}>
    <input type="number" class="input" ref={inputSearch} />
    <button class="button">buscar</button>
    <span class="input-border"></span>
    </form>
    </div>
  )
}
