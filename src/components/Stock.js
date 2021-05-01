import React from 'react'

const Stock = (props) => (
  <div id={props.id} onClick={props.onClick}>

    <div className="card" id={props.id}>
      <div className="card-body" id={props.id}>
        <h5 className="card-title" id={props.id}>{
            props.stock.name
          }</h5>
        <p className="card-text" id={props.id}>{
            props.stock.ticker
          }
          :
          {
            props.stock.price
          }
          </p>
      </div>
    </div>


  </div>
);

export default Stock
