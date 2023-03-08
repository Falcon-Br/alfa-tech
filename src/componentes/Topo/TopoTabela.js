import LogoEscuro from '../img/logo-icone-escuro.png'
import {Link} from 'react-router-dom'
import style from './Topo.module.css'

function TopoTabela(){

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
                        <li><Link to="/">HOME</Link></li>
                        <li><a href="#contato">CONTATO</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default TopoTabela