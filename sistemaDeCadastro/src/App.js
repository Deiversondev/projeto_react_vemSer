import './App.css';
import List from './components/list/List';
import Formulario from './components/fomulario/Formulario';

function App() {
  return (
    <div className="container">
      <Formulario />
      <List />
      {/* <div><h1>Formulário</h1></div>
      <div><h1>Editar Formulário</h1></div>
      <div><h1>Listar Usuários</h1></div> */}
    </div>
  )}

export default App;