import React from "react";
import Home from "./components/home";
import { NavBar } from "./components/navbar";
import {Routes,Route} from "react-router-dom";
import { Task } from "./components/task";
function App() {
  return (
   <div className="mt-0">
    
    <NavBar/>
    <Routes>
     <Route path="/task" element={<Task/>}/>
     <Route path="/" element={<Home/>}/>
    </Routes>
   </div>
  );
}

export default App;
