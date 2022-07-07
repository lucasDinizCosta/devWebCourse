export default function Cabecalho(props){
    // props é somente leitura, para editar, é necessario trabalhar com estado
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}