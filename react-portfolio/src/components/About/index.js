import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    },[])
    
    return(
        <>
        <div className='container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray={['A','b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    As a passionate UI designer and front-end developer, 
                    I'm fueled by ambition and a thirst for knowledge. Continuously exploring intriguing 
                    new technologies and delving deeper into the latest web design techniques, 
                    I embrace every opportunity and challenge with enthusiasm. 
                    I particularly relish collaborating with diverse teams on a wide array of projects.
                </p>
                <p>
                    I believe that great design is not only visually stunning but also seamlessly functional, 
                    and I'm dedicated to creating user-centric experiences that leave a lasting impression.
                </p>
                <p>
                    I am quietly confident, naturally curious, and possess a strong heart when it comes to handling the 
                    burden of stress. This combination of traits allows me to approach each project with a calm and focused 
                    mindset, always eager to explore new ideas and find innovative solutions.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className = "face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className = "face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className = "face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className = "face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className = "face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className = "face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4" />
                    </div>
                </div>
            </div>
        </div>
         <Loader type="pacman" /> 
        </>

    )
}
        
export default About
