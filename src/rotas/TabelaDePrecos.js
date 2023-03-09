import DescricaoRodape from '../componentes/Rodape/DescricaoRodape'
import RodapeTabela from '../componentes/Rodape/RodapeTabela'
import Tabela from '../componentes/Tabela/Tabela'
import TopoTabela from '../componentes/Topo/TopoTabela'

function TabelaDePrecos(){
    return(
    <>
        <header>

            <TopoTabela/>
        </header>

        <main>
            <Tabela/>   
        </main>

        <footer>
            <RodapeTabela/>
            <DescricaoRodape/>
        </footer>
    </>
    )
}

export default TabelaDePrecos