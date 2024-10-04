import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {cientistas} from './assets/data'
import { getImageUrl } from './components/utils'

function App() {

    const listaItens = cientistas.map(cientista=>
    <li key={cientistas.id}>
      <img src={getImageUrl(cientista)} alt={cientista.name} className='img' />
      <p>
      <strong>
      {cientista.name} 
      </strong>
      </p>
      <p>
      {" "+cientista.profession+ ""}  conhecido por {cientista.accomplishment}
    </p>
    </li>
    )
  return (
    <>
      <div>
        <ul>
          {listaItens}
        </ul>
      </div>
    </>
  )
  }

export default App;
