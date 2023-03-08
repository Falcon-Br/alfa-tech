import Logo from '../img/logo-icone.png'
import {Link} from 'react-router-dom'
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
                    <li><a href="#informacoes">INFORMACÕES</a></li>
                    <li><a href="#planos">PLANOS</a></li>
                    <li><Link to="/precos">PREÇOS</Link></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default TopoHome