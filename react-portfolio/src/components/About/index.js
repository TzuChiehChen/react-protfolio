import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return(
        <div className='container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
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
        </div>
    )
}
        
export default About
