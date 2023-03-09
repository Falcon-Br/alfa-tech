import Logo from '../img/logo-icone.png'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import style from './Topo.module.css'

function TopoHome(){

    return(
        <section className={style.topoContainer} id="topo">

            <figure className={style.logoTopo}>
                <img src={Logo} alt="AlfaTech"/>

                <div className={style.logoDescricao}>
                    <h1>AlfaTech</h1>
                    <figcaption><span>Soluções em Hospedagem</span></figcaption>
                </div>
            </figure>

            <nav className={style.listaTopoContainer}>
                <ul className={style.listaTopo}>
                    <li>
                        <LinkScroll to="info" spy={true} smooth={true} offset={-90} duration={500}>INFORMAÇÕES</LinkScroll>
                    </li>

                    <li>
                        <LinkScroll to="planos" spy={true} smooth={true} offset={0} duration={500}>PLANOS</LinkScroll>
                    </li>

                    <li>
                        <LinkRouter to="/precos">PREÇOS</LinkRouter>
                    </li>

                    <li>
                        <LinkScroll to="contato" spy={true} smooth={true} offset={50} duration={500}>CONTATO</LinkScroll>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default TopoHome