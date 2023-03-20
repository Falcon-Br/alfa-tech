import LogoEscuro from '../img/logo-icone-escuro.png'
import {Link as LinkRouter} from 'react-router-dom'
import * as Scroll from 'react-scroll';
import './Topo.css'
import { useNavigate } from 'react-router-dom';

function TopoTabela(){
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const informacoesScroll = async () => {
    await navigate('/');
    await scroller.scrollTo('info', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -90
    });
  };

  const planosScroll = async () => {
    await navigate('/');
    await scroller.scrollTo('planos', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0
    });
  };

  const contatoScroll = async () => {
    await navigate('/');
    await scroller.scrollTo('contato', {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 0
    });
  };

    return(
        <section className="topo-container-tabela">

            <div className="topo-container-logo-tabela">
                <figure className="logo-topo">
                    <img src={LogoEscuro} alt="AlfaTech"/>

                    <div className="logo-descricao">
                        <h1>AlfaTech</h1>
                        <figcaption><span className="logo-descricao-tabela">Soluções em Hospedagem</span></figcaption>
                    </div>
                </figure>

                <nav className="lista-topo-container">
                    <ul className="lista-topo-tabela">
                        <li>
                            <LinkRouter to="/">HOME</LinkRouter>
                        </li>

                        <li>
                            <a onClick={informacoesScroll}>INFORMAÇÕES</a>
                        </li>

                        <li>
                            <a onClick={planosScroll}>PLANOS</a>
                        </li>
      
                        <li>
                            <a onClick={contatoScroll}>CONTATO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default TopoTabela