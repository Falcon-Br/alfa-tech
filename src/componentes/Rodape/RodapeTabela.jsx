//Style
import LogoEscuro from '../img/logo-icone-escuro.png'
import './Rodape.css'

function RodapeTabela(){
    return(
        <section className="rodape-container-tabela">

            <figure className="logo-rodape">
                <img src={LogoEscuro} alt="Ícone Logo Escuro"/>          

                <div className="logo-descricao">
                    <h1>AlfaTech</h1>
                    <figcaption><span>Soluções em Hospedagem</span>
                    </figcaption>
                </div>
            </figure>

            <div className="sub-descricao-rodape" >
                <p>© AlfaTech - Soluções em hospedagem - Todos os direitos reservados</p>
            </div>
        </section>
    )
}

export default RodapeTabela