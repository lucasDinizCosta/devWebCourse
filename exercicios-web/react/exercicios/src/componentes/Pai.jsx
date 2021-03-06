import React from "react";
import {childrenWithProps} from '../utils/utils'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}

            {/* '...props' => Todas as propriedades vindas do pai vão para o filho */}
            {/* <Filho {...props} /> */}
            {/* <Filho {...props} nome="Carla" /> */}
            {/* props.children */}
            {childrenWithProps(props)}
        </ul>
    </div>