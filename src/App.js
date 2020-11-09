
import React, { Component } from 'react'
import MainMenu from './MainMenu'
import Reviews from './Reviews'
import Articles from './Articles'


class App extends Component{

  render() {
    return (
      <div>
        <h1>Desserts</h1>
        <MainMenu/>
        
        <Reviews/>

        <Articles/>

      


      </div>
      
    
    )
  }    
}


export default App