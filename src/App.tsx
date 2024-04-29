import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Overview from "./Components/Overview";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/o" element={<Overview></Overview>}></Route>
        <Route path="/c" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
