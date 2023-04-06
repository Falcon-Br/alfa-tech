//Style
import ImagemBanner from '../img/imagem-banner.png'
import './Banner.css'

function Banner(){
    return(
        <section className="banner-container" id="banner">
            <article className="banner-descricao">        
                <p>Simples - Fácil de usar - 10x mais rápido!</p>
                <h2>O melhor serviço de hospedagem na web para o seu site.</h2>
                <p>Obtenha a melhor velocidade para o seu site. Não perca mais clientes por causa de lentidão na sua hospedagem.</p>
            </article>

            <figure>
                <img src={ImagemBanner}  alt="Imagem do Banner"/>
            </figure>
        </section>
    )
}

export default Banner