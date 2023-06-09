import React from "react";

const ListItems = (props) => {
  const {list}=props
  return (
    <div id='list'>
       
  
    
    {list.map(all=>{
    return  <li key={all} className="items">Hello the value is {all}</li>;
    })}
  
    </div>
    
  )
};
export default ListItems;