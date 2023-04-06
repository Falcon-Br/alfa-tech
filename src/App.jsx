//Componentes React
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './componentes/theme/GlobalStyle';

//Componentes
import Home from './rotas/Home'
import TabelaDePrecos from './rotas/TabelaDePrecos.jsx'

//Hook
import HookTheme from './componentes/theme/HookTheme';

//Style
import DarkModeButton from './componentes/theme/DarkModeButton';


function App() {

  const {currentTheme, switchTheme} = HookTheme()

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <DarkModeButton onClick={switchTheme}>Mudar Tema</DarkModeButton>
      
      <BrowserRouter> 
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/precos" element={<TabelaDePrecos/>}/>
          </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;