import React from "react";

function Project(props) {
return (
<>
<a id={props.id}></a>
<section>
    <div className="row">
        <div className="col-xs-12 col-sm-12">
          <hr />
          <h2>{props.h2}</h2>
          <img src={require(`../../images/portfolio/${props.mainImage}`)} alt={props.alt} /> 
        </div>
    </div>

    <div className="row">
        <div className="col-6">
              <h3>Description:</h3>
              <p style={{marginTop: '0'}}>
                {props.description}
                </p>
              <a className="btn btn-primary btn-sm" target="_blank" href={props.viewLink}>View Application »</a>
              {props.gitLink ? <a className="btn btn-primary btn-sm" target="_blank" style={{marginLeft: "5px"}} href={props.gitLink}>Github »</a> : null }
        </div>
        <div className="col-6">
              <h4>{props.h4Title}</h4><span>{props.h4Description}</span>
              <ul>
              {props.list ? props.list.map((elem, index) => (
              <li key={index}>{elem}</li>
              )) : null }
              </ul>
        </div>
    </div>
</section>
</>
)
}

          


export default Project;