import React from 'react'

const Card = (props) =>{
return(
    <React.Fragment>
    <div className="card">
  <div className="container">
    <h4><b>{props.name}</b></h4>
    <br />
    <h6>Tech</h6>
    <h6>{props.title}</h6>
    <h6>{props.cured}</h6>
  </div>
</div>
    </React.Fragment>
)
}

export default Card;