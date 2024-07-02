import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>  // Use Routes instead of Switch
                    <Route path="/" element={<Home />} />
                    <Route path="/beginner" element={<Beginner />} />
                    <Route path="/intermediate" element={<Intermediate />} />
                    <Route path="/advanced" element={<Advanced />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
