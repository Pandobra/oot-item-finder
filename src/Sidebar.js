import React from 'react'

const Sidebar = ({locations, func}) => {
  return (
    <div className='location-button'>
      <h3 className='location-title'>Locations</h3>  
      {locations.map((locs, index) => (
        <button className='button-location'
        style={{
          maxWidth: "120px",
          maxHeight: "70px",
          backgroundColor: '#f0ddbd',
        }}
        key={index}
        onClick={() =>{
          func(index)
        }}>
          {locs}
        </button>
      ))}
      
    </div>
  )
}

export default Sidebar

// Death Mountain Crater
// Death Mountain Trail
// Desert Colossus
// Ganon's Castle Outside
// Gerudo Valley
// Gerudo's Fortress
// Goron City
// Graveyard
// Haunted Wasteland
// Hyrule Castle
// Hyrule Field
// Kakariko Village
// Kokiri Forest
// Lake Hylia
// Lon Lon Ranch
// Lost Woods
// Market
// Sacred Forest Meadow
// Zora's Domain
// Zora's Fountain
// Zora's River