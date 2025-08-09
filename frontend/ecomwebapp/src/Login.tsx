import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Login: React.FC = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setForm({ ...form, email });

        const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        setEmailError(emailValid ? '' : 'Please enter a valid email address');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            setError('Email and password are required.');
            return;
        }

        if (emailError) {
            setError('Please correct the email address.');
            return;
        }

        setError('');

        fetch("http://localhost:3001/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: form.email, password: form.password }),
        })
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data));
                alert("Login successful!");
                window.location.href = "/";
            })
            .catch(error => {
                console.error('Login error:', error);
                setError('Login failed. Please check your credentials.');
            });
    };

    return (
        <>
            <Header />
            <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <h3 style={{ margin: 0, fontSize: 24 }}>Login</h3>
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
                </div>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 16 }}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChangeEmail}
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                            required
                        />
                    </div>
                    {emailError && <div style={{ color: 'red', marginBottom: 16 }}>{emailError}</div>}
                    <div style={{ marginBottom: 16 }}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                            required
                        />
                    </div>
                    {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
                    <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>
                        Login
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Login;
