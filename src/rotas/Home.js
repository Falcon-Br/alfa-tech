import Banner from '../componentes/Banner/Banner'
import PrimeiroAnuncio from '../componentes/Anuncios/PrimeiroAnuncio';
import SegundoAnuncio from '../componentes/Anuncios/SegundoAnuncio';
import Informacoes from '../componentes/informacoes/Informacoes';
import Planos from '../componentes/Planos/Planos'
import Topo from '../componentes/Topo/TopoHome';
import BotaoVolta from '../componentes/BotaoVolta.js/BotaoVolta';

function Home(){
    return(
    <>
        <header>
            <Topo/>
        </header>

        <Banner/>
        <PrimeiroAnuncio/>
        <Informacoes/>
        <Planos/>
        <SegundoAnuncio/>
        <BotaoVolta/>
        
    </>
    )
}

export default Home;