import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoContador from './img/logo.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
      setNumClics(numClics + 1); 
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  const restarUno = () => {
    setNumClics(numClics - 1);
  }


  return (
 
 <div className='App'>
    <div className='logo-contenedor'>
      <img
        className='logo'
        src={logoContador}
        alt='logo de contador de clics' />

    </div>


  <div className='contenedor-principal'>

    <Contador 
    numClics={numClics} 
    />

    <Boton
    
    texto="Clic"
    esBotonDeClic={true}
    manejarClic={manejarClic}
    />

    
    <Boton 

    texto="Restar 1"
    esBotonDeClic={false}
    manejarClic={restarUno}
    />

    
      <Boton 

      texto="Reiniciar"
      esBotonDeClic={false}
      manejarClic={reiniciarContador}
      />
      
  </div>
  
    <div className='texto-final'>
      <h1>ESPERO TE HAYA GUSTADO! PASATE POR MI<a href="https://github.com/JeremiasPica" target='blank'> GITHUB</a> </h1>
    </div>

</div>



  )
};

export default App;
