import "./App.css";
import HelloWorld1 from "./components/helloWorld1/HelloWorld1";
import HelloWorld2 from "./components/helloWorld2/HelloWorld2";
import HelloWorld3 from "./components/helloWorld3/HelloWorld3";

function App() {

  return (
    <div className="wrapper">
      <div id="main" className="main">
        <HelloWorld1/>
        <HelloWorld2/>
        <HelloWorld3/>
      </div>
    </div>
  );
}

export default App;
