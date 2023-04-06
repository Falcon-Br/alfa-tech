//Componente React
import {Link as LinkScroll} from 'react-scroll'

//style
import './BotaoVolta.css'

function BotaoVolta(){
    return(
        <div className="botao-volta">
            <LinkScroll to="topo" spy={true} smooth={true} offset={0} duration={500}>Subir</LinkScroll>
        </div>
    )
}

export default BotaoVolta