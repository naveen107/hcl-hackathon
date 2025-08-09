import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loginbuttonClicked, setLoginButtonClicked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [loginbuttonClicked, setLoginButtonClicked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setForm({ ...form, email });
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        setError('');
        alert('Sign up successful!');
    };

    useEffect(() => {
        fetch("http://localhost:3001/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: form.email, password: form.password }), // Corrected line
        })
        .then(res => {
            if (!res.ok) { // Handle non-2xx responses
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
        setLoginButtonClicked(false);
    }, [loginbuttonClicked]);

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
                            pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                            title='Please enter a valid email address'
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
                    <button type="submit" style={{ width: '100%', padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }} onClick={() =>  setLoginButtonClicked(true)}>
                        Login
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;