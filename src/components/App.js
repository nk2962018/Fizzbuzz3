import Fizzbuzz from "../../src/components/Fizzbuzz";
import "../../src/styles/App.css";

function App() {
  return (
    <div className="App" data-testid="parent">
      <div className="heading-title" data-testid="header">The Fizzbuzz Program</div>
      <Fizzbuzz/>
    </div>
  );
}

export default App;
