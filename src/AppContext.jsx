import { createContext, useContext, useState, useEffect } from "react";
import ReactGA from "react-ga4";

const AppContext = createContext();

// Paul example
export const usePaulContext = () => {
  const state = useContext(AppContext);

  return state;
};

// MAIN
export function AppProvider({ children }) {
  useEffect(() => {
    console.log("Page Reload");
    console.log("showPop: ", showPop);
    console.log("showPlinko: ", showPlinko);
  }, []);

  const [result, setResult] = useState();
  const [showPop, setShowPop] = useState(false);

  const [showPlinko, setShowPlinko] = useState(false);

  const closePopUp = () => {
    setShowPop(!showPop);
  };

  const closePopUpAndOpenPlinko = () => {
    setShowPlinko(!showPlinko);
  };

  const spinAnimation = () => {
    const deg = Math.floor(5000 + Math.random() * 5000);
    const wheelElement = document.getElementById("wheelElement");
    const transformCSS = "rotate(" + deg + "deg)";

    wheelElement.style.transform = transformCSS;

    console.log("total spins: " + deg / 360);
    const r = deg % 360;

    // For testing plino system use this value 27.016666666666666

    setTimeout(() => {
      setResult(25 - Math.floor(r / 14.4));
    }, 2000);

    setTimeout(() => {
      message(showPop);

      setShowPop(!showPop);
    }, 6000);
  };

  const message = (result) => {
    console.log("result is:" + result);
  };

  return (
    <AppContext.Provider
      value={{
        result,
        setResult,
        spinAnimation,
        message,
        showPop,
        setShowPop,
        closePopUp,
        showPlinko,
        setShowPlinko,
        closePopUpAndOpenPlinko,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
