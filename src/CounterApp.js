import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'

export const CounterApp = () => {
    const [counter, setCounter] = useState(10)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div className="bg-dark bg-gradient">
                <nav className="container nav">
                    <Link to="/" className="nav-link text-light">Home</Link>
                    <Link to="/about" className="nav-link text-light">About</Link>
                    <Link to="/contact" className="nav-link text-light">Contact</Link>
                </nav>
            </div>
            <div className="container mt-5">
                <h1>Counter en React</h1>
                <p>Valor: {counter}</p>
                <button className="btn btn-primary" onClick={handleAdd}>
                    +1
                </button>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </>
    )
}
