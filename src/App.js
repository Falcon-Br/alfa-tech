import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Rodape from './componentes/Rodape/Rodape';
import Home from './rotas/Home'
import TabelaDePrecos from './rotas/TabelaDePrecos.js'

function App() {

  return (
    <BrowserRouter>

      <main>        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/precos" element={<TabelaDePrecos/>}/>
        </Routes>
      </main>

      <footer>
        <Rodape/>
      </footer>

    </BrowserRouter>
  );
}

export default App;