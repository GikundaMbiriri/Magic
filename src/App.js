import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./landingPage/Home";
import Dashboard from "./player/Dashboard";

function App() {
  return (
    <div className=" bg-main-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/player" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
