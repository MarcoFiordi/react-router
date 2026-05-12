import { useState } from "react";
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";

function App() {
    const [page, setPage] = useState('home');
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
            {page === 'Chi Siamo' && <Contacts />}
        </main>

    </>
}
export default App;