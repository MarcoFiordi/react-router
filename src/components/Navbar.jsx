import { Link } from "react-router";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/contacts">Chi siamo</Link>
                </li>
                <li>
                    <Link to="/prodotti">Prodotti</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;