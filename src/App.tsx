import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Overview from "./components/Overview";
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
