import './App.css';
import Counter from "./components/Counter"


function App() {
  return (
    <div className="App">
      <Counter />                       // First Counter
      <Counter message = "alert"/>      // Second Counter which displays the alert
    </div>
  );
}

export default App;
