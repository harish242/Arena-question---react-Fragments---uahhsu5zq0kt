import React from "react";

const ListItems = (props) => {
  const {list}=props
  return (
  <ul>
    {list.map(all=>{
    return  <li className="items">Hello the value is {all}</li>;
    })}
  </ul>
  )
};
export default ListItems;