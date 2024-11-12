import { useEffect, type FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Approute from "./routes/Approute";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
interface AppProps {}

const App: FC<AppProps> = ({}) => {
  useEffect(() => {
    document.title = "Welcome|MovieSTreamer";
  }, []);
  return (
    <Router>
      <Approute />
      <ToastContainer />
    </Router>
  );
};
export default App;
