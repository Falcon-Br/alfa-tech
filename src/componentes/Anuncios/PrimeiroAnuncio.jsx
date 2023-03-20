import React from "react"
import {Link} from 'react-router-dom'
import  './PrimeiroAnuncio.css'

function PrimeiroAnuncio(){
    return(
        <section className="pAnuncio-container">
            <div className="anuncio-tamanho">
                <div className="pAnuncio-descricao">
                    <h2>Hospede o seu site por apenas R$29 por mês.</h2>
                    <p>Também temos planos gratuitos. Adquira já o seu.</p>
                </div>
                
                <Link to="/precos">TABELA DE PREÇOS</Link>

            </div>
        </section>
    )
}

export default PrimeiroAnuncio