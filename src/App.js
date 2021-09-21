import './App.css';
import DropDownTimes from "./DropDownTimes";

function App() {
  const optionClick = (object) => {

  }

  return (
      <div className="App">
        <DropDownTimes times={[0,1]} onChange={optionClick}/>
      </div>
  );
}



export default App;
