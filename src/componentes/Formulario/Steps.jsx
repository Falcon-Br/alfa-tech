import {AiOutlineUser, AiOutlineProfile} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import './Steps.css'

function Steps({currentStep}){
    return(
        <div className="steps">
           <div className="step active">
            <AiOutlineUser/>
                <p>Dados</p>
           </div>

           <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineProfile/>
                <p>Requisitos</p>
           </div>

           <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FiSend/>
                <p>Revisão</p>
           </div>
        </div>
    )
}

export default Steps