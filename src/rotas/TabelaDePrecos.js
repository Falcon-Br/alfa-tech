import Tabela from '../componentes/Tabela/Tabela'
import TopoTabela from '../componentes/Topo/TopoTabela'

function TabelaDePrecos(){
    return(
    <>
        <header>
            <TopoTabela/>
        </header>

        <Tabela/>
    </>
    )
}

export default TabelaDePrecos