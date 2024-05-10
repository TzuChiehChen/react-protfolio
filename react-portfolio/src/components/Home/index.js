import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom'
import './index.scss';
import React, { useEffect, useState } from "react";
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'a', 'y']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i,</span>
                <br />
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m</span>
                <span className = {`${letterClass} _14`}> </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2> Frontend Developer / UI Designer</h2>
                <Link to = "/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />

        </div>
    );
}
export default Home