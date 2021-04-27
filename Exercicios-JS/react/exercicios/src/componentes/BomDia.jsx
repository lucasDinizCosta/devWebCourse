// import React, {Fragment} from 'react'
import React from 'react'

// Para trabalhar com array neste modelo, no react é necessario adicionar 
// key pra cada elemento
export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]   

// export default props => 
//     // Pode-se utilizar uma div pra comportar os elementos ou React.Fragment
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </Fragment>

// export default props => 
//     // Pode-se utilizar uma div pra comportar os elementos ou React.Fragment
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>
