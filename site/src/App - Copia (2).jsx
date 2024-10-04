import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const cientistas = [
    {id:0,
    nome:'Crola Katherine Jonhson: Matemático'},
    {id:1,
    nome:'Mario José Molina-Paquel Henriquez: Químico'},
    {id:2,
    nome:'Mohammad Abdus Salam: Físico'},
    {id: 3,
    nome:'Percy Lavon Julian: Químico'},
    {id:4,
      nome:'Subrahmanyan Chandrasekhar: Astrofísico'}
    ]
    

  //arrow functions
  const listaItens = cientistas.map(cientistas => <li key={cientistas.id}>{cientistas.nome}</li>)

  function teste(id) {
    const cientista = cientistas.find(c => c.id === id);
    if (cientista) {
      return <li>{cientista.id+1} + {cientista.nome}</li>;
    }
    return null;
  }
  

  return (
    <>
        <ul>
          {listaItens}
          {teste(1)}
        </ul> 
    </>
  )
  }

export default App;
