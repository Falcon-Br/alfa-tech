import React from "react"
import {Link} from 'react-router-dom'
import style from './PrimeiroAnuncio.module.css'

function PrimeiroAnuncio(){
    return(
        <section className={style.pAnuncioContainer}>
            <div className={style.anuncioTamanho}>
                <div className={style.pAnuncioDescricao}>
                    <h2>Hospede o seu site por apenas R$29 por mês.</h2>
                    <p>Também temos planos gratuitos. Adquira já o seu.</p>
                </div>
                
                <Link to="/precos">TABELA DE PREÇOS</Link>

            </div>
        </section>
    )
}

export default PrimeiroAnuncio