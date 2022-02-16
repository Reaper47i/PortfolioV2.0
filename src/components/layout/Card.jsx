import React from "react";

function Used({ arr }){
    const items = [...arr];
    return(
      items.map((i)=> <div className="bubble" key={i}>{i}</div>)
    )
    
}


function Card({ description, name, used }){
    return(
      <div className='card'>
        <img src="" alt="" />
        <div className="card-body">
            <span className="card-name">{name}</span>
          <div className="card-desc">{description}</div>
          <div><button>Link</button><button>Github</button></div>
          <div className="card-used">
            <Used arr = {used}/>
          </div>
        </div>
      </div>
    )
  }

  export default Card;


  {/*  */}