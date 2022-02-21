import React from 'react';
import {
    Route,
    Routes,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News, Loading } from './components';
import './App.css';
import logo from './components/images/logo.png';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path='/' element={<Homepage />} />
                    <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                    <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                    <Route exact path='/news' element={<News />} />
                </Routes>
                <footer className='bg-black'>
                    <div className="footer-list">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cryptocurrencies">Cryptocurrencies</Link></li>
                            <li><Link to="/news">News</Link></li>
                        </ul>
                        <div className="twitter">
                            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                    <div className="fotter-bottom">
                        <div className="foot-1">
                            <img src={logo} alt="logo" />
                            <p>Copyright &copy; Code Inertia. All Rights Reserved</p>
                        </div>
                        <div className="disclaimer">
                            <p>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
                        </div>
                    </div>
                    <p>Made with <FontAwesomeIcon className='icon' icon={faHeart} /> for crypto lover!</p>
                </footer>
            </div>
        </div>
    )
}

export default App