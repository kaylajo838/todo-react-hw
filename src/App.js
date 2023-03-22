import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import ToDo from "./ToDo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toDo" element={<ToDo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
