import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return(
    <footer className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p>Let's Work Together</p>
            <a className="btn btn-primary btn-sm" href="contact.html" role="button">Contact Me</a>
          </div>
          <div className="col-md-6" id="footer-col-2">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <a target="_blank" href="https://github.com/jennifoo" target="_blank">GitHub</a></li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:jennifer.design@yahoo.com?subject=Inquiry from Developer Portfolio">Email</a></li>
              <li>
                <FontAwesomeIcon icon={faLinkedinIn} />
                <a target="_blank" href="https://www.linkedin.com/in/jennifer-wong-22711268/" target="_blank">LinkedIn</a></li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} />
                <a href="tel:713-534-3381" target="_blank">713-534-3381</a></li>
            </ul>
          </div>
        </div>
    </footer>
    
  )
}

{/* <i className="fas fa-envelope" aria-hidden="true"></i> */}
export default Footer;
