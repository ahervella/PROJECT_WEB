import './About.css'
import profileImg from './../../../assets/profile.jpg'

function About(){

    return(                
    <div className="aboutGroup">
        <div className="aboutGroupPhotoTextGroup">
            <img src={profileImg} alt="Alejandro Hervella" className="aboutGroupPhoto" />
            <div className="aboutGroupText">
                Hello!

                <p>My name is Alejandro, I come in peace, and I'm an engineer and game developer (and passtime artist).</p>
                <p>I love all things computers, art, retro technology, people, and of course, games. Please feel free to rach out about anything, I'll see you at the arcade!</p>
                <p>ahervella@me.com</p>
            </div>
        </div>
    </div>
    )
}

export default About;