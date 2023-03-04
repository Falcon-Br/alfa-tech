import Logo from '../img/logo-icone.png'
import {Link} from 'react-router-dom'
import styles from './TopoHome.module.css'

function TopoHome(){

    return(
        <section className={styles.topoContainer}>

            <figure className={styles.logoTopo}>
                <img src={Logo} alt="AlfaTech"/>
                <h1>AlfaTech</h1>
                <figcaption>Soluções em Hospedagem</figcaption>
            </figure>

            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
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