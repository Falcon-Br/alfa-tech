//Componentes
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UsuarioForm from './UsuarioForm'
import RequisitosForm from './RequisitosForm'
import RevisaoForm from './RevisaoForm'
import Steps from './Steps'
import './Form.css'
import '../Modal/ModalFormulario.css'

//Hooks
import { HookUseForm } from './hooks/HookUseForm'
import { useState } from 'react'

function Formulario() {

    const formDataTemplate = {
        name: "",
        cpf_cnpj: "",
        email: "",
        tel: "",
        required: "",
        comment: "",
    }
    
    const [data, setData] = useState(formDataTemplate)

    const updateFieldHandle = (key, value) =>{
        setData((previusStates)=>{
            return {...previusStates, [key]: value}
        })
    }

    const formComponentes = [<UsuarioForm data={data} updateFieldHandle={updateFieldHandle} />, <RequisitosForm data={data} updateFieldHandle={updateFieldHandle} />, <RevisaoForm data={data} />]

    const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = HookUseForm(formComponentes)

    return (
        <div>
            <div className="descricao-modal">
                <h2>Solicite um orçamento personalizado!</h2>
                <p>Ficamos feliz que esteja interessado no nossos serviços, utilize o formulário abaixo para enviar a sua proposta.</p>
            </div>


            <form className="form-container" onSubmit={(event) => changeStep(currentStep + 1, event)}>
                <Steps currentStep={currentStep}/>
                <div className="inputs-container">{currentComponent}</div>

                <div className="actions">
                    {isFirstStep ? ("") : (<button type="button" onClick={() => changeStep(currentStep - 1)}>
                        <GrFormPrevious />
                        Voltar
                    </button>)}

                    {isLastStep ? (<button type="button">Enviar
                        <FiSend />
                    </button>) : (<button type="submit">Avançar
                        <GrFormNext />
                    </button>)}
                </div>

            </form>
        </div>

    )
}

export default Formulario