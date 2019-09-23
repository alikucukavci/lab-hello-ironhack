import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const imgURL="/images/ironhack-logo.svg"

ReactDOM.render(
    <div>
        <div className="section-1">
            <div className="navBar">
                <img className="ironHack" src={imgURL} alt="" />
                <img className="menu" src="/images/menu-top.svg" alt=""/>
            </div>
            <h1>Say hello to <br /> ReactJS</h1>
            <p>You will learn a Frontend <br />framework from scratch, to <br /> become an Ninja Developer</p>
            <button>Awesome</button>
        </div>
        <div className="section-2">
            <div className="box">
                <img src="/images/icon1.png" alt="" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="box">
                <img src="/images/icon2.png" alt="" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>    
            </div>
            <div className="box">
                <img src="/images/icon3.png" alt="" />
                <h2>Single-Way</h2>
                <p>A set og immutable values are passed to the component's.</p>    
            </div>
            <div className="box">
                <img src="/images/icon4.png" alt="" />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>    
            </div>
            
            
        </div>
    </div>,

    document.getElementById('root')
);
