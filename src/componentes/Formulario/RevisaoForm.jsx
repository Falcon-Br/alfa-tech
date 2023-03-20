import {
    AiOutlineSecurityScan, 
    AiOutlineControl, 
    AiOutlineAudit,AiOutlineAim} from 'react-icons/ai'
import './RevisaoForm.css'

function RevisaoForm({data}){

    const emojiData ={
        seguranca: <AiOutlineSecurityScan/>,
        relatorio: <AiOutlineControl/>,
        painel: <AiOutlineAudit/>,
        rastreio: <AiOutlineAim/>,
    };

    return(
        <div className='revision-container'>

            <div className='revision-description'>
                <h3>Falta pouco!</h3>
                <p>Ficamos feliz pelo o seu contato. Para concluir, clique no botão enviar.</p>
                <h3>Aqui um resumo dos seus dados para o orçamento:</h3>
            </div>

            <p className='revision-data'>
                <span>Nome/Empresa:</span> {data.name}
            </p>

            <p className='revision-data'>
                <span>CPF/CNPJ:</span> {data.cpf_cnpj}
            </p>

            <p className='revision-data'>
                <span>E-mail:</span> {data.email}
            </p>

            <p className='revision-data'>
                <span>Telefone:</span> {data.tel}
            </p>

            <p className='revision-data'>
                <span>Serviço Prioridade:</span> {emojiData[data.required]}
            </p>

            <p className='revision-data'>
                <span>Comentário:</span> {data.comment}
            </p>
        </div>
    )
}

export default RevisaoForm