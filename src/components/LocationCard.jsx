import React from 'react'
import './LocationCard.scss'

function LocationCard({location}) {

  const countPopulation = location.residents.length
  const countText = countPopulation === 1 ? ' resident' : ' residents'
  const locationID = location.id.toString().padStart(3, '0')

  return (
    <div className='location '>
      <div className='location__content container'>
      <h2 className='location__name'>{location.name} #{locationID}</h2>
      <ul className='location__details'>
      <li className='location__details-item'>
        Type: <span className='location__details-span'>{location.type}</span></li>
      <li className='location__details-item'>
        Dimension: <span className='location__details-span'>{location.dimension}</span></li>
      <li className='location__details-item'>
        Population: <span className='location__details-span'>{countPopulation}{countText}</span></li>
      </ul>
      </div>
    </div>
  )
}

export default LocationCard
