import LogoEscuro from '../img/logo-icone-escuro.png'
import {Link as LinkRouter} from 'react-router-dom'
import * as Scroll from 'react-scroll';
import style from './Topo.module.css'
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
        <section className={style.topoContainerTabela}>

            <div className={style.topoContainerLogoTabela}>
                <figure className={style.logoTopo}>
                    <img src={LogoEscuro} alt="AlfaTech"/>

                    <div className={style.logoDescricao}>
                        <h1>AlfaTech</h1>
                        <figcaption><span className={style.logoDescricaoTabela}>Soluções em Hospedagem</span></figcaption>
                    </div>
                </figure>

                <nav className={style.listaTopoContainer}>
                    <ul className={style.listaTopoTabela}>
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