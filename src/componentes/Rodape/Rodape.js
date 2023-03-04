import LogoEscuro from '../img/logo-icone-escuro.png'

function Rodape(){
    return(
        <section>
            <figure>
                <img src={LogoEscuro} alt="Ícone Logo Escuro"/>
                <h2>Soluções em Hospedagem</h2>
            </figure>
            
            <p>© AlfaTech - Soluções em hospedagem - Todos os direitos reservados</p>

            <div>
                <p>Desenvolvimento por <span>Ádrio Falcão</span></p>
            </div>
        </section>
    )
}

export default Rodape