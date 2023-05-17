import React from 'react'

function Menu({items}) {
  return (
    <div className="menu">
      {
       items.map((menuItem)=>{
        const {id,title,img ,desc} = menuItem
        return(
            <article className="box">
                <div className="intro">
                <img className="img" src={img}/>
            
                <h4>{title}</h4>
                </div>
                    <p className="para">{desc}</p>
                
            </article>
        )
       })   
      }
    </div>
  )
}

export default Menu
