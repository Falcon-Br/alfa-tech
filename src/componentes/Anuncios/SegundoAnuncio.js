import React from "react"
import {Link} from 'react-router-dom'

function SegundoAnuncio(){
    return(
        <section id="contato">
            <h2>Mais de 20.000 pessoa confiam na Spark! Seja um deles você também!</h2>

            <Link to="/precos">TABELA DE PREÇOS</Link>
        </section>
    )
}

export default SegundoAnuncio