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
        <img src="" alt="" />
        <div className="card-body">
            <span className="card-name">{props.name}</span>
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