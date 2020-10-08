import React from "react";

function Home1() {
return (
  <section className="sticky" id="hero">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="container">
            <div className="grid">
              <div className="align-self-center intro-text">
                <h1>Hi I'm Jenn</h1>
                <h3>I design and develop responsive websites that use SEO best practices.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
            <div className="intro-pic"><img src={require('../../images/jennifer2.jpg')} alt="profile picture of Jennifer" /></div>
        </div>
      </div>
  </section>
)
}

export default Home1;