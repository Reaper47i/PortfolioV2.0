import React from "react";

function Used(props){
    const arr = Array(props.array) 
    for(let i of arr){
        return(
            <div className='bubble' key={i} >{i}</div>
        )
    }
}

function Card(props){
    return(
      <div className='card'>
        <div className="card-img"></div>
        <div className="card-body">
            <div className="card-name">{props.name}</div>
          <div className="card-desc">{props.description}</div>
          <div className="card-used">
             <Used array = {props.used} /> 
          </div>
        </div>
      </div>
    )
  }

  export default Card;


  {/*  */}