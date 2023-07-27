import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import { useState } from 'react';
import ReposList from './components/ReposList';

function App() {
    const [formularioVisivel, setFormularioVisivel] = useState(true)

    return(
        <>
            <Perfil nome="Tallygado" endereco="https://github.com/TallysonFreitas.png" />
            <ReposList/>

            {/* {formularioVisivel && (
                <Formulario/>
            )}

            <button onClick={()=>{setFormularioVisivel(!formularioVisivel)}} type="button">toggle form</button> */}
        </>
    )
}

export default App