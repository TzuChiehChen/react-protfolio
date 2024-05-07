import LogoTitle from '../../assets/images/logo-j.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom'
import './index.scss';
import React, { useEffect, useState } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'a', 'y']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    return (
        <div className="ocntainer home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                web developer
                </h1>
                <h2> Frontend Developer / UI Designer</h2>
                <Link to = "/contact" className='flat-button'>CONTACT ME</Link>
            </div>


        </div>
    );
}

export default Home