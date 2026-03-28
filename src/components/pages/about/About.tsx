import './About.css'
import profileImg from './../../../assets/profile.jpg'
import TText from '../../TText';

function About(){

    return(                
    <div className="aboutGroup">
        <div className="aboutGroupPhotoTextGroup">
            <img src={profileImg} alt="Alejandro Hervella" className="aboutGroupPhoto" />
            <p className="aboutGroupText"><TText locKey="ABOUT_BODY"/></p>
        </div>
    </div>
    )
}

export default About;