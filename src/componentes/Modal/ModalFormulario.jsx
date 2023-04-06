//React Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

//Components
import UsuarioForm from '../Formulario/UsuarioForm'
import RequisitosForm from '../Formulario/RequisitosForm'
import RevisaoForm from '../Formulario/RevisaoForm'
import Steps from '../Formulario/Steps'

//Styles
import './ModalFormulario.css'
import '../Formulario/Form.css'
import '../Modal/ModalFormulario.css'

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Hooks
import { HookUseForm } from '../Formulario/hooks/HookUseForm'
import { useState } from 'react'

function ModalFormulario({ isOpen, setCloseModal }) {

    const formDataTemplate = {
        name: "",
        cpf_cnpj: "",
        email: "",
        tel: "",
        required: "",
        comment: "",
    }

    const [data, setData] = useState(formDataTemplate)

    const updateFieldHandle = (key, value) => {
        setData((previusStates) => {
            return { ...previusStates, [key]: value }
        })
    }

    const resetModal = () =>{
        notify()
        
        setTimeout(()=>{
            setData(formDataTemplate)
            resetStep()
            setCloseModal()
        }, 3400)
    }

    const notify = ()=>{
        toast.success('Formulário Enviado!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
    }

    const formComponentes = [<UsuarioForm data={data} updateFieldHandle={updateFieldHandle} />, <RequisitosForm data={data} updateFieldHandle={updateFieldHandle} />, <RevisaoForm data={data} />]

    const { currentStep, currentComponent, changeStep, resetStep, isFirstStep, isLastStep } = HookUseForm(formComponentes)

    if (isOpen) {
        return (
            <div className="background-modal">/
                <div className="container-modal">
                    <button className="botao-fechar" onClick={setCloseModal}>X</button>
                    
                    <div className="conteudo-modal">
                        <div className="descricao-modal">
                            <h2>Solicite um orçamento personalizado!</h2>
                            <p>Ficamos feliz que esteja interessado no nossos serviços, utilize o formulário abaixo para enviar a sua proposta.</p>
                        </div>


                        <form className="form-container" onSubmit={(event) => changeStep(currentStep + 1, event)}>
                            <Steps currentStep={currentStep} />
                            <div className="inputs-container">{currentComponent}</div>

                            <div className="actions">
                                {isFirstStep ? ("") : (<button type="button" onClick={() => changeStep(currentStep - 1)}>
                                    <GrFormPrevious />
                                    Voltar
                                </button>)}

                                {isLastStep ? (<button onClick={resetModal} type="button">Enviar
                                    <FiSend />
                                </button>) : (<button type="submit">Avançar
                                    <GrFormNext />
                                </button>)}
                            </div>
                            <ToastContainer/>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default ModalFormulario