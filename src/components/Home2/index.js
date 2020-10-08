import React from "react";

function Home2() {
return (

        <section className="sticky" id="featured-project" style={{backgroundColor: "#333"}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h2 style={{textAlign: "center"}}>Featured Project</h2>
                </div>
            </div> 
            <div className="row">
                <div className="col-md-6">
                    <img src={require('../../images/home/brain-juice-400w.jpg')} alt="website design of company" />
                    </div>
                    <div className="col-md-6">
                    <p>Students or writers experiencing writers block can get pretty exhausted after hours and hours of work. We designed this app so that students can have a happy place to go to for relaxation and revitalizing their minds. We designed this application to provide stimulating visuals, inspirational quotes, jokes and advice that the user can explore and browse.</p>
                    <a className="btn btn-primary btn-sm" href="./portfolio-master.html#brain-juice" role="button">Read More</a>
                </div>
            </div>
        </div>
        </section>

)
}

export default Home2;