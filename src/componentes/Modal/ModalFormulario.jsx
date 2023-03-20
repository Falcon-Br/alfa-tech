import Form from '../Formulario/Form'
import './ModalFormulario.css'

function ModalFormulario({isOpen, setCloseModal}){
    if(isOpen){
        return(
            <div className="background-modal">
                <div className="container-modal">
                    <button className="botao-fechar" onClick={setCloseModal}>X</button>
                    <Form/>
                </div>
            </div>
        )
    }

    return null
}

export default ModalFormulario