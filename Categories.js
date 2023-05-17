import React from 'react'

function Categories({filterItem}) {
  return (
    <div className="btn-container">
          <button className="all" onClick={()=>{
        filterItem('all')
        }}>all</button>
     <button className="breakfast" onClick={()=>{
        filterItem('breakfast')
        }}>breakfast</button>
       <button className="lunch" onClick={()=>{
        filterItem('lunch')
        }}>lunch</button>
          <button className="shakes" onClick={()=>{
        filterItem('shakes')
        }}>shakes</button>
    </div>
  )
}

export default Categories
