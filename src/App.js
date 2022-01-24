import './App.css';
import Counter from "./components/Counter"


function App() {
  return (
    <div className="App">
      <Counter />
      <Counter message = "alert"/>
    </div>
  );
}

export default App;
