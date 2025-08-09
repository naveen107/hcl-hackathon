import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LaptopProps {
    brand: string;
    model: string;
    price: number;
    specs: {
        cpu: string;
        ram: string;
        storage: string;
        screenSize: string;
    };
}

const Laptop: React.FC<LaptopProps> = ({ brand, model, price, specs }) => (
    <>
    <Header />
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <div className="card">
                    {/* <img src="laptop_image.jpg" className="card-img-top" alt="Laptop Model" /> */}
                    <div className="card-body">
                        <h5 className="card-title">Lenovo</h5>
                        <h6 className="card-subtitle mb-2 text-muted">16GB RAM, 512GB SSD</h6>
                        <p className="card-text">Powerful laptop for work and play. Great for multitasking and performance.</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                <div className="card">
                    {/* <img src="laptop_image.jpg" className="card-img-top" alt="Laptop Model" /> */}
                    <div className="card-body">
                        <h5 className="card-title">Samsung</h5>
                        <h6 className="card-subtitle mb-2 text-muted">16GB RAM, 512GB SSD</h6>
                        <p className="card-text">Powerful laptop for work and play. Great for multitasking and performance.</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                <div className="card">
                    {/* <img src="laptop_image.jpg" className="card-img-top" alt="Laptop Model" /> */}
                    <div className="card-body">
                        <h5 className="card-title">Dell</h5>
                        <h6 className="card-subtitle mb-2 text-muted">16GB RAM, 512GB SSD</h6>
                        <p className="card-text">Powerful laptop for work and play. Great for multitasking and performance.</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
);

export default Laptop;