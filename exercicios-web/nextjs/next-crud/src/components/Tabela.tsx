import Cliente from "../core/Cliente";

// Propriedades esperadas para o componente
interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps){
    /**
     * 
     * Lidando com o Erro: "next-dev.js?3515:24 Warning: validateDOMNesting(...): <tr> 
     * cannot appear as a child of <table>. Add a <tbody>, <thead> or <tfoot> to your code 
     * to match the DOM tree generated by the browser."
     * 
     * Não se pode adicionar tr diretamente na table, mas sim, acaba precisando de thead, 
     * tbody ou tfoot por causa da DOM
     */

    function renderizarCabecalho(){
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados(){
        return  props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
            
        })
                
    }

    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}