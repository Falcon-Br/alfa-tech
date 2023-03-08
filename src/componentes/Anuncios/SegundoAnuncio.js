import React from "react"
import {Link} from 'react-router-dom'
import style from './SegundoAnuncio.module.css'

function SegundoAnuncio(){
    return(
        <section className={style.pAnuncioContainer} id="contato">
            <div className={style.anuncioTamanho}>
                <div className={style.pAnuncioDescricao}>
                    <h2>Mais de 20.000 pessoa confiam na Spark!</h2>
                    <h2> Seja um deles você também!</h2>     
                </div>

                <Link to="/precos">TABELA DE PREÇOS</Link>

            </div>
        </section>
    )
}

export default SegundoAnuncio