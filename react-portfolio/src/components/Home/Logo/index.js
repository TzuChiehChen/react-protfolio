import './index.scss';
import profile from "../../../assets/images/ProfilePic.png";
import { useRef, useEffect } from 'react';

const Logo = () => {
    const solidLogoRef = useRef();

    useEffect(() => {
        // Trigger the transition by adding the 'visible' class
        solidLogoRef.current.classList.add('visible');
    }, []);

    return (
        <div className="logo-container">
            <img ref={solidLogoRef} src={profile} alt="Profile" className="profile-pic" />
        </div>
    );
};

export default Logo;
