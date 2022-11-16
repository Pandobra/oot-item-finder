import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const Completed = ({checks, completedArray, func}) => {
  return (
    <div>
      <nav className="links">
      <Link to="/">Home</Link>
      </nav>
    <div className="content">{completedArray.map((locs, index) => (
      <h2
      key={index}>
        <img src={ (checks[locs]["img"])} className={"pic"} alt="" />
        <div>
         {checks[locs]["title"]} 
         <h4 className="contents">{checks[locs]["content"]}</h4>
        </div>
        <div className="btn">
          <button
           onClick={() => {func(locs)}}>
            Incomplete
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

export default Completed