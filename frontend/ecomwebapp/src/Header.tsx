import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';

const SUGGESTIONS = [
    "Laptop",
    "Mobile",
    "Headphones",
    "Shoes",
    "Watch"
];

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const fetchUser = localStorage.getItem('user');

    function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setSearchTerm(value);
        if (value.length > 0) {
            setFilteredSuggestions(
                SUGGESTIONS.filter(s =>
                    s.toLowerCase().includes(value.toLowerCase())
                )
            );
            setShowSuggestions(true);
        } else {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
        }
    }

    function handleSuggestionClick(suggestion: string) {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
        window.location.href = `/${suggestion.toLowerCase()}`;
    }

    function handleBlur() {
        setTimeout(() => setShowSuggestions(false), 100); // Delay to allow click
    }

    return (
        <header className="Header" style={{
            background: "#343a40",
            color: "#fff",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08)"
        }}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    background: "rgba(255,255,255,0.04)",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        color: "#f8f9fa"
                    }}
                >
                    EcomWebApp
                </h1>
                <div style={{ position: "relative", width: "320px" }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchTerm}
                        autoComplete="off"
                        onChange={handleSearchChange}
                        onFocus={() => searchTerm && setShowSuggestions(true)}
                        onBlur={handleBlur}
                        style={{
                            width: "100%",
                            padding: "10px 16px",
                            borderRadius: "6px",
                            border: "1px solid #ced4da",
                            background: "#23272b",
                            color: "#fff",
                            fontSize: "1rem",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
                        }}
                    />
                    {showSuggestions && filteredSuggestions.length > 0 && (
                        <ul
                            style={{
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                right: 0,
                                background: "#23272b",
                                color: "#fff",
                                border: "1px solid #ced4da",
                                borderTop: "none",
                                borderRadius: "0 0 6px 6px",
                                margin: 0,
                                padding: "4px 0",
                                listStyle: "none",
                                zIndex: 10,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                            }}
                        >
                            {filteredSuggestions.map(suggestion => (
                                <li
                                    key={suggestion}
                                    style={{
                                        padding: "8px 16px",
                                        cursor: "pointer",
                                        background: "#23272b"
                                    }}
                                    onMouseDown={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <button onClick={() => window.location.href = "/cart"} className="btn btn-primary">Cart</button>
                {fetchUser && JSON.parse(fetchUser).user ?
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {JSON.parse(fetchUser).user.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => window.location.href = "/orders"}>Orders</Dropdown.Item>
                        <Dropdown.Item onClick={() => window.location.href = "/Logout"}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    
                    :
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Login
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => window.location.href = "/login"}>Existing customer Login</Dropdown.Item>
                            <Dropdown.Item onClick={() => window.location.href = "/signup"}>New customer Sign Up</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                }
            </nav>
        </header>
    );
}
export default Header;