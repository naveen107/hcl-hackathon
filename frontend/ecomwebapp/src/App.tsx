import './App.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<Product[]>([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  function updateSearchTerm(term: string) {
    setSearchTerm(term);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="products" className="container mt-3">
          <h2>Products</h2>
          {/* {data.map((item: Product) => (
            <div key={item.id} className="card mb-3" style={{ maxWidth: '300px' }}>
              <div>
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
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
          {error && <p>Error: {error.message}</p>}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
