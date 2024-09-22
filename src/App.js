// import logo from "./logo.svg";

import "./SCSS/app.css";

import Main from "./inc/main/main";
import Wheel from "./inc/wheel/wheel";
import Plinko from "./inc/plinko/plinko";

import { AppContext, AppProvider } from "./AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Main />

        <Wheel />
        {/* <Plinko /> */}
      </AppProvider>
    </div>
  );
}

export default App;
