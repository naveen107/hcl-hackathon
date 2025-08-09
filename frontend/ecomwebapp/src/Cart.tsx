import React from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

const mockCartItems: CartItem[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 299,
        quantity: 2,
        image: 'https://via.placeholder.com/80',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 499,
        quantity: 1,
        image: 'https://via.placeholder.com/80',
    },
];

const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    borderRadius: '8px',
    overflow: 'hidden',
};

const thStyle: React.CSSProperties = {
    background: '#f5f5f5',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 600,
    borderBottom: '2px solid #e0e0e0',
};

const tdStyle: React.CSSProperties = {
    padding: '12px',
    borderBottom: '1px solid #e0e0e0',
    verticalAlign: 'middle',
};

const imgStyle: React.CSSProperties = {
    borderRadius: '6px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
};

const Cart: React.FC = () => {
    const total = mockCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div
            style={{
            maxWidth: 600,
            margin: '2rem auto',
            padding: '2rem',
            background: '#fafafa',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            border: '2px solid #1976d2', // improved border color and thickness
            }}
        >
            <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Shopping Cart</h2>
            <button
                    type="button"
                    onClick={() => window.history.back()}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: 20,
                        cursor: 'pointer',
                        color: '#888',
                        padding: 0,
                        marginLeft: 8,
                        lineHeight: 1,
                    }}
                    aria-label="Close"
                >
                    ×
                </button>
            {mockCartItems.length === 0 ? (
            <p>Your cart is empty.</p>
            ) : (
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Price</th>
                    <th style={thStyle}>Qty</th>
                    <th style={thStyle}>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                {mockCartItems.map(item => (
                    <tr key={item.id}>
                    <td style={tdStyle}>
                        <img
                        src={item.image}
                        alt={item.name}
                        width={60}
                        style={imgStyle}
                        />
                    </td>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>₹{item.price}</td>
                    <td style={tdStyle}>{item.quantity}</td>
                    <td style={tdStyle}>₹{item.price * item.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
            <div
            style={{
                textAlign: 'right',
                marginTop: '1.5rem',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: '#1976d2',
            }}
            >
            Total: ₹{total}
            </div>
        </div>
    );
};

export default Cart;