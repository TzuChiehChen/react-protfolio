import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {
    
    return (
        <div className="ocntainer home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                ay
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