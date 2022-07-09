import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(){
    // Obtendo informações do Backend - Utilizaremos o fetch, contudo, 
    // poderia usar o Axios

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    // Jeito 1 de se fazer -- usando promises
    // function obterCliente(){
    //     fetch(`http://localhost:3000/api/clientes/${codigo}`) // Retorna uma promise
    //         .then(resp => resp.json())
    //         .then(dados => setCliente(dados))
    // }

    // Jeito 2 usando ASYNC -- Tratando como se fosse sincrono o código
    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`) // Retorna uma promise
        const dados = await resp.json()
        setCliente(dados)
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}