import Layout from "../components/Layout";

// Solucao: O método 'getStaticProps' garante a consistencia nas propriedades 
// executadas no javascript entre cliente/servidor, ou seja, para usar o random
// basta passar como props e usar o atributo.
// Verificação(Vai gerar sempre o mesmo numero pois é executado uma unica vez no servidor):
//  - npm run build
//  - npm start
export async function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    
    return (
        // Problema: O javascript vai ser executado tanto no servidor quanto no cliente
        // causando uma inconsistência no valor, pois será diferente nos dois
        // <Layout titulo="Conteúdo Estático">
        //     <div>{Math.random()}</div>
        // </Layout>

        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}