import { useState } from "react";

export function HookUseForm(steps){

    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(index, event){
        if(event) event.preventDefault()

        if(index < 0 || index >= steps.length) return 

        setCurrentStep(index)
        
    }

    function resetStep(){
        setCurrentStep(0)
    }

    return{
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        resetStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1  === steps.length ? true : false,
    }  
}