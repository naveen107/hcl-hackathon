import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: '#222',
            color: '#fff',
            textAlign: 'center',
            padding: '1rem 0',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
        }}>
            <div>
                &copy; {new Date().getFullYear()} EcomWebApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;