import Logo from '../img/logo-icone.png'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import './Topo.css'

function TopoHome(){

    return(
        <section className="topo-container" id="topo">

            <figure className="logo-topo">
                <img src={Logo} alt="AlfaTech"/>

                <div className="logo-descricao">
                    <h1>AlfaTech</h1>
                    <figcaption><span>Soluções em Hospedagem</span></figcaption>
                </div>
            </figure>

            <nav className='lista-topo-container'>
                <ul className="lista-topo">
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