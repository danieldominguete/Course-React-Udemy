import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'


ReactDOM.render(
   <div id="app">
      <Primeiro></Primeiro>
      <ComParametro titulo="Segundo" subtitulo="Que legal" dinheiro={2.4}/>
      <ComParametro titulo="Terceiro" subtitulo="Uau" dinheiro={110.4}/>
      <Fragmento />
   </div>,
   document.getElementById('root')
)