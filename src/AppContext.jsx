import { createContext, useState } from "react";
import ReactGA from "react-ga4";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const spinAnimation = () => {
    const deg = Math.floor(5000 + Math.random() * 5000);
    const wheelElement = document.getElementById("wheelElement");

    var transformCSS = "rotate(" + deg + "deg)";

    // alert((wheelElement.style.transform = transformCSS));

    wheelElement.style.transform = transformCSS;

    console.log("clicked");
    console.log(deg);
  };

  return (
    <AppContext.Provider
      value={{
        counter,
        setCounter,
        spinAnimation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
