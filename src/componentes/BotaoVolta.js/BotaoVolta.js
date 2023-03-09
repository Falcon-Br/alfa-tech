import style from './BotaoVolta.module.css'
import {Link as LinkScroll} from 'react-scroll'

function BotaoVolta(){
    return(
        <div className={style.botaoVolta}>
            <LinkScroll to="topo" spy={true} smooth={true} offset={0} duration={500}>Subir</LinkScroll>
        </div>
    )
}

export default BotaoVolta