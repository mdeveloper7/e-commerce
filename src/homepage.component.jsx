import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Gorras</h1>
                    <h2 className="subtitle">Compra Ahora</h2>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Chamarras</h1>
                    <h2 className="subtitle">Compra Ahora</h2>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Sneakers</h1>
                    <h2 className="subtitle">Compra Ahora</h2>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;