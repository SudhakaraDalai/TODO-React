import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/Signin/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Registration/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
