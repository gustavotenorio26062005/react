import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Item ( {nome, temSobrenome} ) {
  /* Utilizando a estrutura condicional
  if (temSobrenome) {
    return <li>{nome} ***</li>
  }
  return null*/

  /* Utilizando operador ternário
  return (
    <li>
      { temSobrenome ? nome + '***' : nome }
    </li>
  )*/

  /* Utilizando o operador lógico and (&&)
    return(
      <li>{nome} {temSobrenome && '***'}</li>
    )
    */
  /* Utilizando uma variável para o JSX condicional */
  let itemConteudo = nome
  if (temSobrenome) {
    itemConteudo = nome + '***'
  }
  return(
    <li>{itemConteudo}</li>
  )
}

function App() {
  return (
    <>
      <div>
        <h1>Renderização</h1>
        <h3>Ana Paula e seus sobrenomes</h3>
        <ul>
          <Item 
            temSobrenome={true}
            nome = "Ana Paula Giancoli"
          />
          <Item 
            temSobrenome={true}
            nome = "Ana Paula Müller"
          />
          <Item 
            temSobrenome={false}
            nome = "Ana Paula"
          />
        </ul>
        
      </div>
      <div className="card">
        <p>As renderizações podem ocorrer de diversas formas:</p>
          <ul>
            <li>Retornando um JSX condicionalmente</li>
            <li>Incluindo JSX condicionalmente</li>
            <li>Utilizando ternário</li>
            <li>Utilizando operador And (&&)</li>
            <li>Atribuindo JSX condicionalemente a uma variável</li>
          </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
