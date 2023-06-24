import "./App.css";
import RoutesWeb from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Components/Loader";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />} />
        <RoutesWeb />
      </BrowserRouter>
    </div>
  );
}

export default App;
