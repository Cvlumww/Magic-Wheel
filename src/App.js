// import logo from "./logo.svg";

import "./SCSS/app.css";

import Main from "./inc/main/main";
import Wheel from "./inc/wheel/wheel";
import Plinko from "./inc/plinko/plinko";

function App() {
  return (
    <div className="App">
      <Main />
      <Wheel />
      <Plinko />
    </div>
  );
}

export default App;
