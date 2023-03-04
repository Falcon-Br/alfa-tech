import React from "react"
import {Link} from 'react-router-dom'

function PrimeiroAnuncio(){
    return(
        <section>
            <h2>Hospede o seu site por apenas R$29 por mês.</h2>
            <p>Também temos planos gratuitos. Adquira já o seu.</p>
            
            <Link to="/precos">TABELA DE PREÇOS</Link>
        </section>
    )
}

export default PrimeiroAnuncio