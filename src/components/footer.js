import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <section class="footer">

    <div class="share">
        <a href="#" ><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" ><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" ><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" ><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" ><FontAwesomeIcon icon={faGithub} /></a>
    </div>

    <div class="credit">created by <span>Deeprested</span> | all rights reserved</div>

</section>
    );
}

export default Footer;