import './App.css';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  function updateSearchTerm(term: string) {
    setSearchTerm(term);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products/list");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        console.log(postsData);
        setData(postsData.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section id="products" className="container mt-3">
          <h2>Products</h2>
          {error && <p>Error: {error.message}</p>}
          {data.length > 0 ? (
            <div className="row">
              {data.map((item: Product) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.price}</p>
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No products available.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
