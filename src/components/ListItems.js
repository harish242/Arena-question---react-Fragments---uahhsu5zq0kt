import React from "react";

const ListItems = (props) => {
  const {list}=props
  return (
    <div>
        <div className="items">Hello, I'm the first child!</div>
  <ul>
    
    {list.map(all=>{
    return  <li className="items">Hello the value is {all}</li>;
    })}
  </ul>
    </div>
    
  )
};
export default ListItems;