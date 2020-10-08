import React from "react";

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
              <li><i className="fa fa-github" aria-hidden="true"></i><a target="_blank" href="https://github.com/jennifoo" target="_blank">GitHub</a></li>
              <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:jennifer.design@yahoo.com?subject=Inquiry from Developer Portfolio">Email</a></li>
              <li><i className="fa fa-linkedin" aria-hidden="true"></i><a target="_blank" href="https://www.linkedin.com/in/jennifer-wong-22711268/" target="_blank">LinkedIn</a></li>
              <li><i className="fa fa-mobile" aria-hidden="true"></i><a href="tel:713-534-3381" target="_blank">713-534-3381</a></li>
            </ul>
          </div>
        </div>
    </footer>
    
  )
}

export default Footer;
