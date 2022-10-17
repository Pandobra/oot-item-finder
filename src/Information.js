import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const Information = ({ checks, func, completedArray, locationArray }) => {
const check = Object.keys(checks);
  return (
  <div>
    <nav className="links">
        <Link to="/completed">Completed</Link>
    </nav>
    <div className='content'>{check.map((locs, index) => (
        <h2
        key={index}
        style={{ display: checks[locs]["show"] && (completedArray.indexOf(locs) === -1) && (locationArray.indexOf(checks[locs]["location"]) !== -1 )? ('block') : 'none'}}//Requires show and to not be in the completed array to display on the page
        > 
          <img src={checks[locs]["img"]} className="pic" alt=""/>
          <div>
           {(checks[locs]["title"])} 
           <h4 className="contents">{checks[locs]["content"]}</h4>
          </div>
          <div className="btn">
          <button
           onClick={() => {func(locs)}}>
            Complete
          </button>
           </div>
        </h2>
    )
    )
    }
    </div>
    </div>
  )
}
