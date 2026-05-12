import { useEffect, useState } from "react";

function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProdotti(data);
            });
    }, []);
    return (
        <main>
            <div>Prodotti</div>
            <p>lista dei prodotti</p>
            <ul>
                {prodotti.map((prodotto) => (
                    <li key={prodotto.id}>
                        <h2>{prodotto.title}</h2>
                        <p>{prodotto.price} €</p>
                        <img src={prodotto.image} alt={prodotto.title} />
                    </li>
                ))}
            </ul>
        </main>

    )
}
export default Prodotti