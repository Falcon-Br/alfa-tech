import {AiOutlineSecurityScan, AiOutlineControl, AiOutlineAudit,AiOutlineAim} from 'react-icons/ai'
import './Form.css'
import './RequisitosForm.css'

function RequisitosForm({data, updateFieldHandle}) {
    return (
        <div className="req-form">
            <label className='form-control label'>Selecione a sua prioridade de Serviço abaixo:</label>
            <div className="form-control req-container">
                <label className="radio">
                    <input type="radio" value="seguranca" name="prioridades" required checked={data.required === "seguranca"} onChange={(event)=>{
                    updateFieldHandle ("required", event.target.value)
                }}/>
                    <AiOutlineSecurityScan/>
                    <p>Segurança</p>
                </label>

                <label className="radio">
                    <input type="radio" value="relatorio" name="prioridades" required checked={data.required === "relatorio"} onChange={(event)=>{
                    updateFieldHandle ("required", event.target.value)
                }}/>
                    <AiOutlineAudit/>
                    <p>Relatórios</p>
                </label>

                <label className="radio">
                    <input type="radio" value="painel" name="prioridades" required checked={data.required === "painel"} onChange={(event)=>{
                    updateFieldHandle ("required", event.target.value)
                }}/>
                    <AiOutlineControl/>
                    <p>Painel de Controle</p>
                </label>

                <label className="radio">
                    <input type="radio" value="rastreio" name="prioridades" required checked={data.required === "rastreio"} onChange={(event)=>{
                    updateFieldHandle ("required", event.target.value)
                }}/>
                    <AiOutlineAim/>
                    <p>Rastreio</p>
                </label>
            </div>

            <div className="form-control comment">
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" id="comment" placeholder="Detalhe a sua proposta." required value={data.comment || ""} onChange={(event)=>{
                    updateFieldHandle ("comment", event.target.value)
                }}></textarea>
            </div>
        </div>
    )
}

export default RequisitosForm