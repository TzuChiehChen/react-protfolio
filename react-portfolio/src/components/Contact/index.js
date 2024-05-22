import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_nz5qztg',
                refForm.current,
                'NxrSrLh2OZt6xlTV_'
            )
    }

    return (
    <>
        <div className = "container contact-page">
            <div className = 'text-zone'> 
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm ', 'e']}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in ....
                </p>
                <div className = 'contact-form'> 
                    <form ref={(refForm)} onSubmit={sendEmail}>
                        <ul>
                            <li className = 'half'>
                                <input type = "text" name = "name" placeholder = "Name" required />
                            </li>
                            <li className = 'half'>
                                <input type = "Email" name = "Email" placeholder = "Email" required />
                            </li>
                            <li className = 'half1'>
                                <input placeholder = "Subject" name = "text" type = "text" required />
                            </li>
                            <li>
                                <textarea placeholder = "Message" name="message" required >
                                </textarea>
                            </li>
                            <li>
                                <input type = "submit" className = 'flat-button' value = "SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type ="pacman" />
    </>)
}

export default Contact