//Style
import styled from "styled-components";

const DarkModeButton = styled.button`
position: fixed;
right: 5%;
bottom: 3%;

width: 130px;
height: 50px;
background-color: var(--cor-azul);
border-radius: 5px;
border: 2px solid var(--cor-cinza);
color: var(--cor-branco);
font-weight: bold;
cursor: pointer;
transition: .3s;

&:hover{
  background-color: var(--cor-azul-escuro);
  font-size: 1rem;
}
`
export default DarkModeButton