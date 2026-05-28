import { useState, useEffect } from 'react';

function Storefront() {
    // 1. Set up our memory
    const [products, setProducts] = useState([]);

    // 2. Set up our action
    useEffect(() => {
        // We create an async function to get the data
        const fetchProducts = async () => {
            try {
                // Ask the Express server for the products
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();

                // Save the data to our React memory
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        // Call the function
        fetchProducts();
    }, []); // The empty array means "only run this once when the page loads"

    // 3. Display the data
    return (
        <div>
            <h1>Welcome to SwiftMart 🛍️</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Storefront;