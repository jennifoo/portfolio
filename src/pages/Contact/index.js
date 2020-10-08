import React from "react";
import Footer from "../../components/Footer";

function Contact() {
return (
        <>
        <main>
        <section className="container interior">
        <h1>Contact Me</h1>
        <form>
            <div className="form-group">
            <label>First Name</label>
                <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                </div>
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </section>
        </main>
        <Footer />
        </>
)
}

export default Contact;