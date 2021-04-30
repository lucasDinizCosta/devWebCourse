import React from 'react'
import ReactDOM from 'react-dom'

// O nome dos componentes deve começar com letra maiuscula
// O nome do arquivo nao precisa ser

// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
// import Multi, {BoaNoite} from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


// ReactDOM.render(<BomDia nome="Guilherme" idade={10}/>, document.getElementById('root'))
ReactDOM.render(
    // <div>
    //     <Multi.BoaTarde nome="Ana" />
    //     <BoaNoite nome="Bia" />
    // </div>
    <div>
        {/* <Saudacao tipo="Bom dia" nome="Joao"/> */}
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))
