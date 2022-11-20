import Conteudo from "./Conteudo"
import Menu from "./Menu"
import Topo from "./Topo"

//Componente = funcao que retorna um JSX(Layout)
export default function App() {
    return (
        <>
            <Topo/>
            <div class="row">
                <Menu/>
                <Conteudo/>
            </div>
        </>
    )
}