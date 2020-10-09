import React from "react";
import Footer from "../../components/Footer";
import Project from "../../components/Project";
import projects from "../../components/projects.json";

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

{projects.map(elem => (
  <Project 
    id={elem.id}
    h2={elem.h2}
    mainImage={elem.mainImage}
    alt={elem.alt}
    description={elem.description}
    viewLink={elem.viewLink}
    gitLink={elem.viewLink}
    h4Title={elem.h4Title}
    h4Description={elem.h4Description}
    list={elem.list}
  />
))}

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