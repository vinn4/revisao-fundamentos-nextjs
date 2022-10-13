import Layout from "../components/Layout"

export default function Jsx(){
    const titulo = <h1>JSX é um Conceito Central</h1>

    function Subtitulo() {
        return <h2>{'Muito Legal'.toLocaleUpperCase()}</h2>
        
    }

    return(
        <Layout titulo="Entendo o JSX">
        <div>
            {titulo}
            {Subtitulo()}
            <p>
                {JSON.stringify({nome: 'Vinicius', idade: 30})}
            </p>
        </div>
        </Layout>
    )
}