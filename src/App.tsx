import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Displaytodo from "./Components/Displaytodo";
import Addtodo from "./Components/Addtodo";

function App() {
  return (
    <>
      <Main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Displaytodo />}></Route>
          <Route path="/add" element={<Addtodo />}></Route>
        </Routes>
      </Main>
    </>
  );
}
export default App;
