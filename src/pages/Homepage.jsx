import { Link } from "react-router";
function Homepage() {
    return (
        <main>
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <h1 className="hero-title">
                                Benvenuti sul nostro store
                            </h1>

                            <p className="hero-text">
                                Scopri i nostri prodotti e naviga nel nostro mini e-commerce.
                            </p>

                            <Link to="/prodotti" className="btn btn-primary btn-lg">
                                Vai ai prodotti
                            </Link>
                        </div>

                        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                            <div className="hero-card">
                                <h2>React Router Store</h2>
                                <p>
                                    Un mini store creato con React, React Router e Fake Store API.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    );
}
export default Homepage;