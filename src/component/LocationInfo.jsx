import React from 'react'

function LocationInfo({location}) {
  return (
    <div className="container-centered">
    <div className="location">
      <h2>{location?.name}</h2>
      <ul>
        <li>
          Type: <br /> <span>{location?.type}</span>
        </li>
        <li>
          Dimension: <br /> <span>{location?.dimension}</span>
        </li>
        <li>
          Population: <br /> <span>{location?.residents.length}</span>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default LocationInfo