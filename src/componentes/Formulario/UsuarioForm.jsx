import './Form.css'

function UsuarioForm({data, updateFieldHandle}){
    return(
        <>
            <div className="form-control">
                <label htmlFor="name">Nome ou Nome Empresa:</label>
                <input type="text" name="text" id="name" placeholder="Digite o nome" required value={data.name || ""} onChange={(event)=>{
                    updateFieldHandle ("name", event.target.value)
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="cpf-cnpj">CPF ou CNPJ:</label>
                <input type="text" name="cpf-cnpj" id="cpf-cnpj" placeholder="Digite o seu CPF ou CNPJ" required value={data.cpf_cnpj || ""} onChange={(event)=>{
                    updateFieldHandle ("cpf_cnpj", event.target.value)
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Digite o seu E-mail" required value={data.email || ""} onChange={(event)=>{
                    updateFieldHandle ("email", event.target.value)
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="tel">Telefone</label>
                <input type="tel" name="tel" id="tel" placeholder="Digite o seu contato"  required value={data.tel || ""} onChange={(event)=>{
                    updateFieldHandle ("tel", event.target.value)
                }}/>
            </div>
        </>
    )
}

export default UsuarioForm