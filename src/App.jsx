import { useState } from "react";
import {BrowserRouter, Routes, Route
} from "react-router-dom";
import Index from "./pages";
import Contacts from "./pages/contacts";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index/>} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  )

  
  
  
}
export default App;
