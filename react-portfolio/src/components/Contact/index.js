import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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
                'service_mvojte8',
                'template_nz5qztg',
                refForm.current,
                'NxrSrLh2OZt6xlTV_'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () =>{
                    alert('Failed to send the message, please try again')
                }
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
                <p>Thank you for visiting my contact page! I'm currently seeking any career opportunities that align with my skills, interests, and professional goals. 
                I have a keen interest in all facets of web design, from user experience to visual aesthetics.
                </p>
                <div className = 'contact-form'> 
                    <form ref={(refForm)} onSubmit={sendEmail}>
                        <ul>
                            <li className = 'half'>
                                <input placeholder="Name" type="text" name="name" required />
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
            <div className = 'info-map'>
                Jay Chen,
                <br />
                United States,
                <br />
                CA,
                <br />
                Hayward <br />
                <span>tzu.c.chen24@gmail.com</span>
            </div>
            <div className="map-wrap">
            <MapContainer center={[37.66882, -122.080796]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[37.66882, -122.080796]}>
              <Popup>Come over for a cup of coffee!</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type ="pacman" />
    </>)
}

export default Contact