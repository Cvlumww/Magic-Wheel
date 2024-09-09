import { createContext, useState } from "react";
import ReactGA from "react-ga4";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const spinAnimation = () => {
    const deg = Math.floor(5000 + Math.random() * 5000);
    const wheelElement = document.getElementById("wheelElement");

    wheelElement.style.transform = "rotate(" + deg + "deg);";

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
