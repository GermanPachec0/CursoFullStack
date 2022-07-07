import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Esta es la app de fullstack bootcamp</p>
}

function App() {

  return (
    <div className="App">
      <Mensaje color = 'red' message= 'Estamos Trabajando' />
      <Mensaje color = 'blue' message = 'En un curso'/>
      <Mensaje color = 'green'  message = 'De React'/>
      <Description/>
        <div>
          <p>El resultado es:  </p>
        </div>
    </div>
  );  
}

export default App;
