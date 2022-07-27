import "./App.css";
import FirstComp from "./Component/FirstComp";
import SecComp from "./Component/SecComp";
import FourthComp from "./Component/FourthComp";

// props, state
function App() {
  
  return (
    <div className="App">
      <FirstComp />
      <SecComp />
      <FourthComp/>
    </div>
  );
}

export default App;
