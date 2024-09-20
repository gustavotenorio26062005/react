import { useState } from 'react'
import './App.css'
import Planetas, { Terra } from './components/Planetas'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div>
        <Planetas/>
        <Terra const descricao = {"Vergil é um personagem fictício da série de videojogos Devil May Cry criada e publicada pela Capcom; introduzido no primeiro Devil May Cry em 2001 como um dos filhos híbridos do cavaleiro demónio Sparda e também chefe de nome Nero Angelo."}
   desc = {{
    tipo: 'hack and slash',
    lancado: '2001',
    feito: 'Hideki Kamiya'}}
></Terra>
      </div>
    </>
  )
}

export default App
