import { useState } from "react";
import index from "./pages/Index";
import contacts from "./pages/contacts";

function App() {
  const[page, setPage] = useState('home');
  return <>
  <ul>
    <li>
      home
    </li>
    <li>
      chi siamo
    </li>
  </ul>

  <main>
    {page === 'home' && <Index />}
  </main>
  
  </>
}
export default App;
