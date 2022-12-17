import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }
  return (
    <div className="App">
      <p>Holle</p>
      <Greet name="Roshan" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
