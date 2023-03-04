import Logo from '../img/logo-icone.png'
import {Link} from 'react-router-dom'

function TopoTabela(){

    return(
        <section>

            <figure>
                <img src={Logo} alt="AlfaTech"/>
                <h1>AlfaTech</h1>
                <figcaption>Soluções em Hospedagem</figcaption>
            </figure>

            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default TopoTabela