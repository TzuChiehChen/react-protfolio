import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import './index.scss';
import React, { useEffect, useState } from "react";
import Logo from './Logo';
import Cases from '../Cases';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'a', 'y']
    const jobArray = ['U', 'I', '/', 'U', 'X', ' ', 'D', 'e', 's', 'i', 'g', 'n', 'e', 'r', '|']
    const jobArray1 = ['I', 'n', 't', 'e', 'r', 'a', 'c', 't', 'i', 'o', 'n', ' ', 'D', 'e', 's', 'i', 'g', 'n', '|']
    const jobArray2 = ['F', 'r', 'o', 'n', 't', '-', 'E', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1 className="hi-section">
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                    </h1>
                    <h1 className="name-section">
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <span className={`${letterClass} _15`}> </span>
                        <AnimatedLetters letterClass={letterClass}
                                         strArray={nameArray}
                                         idx={15} />
                    </h1>
                <div>
                    <p>
                        I'm a passionate designer and front-end developer, based in California.
                        I believe that great design is visually stunning and seamlessly functional,
                        and I'm dedicated to creating user-centric experiences that leave a lasting impression.
                    </p>
                </div>
            
                <Link to = "/contact" className='flat-button'>CONTACT ME</Link>

                <h2 className="job-section"> 
                <AnimatedLetters letterClass={letterClass}
                                         strArray={jobArray}
                                         idx={15} />
                <AnimatedLetters letterClass={letterClass}
                                         strArray={jobArray1}
                                         idx={15} />   
                <AnimatedLetters letterClass={letterClass}
                                         strArray={jobArray2}
                                         idx={15} />                                               
                </h2>
            </div>
                <Logo />
            <div className="cases-section">
                <Cases />
            </div>
            
        </div>
        <Loader type = "pacman" />
        </>
    )   
}
export default Home