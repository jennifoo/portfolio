import React from "react";
import Footer from "../Footer"

function Home3() {
return (
        <>
        <section className="sticky" id="recent-project" style={{backgroundColor: "#eee"}}>
        <div className="container w-75 rp">
            <div className="row">
                <div className="col-12">
                <h2 style={{textAlign: "center"}}>Recent Projects</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4"><img src={require('../../images/portfolio/brain-juice-preview.jpg')} alt="website design of company" /></div>
                <div className="col-xs-12 col-sm-4"><img src={require('../../images/portfolio/SKJ-receipe-lookup-preview.jpg')} alt="website design of company" /></div>
                <div className="col-xs-12 col-sm-4"><img src={require('../../images/portfolio/employee-tracker-preview.png')} alt="website design of company" /></div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4"><img src={require('../../images/portfolio/express-note-taker-preview.png')} alt="website design of company" /></div>
                <div className="col-xs-12 col-sm-4"><img src={require('../../images/portfolio/employee-tracker-preview.png')} alt="website design of company" /></div>
                <div className="col-xs-12 col-sm-4"><img src={require('../../images/portfolio/third-party-api-work-day-scheduler-preview.png')} alt="website design of company" /></div>
            </div>
            <a className="btn btn-primary btn-sm" href="./portfolio-master.html" role="button">See Portfolio Page</a>
        </div>
        <Footer />
        </section>
        </>

)
}

export default Home3;