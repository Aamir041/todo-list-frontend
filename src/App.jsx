import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css"
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import List from "./components/List/List";

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/lists" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;