import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Inicio from './pages/inicio';
import Cursos from './pages/Cursos';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/Acercade';

function App() {
  return ( 
  <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Inicio />} />

        <Route path="cursos" element={<Cursos />} />

        <Route path="contacto" element={<Contacto />} />

        <Route path="acerca" element={<AcercaDe />} />

      </Route>

    </Routes>
  );
}

export default App;