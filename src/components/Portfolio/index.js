import React from "react";

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

</div>
{/* <!-- End PROJECT CONTAINER --> */}

</main>
</div>
</body>

</>
)
}

export default Portfolio;