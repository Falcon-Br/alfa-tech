import LogoEscuro from '../img/logo-icone-escuro.png'
import style from './Rodape.module.css'

function Rodape(){
    return(
        <section className={style.rodapeContainer}>

            <figure className={style.logoRodape}>
                <img src={LogoEscuro} alt="Ícone Logo Escuro"/>          

                <div className={style.logoDescricao}>
                    <h1>AlfaTech</h1>
                    <figcaption><span>Soluções em Hospedagem</span>
                    </figcaption>
                </div>
            </figure>

            <div className={style.subDescricaoRodape} >
                <p>© AlfaTech - Soluções em hospedagem - Todos os direitos reservados</p>
            </div>
            
        </section>
    )
}

export default Rodape