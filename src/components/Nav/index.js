import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Nav() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="index.html"><img src={require("../../images/jennifer-wong-logo.svg")} alt="logotype - jennifer wong" height="57px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link to="/portfolio" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="./portfolio-master.html#tech-comp" className="dropdown-item">Website Redesign: Tech Company</Link>
            <Link to="./portfolio-master.html#torque-comp" className="dropdown-item">Website Redesign: Torque Solutions Company</Link>
            <Link to="./portfolio-master.html#brain-juice" className="dropdown-item">Brain Juice</Link>
            <Link to="./portfolio-master.html#skj-recipe-library" className="dropdown-item">SKJ Recipe Library</Link>
            <Link to="./portfolio-master.html#employee-tracker" className="dropdown-item">Employee Tracker</Link>
            <Link to="./portfolio-master.html#express-note-taker" className="dropdown-item">Express Note Taker</Link>
            <Link to="./portfolio-master.html#weather-dashboard" className="dropdown-item">Weather Dashboard</Link>
          </div>
          </li>
          <li className="nav-item">
            <Link to="contact.html" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="images/jennifer-web-developer-resume-9-20-2020.pdf" className="nav-link" target="_blank">View Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;



{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="index.html"><img src={require("../../images/jennifer-wong-logo.svg")} alt="logotype - jennifer wong" height="57px" /></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="portfolio.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      <a className="dropdown-item" href="./portfolio-master.html#tech-comp">Website Redesign: Tech Company</a>
      <a className="dropdown-item" href="./portfolio-master.html#torque-comp">Website Redesign: Torque Solutions Company</a>
      <a className="dropdown-item" href="./portfolio-master.html#brain-juice">Brain Juice</a>
      <a className="dropdown-item" href="./portfolio-master.html#skj-recipe-library">SKJ Recipe Library</a>
      <a className="dropdown-item" href="./portfolio-master.html#employee-tracker">Employee Tracker</a>
      <a className="dropdown-item" href="./portfolio-master.html#express-note-taker">Express Note Taker</a>
      <a className="dropdown-item" href="./portfolio-master.html#weather-dashboard">Weather Dashboard</a>
    </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="contact.html">Contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="images/jennifer-web-developer-resume-9-20-2020.pdf" target="_blank">View Resume</a>
    </li>
  </ul>
</div>
</nav> */}