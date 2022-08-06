import "./App.css";
import ServiseList from "./components/ServiseList";
import ServiseForm from "./components/ServiseForm";
import ServiseSeach from "./components/ServiseSeach";

function App() {
  return (
    <div className="App">
      <ServiseForm />
      <ServiseSeach />
      <ServiseList />
      
    </div>
  );
}

export default App;
