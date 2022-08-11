import Nav from './Nav'

import classes from './ProfileCard.module.css'
import ProfileImage from '../images/profileImg.png'

const ProfileCard = () =>{
    return (
        <div className={classes.profileCard}>
        <div className={classes.profileInfo}>
            <div className={classes.profileImage}>
                <img src={ProfileImage} alt="User Jeremy Robson" />
            </div>
            <div className={classes.profileText}>
                <p className={classes.report}>Report for</p>
                <p className={classes.name}>Jeremy Robson</p>
            </div>
        </div>
        <Nav /> 
        </div>
    )
}

export default ProfileCard;  