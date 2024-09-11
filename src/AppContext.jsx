import { createContext, useContext, useState } from "react";
import ReactGA from "react-ga4";

const AppContext = createContext();

// Paul example
export const usePaulContext = () => {
  const state = useContext(AppContext);

  return state;
};

// MAIN
export function AppProvider({ children }) {
  const [result, setResult] = useState();

  const spinAnimation = () => {
    const deg = Math.floor(5000 + Math.random() * 5000);
    const wheelElement = document.getElementById("wheelElement");
    const transformCSS = "rotate(" + deg + "deg)";

    wheelElement.style.transform = transformCSS;

    console.log("total spins: " + deg / 360);
    const r = deg % 360;

    setTimeout(() => {
      setResult(25 - Math.floor(r / 14.4));
    }, 5000);

    setTimeout(() => {
      message(result);
    }, 6000);
  };

  const message = (result) => {
    alert(result);
  };

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        spinAnimation,
        message,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
