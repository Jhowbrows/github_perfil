import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');


  return (
    <>
      <div className="contentCenter">
        <input className="inputStyle" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digíte o nome de usúario Github" />

        {nomeUsuario.length > 4 && (
          <>
            <Perfil nomeUsurario={nomeUsuario} />
            <ReposList nomeUsuario={nomeUsuario}/>
          </>
        )}
      </div>

    
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
