import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){
    // Sem o destructuring para o array para a hook de estado do React
    // const state = useState(0)
    // let numero = state[0]
    // let alterarNumero = state[1]

    // function incrementar(){
    //     alterarNumero(numero + 1)
    // }

    // Com o destructuring para o array para a hook de estado do React
    const [numero, setNumero] = useState(0) // React Hooks
    
    function incrementar(){
        setNumero(numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}