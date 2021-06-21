import logo from './logo.svg';
import './App.css';
import AddNewLink from "./my_edits/pages/AddNewLink"
import AllLinks from "./my_edits/pages/AllLinks"
import JsonApi from "./api/JsonApi";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <AddNewLink/>
    // <JsonApi/>
  );
}

export default App;
