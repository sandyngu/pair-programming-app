import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
    return(
        <div className="main">
            <h1 className="main__title">Welcome</h1>
            <Link to='/game'>
            <button className="main__button">Play!</button>
            </Link>
        </div>
    )
}

export default Home;