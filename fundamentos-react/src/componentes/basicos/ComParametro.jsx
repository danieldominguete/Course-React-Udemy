import React from 'react'

export default function(props){
   console.log(props)
   return (
      <div>
         <h2>{props.titulo}</h2>
         <h3>Este é o subtítulo: {props.subtitulo} com o valor de {props.dinheiro}</h3>
      </div>
   )
}