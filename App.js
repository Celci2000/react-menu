import React ,{useState} from 'react'
import items from './data.js'
import Categories from './Categories.js'
import Menu from './Menu.js'
import './App.css'

function App(){

  const [menu , setMenu]= useState(items)

 
  function filterItems(c){
    if(c==='all'){
      setMenu(items)
      return
    }
    const newItem= items.filter((e)=>e.category===c)
    setMenu(newItem)
    console.log(menu)
    console.log(newItem)
  }
  return (
    <main>
      <section className="menu-section">
        <div className="title"> 
        <h2>Our menu</h2> 
        <div className="underline"></div> 
        </div>
        <Categories filterItem={filterItems}/>
        <Menu items={menu}/>
      </section>
    </main>
    
  )
}
export default App;
