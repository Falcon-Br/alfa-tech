import Logo from '../img/logo-icone.png'
import {Link} from 'react-router-dom'
import style from './Topo.module.css'

function TopoTabela(){

    return(
        <section className={style.topoContainer}>

            <figure className={style.logoTopo}>
                <img src={Logo} alt="AlfaTech"/>

                <div className={style.logoDescricao}>
                    <h1>AlfaTech</h1>
                    <figcaption><span>Soluções em Hospedagem</span></figcaption>
                </div>
            </figure>

            <nav className={style.listaTopoContainer}>
                <ul className={style.listaTopo}>
                    <li><Link to="/">HOME</Link></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default TopoTabela