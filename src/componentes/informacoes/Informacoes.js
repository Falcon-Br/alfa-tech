import React from 'react'
import IconeEngrenagem from '../img/icone-engrenagens.png'
import IconeCloud from '../img/cloud-icone.png'
import IconeSuporte from '../img/icone-suporte.png'

function Informacoes(){
    return(
        <section id="informacoes">
            <h2>Existem diversos serviços de hospedagem de sites. Porque você deve nos escolher?</h2>

            <div>
                <img src={IconeEngrenagem} alt="Ícone Engrenagem"/>
                <h3>Fácil de Configurar</h3>
                <p>Facilmente configurável em plataformas CMS populares - Wordpress, Joomia ...</p>
            </div>

            <div>
                <img src={IconeCloud} alt="Ícone Cloud"/>
                <h3>Serviços 100% Online</h3>
                <p>Serviços que operam 100% do tempo para manter o seu site online...</p>
            </div>

            <div>
                <img src={IconeSuporte} alt="Ícone Suporte"/>
                <h3>Suporte 24/7</h3>
                <p>Suporte altamente treinado e especializado em soluções de Cloud...</p>
            </div>

        </section>
    )
}

export default Informacoes