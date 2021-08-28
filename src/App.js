// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#040d21";
      // document.body.style.backgroundColor="rgb(1 1 40)";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        Mode={mode}
        togglemode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        <Switch>
          <Route exact path="/about">
            <About Mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below."
              Mode={mode}
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
