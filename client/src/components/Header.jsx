import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-red">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/covidsList">Covid News</a>
                        <a className="nav-link" href="/politicsList">Politic News</a>
                        <a className="nav-link" href="/sportsList">Sports News</a>
                    </div>
                </div>
            </nav>
            <div className="jumbotron jumbotron-fluid"  >
                <div className="container">
                    <h1 className="display-4">Welcome To The Atlanta Blog</h1>
                    <p className="lead">Get Your Updated's In Atlanta Today!</p>
                </div>
            </div>
        </div>
    );
};

export default Header;