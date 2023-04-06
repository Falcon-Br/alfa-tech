//Componente React
import { useState } from "react"

//Componente
import ModalFormulario from '../Modal/ModalFormulario'

//Style
import './SegundoAnuncio.css'

function SegundoAnuncio(){

    const [openModal, setOpenModal] = useState()

    function closeModal(){
        setOpenModal(!openModal)
    }

    return(
        <section className="pAnunci-container" id="contato">
            <div className="anuncio-tamanho">
                <div className="pAnuncio-descricao">
                    <h2>Quer algum plano mais personalizado?</h2>
                    <h2>Entre em contato conosco!</h2>     
                </div>

                <button className="botao" onClick={()=>{setOpenModal(true)}} >SOLICITAR ORÇAMENTO</button>

                <ModalFormulario isOpen={openModal} setCloseModal={closeModal}></ModalFormulario>

            </div>
        </section>
    )
}

export default SegundoAnuncio