//Style
import styled from "styled-components"

const DarkModeButton = styled.button`

    border-radius: 5px;

`
const Toogle = ({toogleTheme}) =>{
   return(
     <DarkModeButton onClick={toogleTheme}>
        Mudar o tema
    </DarkModeButton>
   )
}

export default Toogle