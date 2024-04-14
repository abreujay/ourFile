import { useState } from 'react'
import './App.css'
import HomeComponent from './Components/HomeComponent'
import mainIcon from './assets/cloud.png'
import gitIcon from './assets/github.png'

function App() {

  return (
    <div className="App">
        <header>
          <div className="projectName">
            <h4>
              OurFile
            </h4>
          </div>
          <div className="logo">
            <img src={mainIcon} alt="Main Icon" />
          </div>
        </header>
        <main>
          <HomeComponent/>
        </main>
        <footer>
          <h5>
            Thanks for use! ;)
          </h5>
          <div className="mylinks">
            <a href="https://github.com/abreujay"><img src={gitIcon} alt="myGit" /></a>
          </div>
        </footer>
    </div>
  )
}

export default App
