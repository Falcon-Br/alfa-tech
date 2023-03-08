import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './rotas/Home'
import Rodape from './componentes/Rodape/Rodape'
import DescricaoRodape from './componentes/Rodape/DescricaoRodape'
import TabelaDePrecos from './rotas/TabelaDePrecos.js'

function App() {

  return (
    <BrowserRouter> 

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/precos" element={<TabelaDePrecos/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;