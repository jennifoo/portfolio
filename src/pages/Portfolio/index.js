import React from "react";
import Footer from "../../components/Footer";

function Portfolio() {
return (
<>

<body className="portfolio-description">
  <div className="container-fluid">
  
<main>
{/* <!-- Portfolio --> */}
  <div className="container w-75 portfolio">
      <div className="row">
        <div className="col-12">
          <h1 style={{textAlign: 'center; margin-bottom: 50px'}}>Project Descriptions</h1>
        </div>
      </div> 

{/* <!-- SECTION --> */}
<a id="tech-comp"></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2>Website Redesign – Technology Company</h2>
          <img src={require("../../images/portfolio/mer-banner.jpg")} alt="technology solutions company website redesign" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: '0'}}>A technology solutions company wanted a website redesign not only speak to their engineers, but their CEOs, CFOs and procurement officers. They wanted to get away from the boxy look of their old website to something more dynamic and modern. Their website was redesigned with elements that make it easy for the user to find information and utilized slants and angles to help guide and engage users through the content.
              </p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://www.merichem.com/">View Application »</a>
        </div>
        <div className="col-6">
              <h4>My Responsibilities:</h4><span>This was a collaborative project at my previous job. I worked heavily in wireframing/layout/graphic design and was the main person responsible for overseeing the web development team.</span>
              <ul>
                <li>Wireframing</li>
                <li>Style Tiles</li>
                <li>Design and Layout</li>
                <li>CSS fine-tuning and debugging</li>
                <li>Overseeing Web Development Team</li>
              </ul>
        </div>
    </div>
</section>


{/* <!-- SECTION --> */}
<a id="torque-comp"></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2>Website Redesign – Torque Solutions Company</h2>
          <img src={require("../../images/portfolio/torque-solutions-website-redesign.jpg")} alt="torque solutions company website redesign" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: 0}}>A torque solutions company needed their website to give them a better online presence and to update the look of their outdated website which made it look like they were selling commodity products. The new updated look made it clear of the service they offered, providing innovating custom solutions, deep expertise, and impeccable customer service.
              </p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://www.kinematicsmfg.com/">View Application »</a>
        </div>
        <div className="col-6">
              <h4>My Responsibilities:</h4><span>This was a collaborative project at my previous job. I worked heavily in wireframing/layout/graphic design and was the main person responsible for overseeing the web development team.</span>
              <ul>
                <li>Wireframing</li>
                <li>Style Tiles</li>
                <li>Design and Layout</li>
                <li>CSS fine-tuning and debugging</li>
                <li>Overseeing Web Development Team</li>
              </ul>
        </div>
    </div>
</section>


{/* <!-- SECTION --> */}
<a id="brain-juice"></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2>Brain Juice</h2>
          <img src={require("../../images/portfolio/brain-juice.jpg")} alt="api application" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: 0}}>Students or writers experiencing writers block can get pretty exhausted after hours and hours of work. We designed this app so that students can have a happy place to go to for relaxation and revitalizing their minds. We designed this application to provide stimulating visuals, inspirational quotes, jokes and advice that the user can browse.
              </p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://brainjuicing.herokuapp.com/">View Application »</a>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://github.com/jennifoo/project1">Github »</a>
        </div>
        <div className="col-6">
              <ul>
                <li>Servers used: Node and Express</li>
                <li>Template Engine: Handlebars</li>
                <li>Database: backed by SQL database with a Sequelize ORM</li>
                <li>Utilizes GET and POST requests for retrieving and adding new data</li>
                <li>Follows the MVC paradigm</li>
              </ul>
        </div>
    </div>
</section>


{/* <!-- SECTION --> */}
<a id="skj-recipe-library"></a>
  <section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
              <hr style={{marginTop: '75px;'}} />
              <h2>SKJ Recipe Library</h2>
              <img src={require("../../images/projects/project-api-application.png")} alt="api application" />
        </div>
    </div>

    <div className="row">
        <div className="col-4">
              <img src={require("../../images/projects/project-api-application-body1.png")} />
        </div>
        <div className="col-8">
              <h3>Description:</h3>
              <p style={{marginTop: 0}}>A collaborative effort by team members, Jennifer, Kyle and Sean to design a web application based off of the user story below:</p>
              <p>Our client, a restaurant owner asked us to build a food and beverage reference for thier wait and bar staff. Our goal was to create a mobile responsive web application that the staff can use to reference food and beverage recipes. This application is a quick and easy way for our client to search for and receive recipes "on the fly" while juggling their other duties as an employee serving at a restaurant.</p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://jennifoo.github.io/project1/index.html">Visit Website</a>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://github.com/jennifoo/Project2">Github »</a>
        </div>
    </div>
</section>

{/* <!-- SECTION 1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ --> */}

{/* <!-- SECTION 1@@@ --> */}
<a id="employee-tracker"></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2 style={{marginTop: "75px", marginBottom: "25px"}}>Employee Tracker</h2>
          <img src={require("../../images/portfolio/employee-tracker.png")} alt="api application" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: "0"}}>Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. In the project, the application solution is architected and built for managing a company's employees using node, inquirer, and MySQL.
              </p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://vimeo.com/456706895">View Application</a>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://github.com/jennifoo/12-mysql-employee-tracker">Github »</a>
        </div>
        <div className="col-6">
              <h4>The user should be able to do the following:</h4>
              <ul>
                <li>Add departments, roles, employees</li>
                <li>View departments, roles, employees</li>
                <li>Update employee roles</li>
              </ul>
        </div>
    </div>
</section>


{/* <!-- SECTION 2@@@ --> */}
<a id="express-note-taker"></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2>Express Note Taker</h2>
          <img src={require("../../images/portfolio/express-note-taker.png")} alt="api application" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: "0"}}>This application can be used to write, save, and delete notes so that the user can organize their thoughts and keep track of tasks that need to be completed. This is targetted to users who need to store information that remains persistent the next time they open the application.
              </p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://jennifoo-express-note-taker.herokuapp.com/">View Application</a>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://github.com/jennifoo/11-express-note-taker">Github »</a>
        </div>
        <div className="col-6">
              <h4>Technical Information</h4>
              <ul>
                <li>This application uses an express backend to save and retrieve note data from a JSON file.</li>
                <li>Utilizes API routes: GET, POST and DELETE.</li>
                <li>Utlizes the 'fs' node module.</li>
              </ul>
        </div>
    </div>
</section>


{/* <!-- SECTION 3@@@ --> */}
<a id="weather-dashboard"></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2>Weather Dashboard</h2>
          <img src={require("../../images/portfolio/weather-dashboard-1.png")} alt="api application" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: "0"}}>This weather dashboard retrieves data from another application's API and uses it to display weather data by accessing their data and functionality by making requests with specific parameters to a URL. The final application runs in the browser and feature dynamically updated HTML and CSS. The third party API named, OpenWeather API was used to retrieve weather data for cities.
              </p>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://jennifoo.github.io/06-server-side-apis-weather-dashboard/">View Application</a>
              <a className="btn btn-primary btn-sm" target="_blank" href="https://github.com/jennifoo/06-server-side-apis-weather-dashboard">Github »</a>
        </div>
        <div className="col-6">
              <h4>User Story:</h4>
              <ul>
                As a traveler I want to see the weather outlook for multiple cities so that I can plan a trip accordingly.
              </ul>
        </div>
    </div>
</section>

</div>
{/* <!-- End PROJECT CONTAINER --> */}

</main>
</div>
</body>
<Footer />
</>
)
}

export default Portfolio;