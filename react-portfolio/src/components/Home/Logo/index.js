import './index.scss';
import profile from "../../../assets/images/ProfilePic.png";
import { useRef, useEffect } from 'react';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        // You can add any effect you need here
        // For example, animation initialization
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img src={profile} alt="Profile" className="profile-pic" />
        </div>
    );
};

export default Logo;
