import Banner from '../componentes/Banner/Banner'
import PrimeiroAnuncio from '../componentes/Anuncios/PrimeiroAnuncio';
import SegundoAnuncio from '../componentes/Anuncios/SegundoAnuncio';
import Informacoes from '../componentes/informacoes/Informacoes';
import Planos from '../componentes/Planos/Planos'
import Topo from '../componentes/Topo/TopoHome';
import BotaoVolta from '../componentes/BotaoVolta.js/BotaoVolta';
import Rodape from '../componentes/Rodape/Rodape';
import DescricaoRodape from '../componentes/Rodape/DescricaoRodape';

function Home(){
    return(
    <>
        <header>
            <Topo/>
        </header>

        <main>
            <Banner/>
            <PrimeiroAnuncio/>
            <Informacoes/>
            <Planos/>
            <SegundoAnuncio/>
            <BotaoVolta/>
        </main>

        <footer>
            <Rodape/>
            <DescricaoRodape/>
        </footer>
    </>
    )
}

export default Home;