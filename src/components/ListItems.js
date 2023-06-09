import React from "react";

const ListItems = (props) => {
  const {list}=props
  return (
    <div id='list'>
       
  <ul>
    
    {list.map(all=>{
    return  <li key={all} className="items">Hello the value is {all}</li>;
    })}
  </ul>
    </div>
    
  )
};
export default ListItems;